from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime
import base64
import re
import face_recognition

app = Flask(__name__)

# Apply CORS to the entire app
CORS(app)

UPLOAD_FOLDER = ".temp/"
FACES_FOLDER = "faces/"

@app.route("/process_face", methods=['POST'])
async def process_text():
    print("Processing request")
    data_json = request.get_json()

    if data_json["img_base64"].startswith("data:image/jpeg;base64,"):
        img_decoded = base64.b64decode(data_json["img_base64"].split(",")[1])
    else:
        img_decoded = base64.b64decode(data_json["img_base64"])

    img_name = str(datetime.now().strftime("%m-%d-%Y-%H-%M-%S")) + ".jpg"

    unknown_image_path = os.path.join(UPLOAD_FOLDER, img_name)
    known_image_path = os.path.join(FACES_FOLDER, data_json["email"] + ".jpg")

    with open(unknown_image_path, 'wb') as f:
        f.write(img_decoded)

    try:
        known_image = face_recognition.load_image_file(known_image_path)
        unknown_image = face_recognition.load_image_file(unknown_image_path)

        person_encoding = face_recognition.face_encodings(known_image)[0]
        unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

        results = face_recognition.compare_faces([person_encoding], unknown_encoding)
    except IndexError:
        os.remove(unknown_image_path)
        return jsonify({"valid": False, "message": "No face found", "email": data_json["email"]}), 400

    os.remove(unknown_image_path)

    if True in results:
        return jsonify({"valid": True, "message": "User valid", "email": data_json["email"]}), 200
    else:
        return jsonify({"valid": False, "message": "User invalid", "email": data_json["email"]}), 400

if __name__ == '__main__':
    print("--------- APP STARTED ON PORT: 9999 ---------")
    from waitress import serve
    serve(app, host='0.0.0.0', port=9999)
