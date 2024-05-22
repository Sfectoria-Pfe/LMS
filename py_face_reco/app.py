import face_recognition
from flask import Flask, request
from flask_cors import CORS
import os
from datetime import datetime
import base64
import re
import pyodbc

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = ".temp/"
FACES_FOLDER = "faces/"

@app.route("/process_face", methods=['POST'])
async def process_text():

    data_json = request.get_json()

    img_decoded = base64.b64decode(re.sub("data:image/jpeg;base64,", "", data_json["img_base64"]))

    img_name = str(datetime.now().strftime("%m-%d-%Y-%H-%M-%S")) + ".jpg"


    unknown_image_path = UPLOAD_FOLDER + img_name
    known_image_path = FACES_FOLDER + data_json["email"] + ".jpg"

    with open(UPLOAD_FOLDER + img_name, 'wb') as f:
        f.write(img_decoded)

    known_image = face_recognition.load_image_file(known_image_path)
    unknown_image = face_recognition.load_image_file(unknown_image_path)

    person_encoding = face_recognition.face_encodings(known_image)[0]

    try:
        unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

        results = face_recognition.compare_faces([person_encoding], unknown_encoding)

    except IndexError:
        return {"valid": False, "message": "No face found", "email": data_json["email"]}, 400, {"Content-Type": "application/json"}

    os.remove(unknown_image_path)

    if True in results:

        return {"valid": True, "message": "User valid", "email": data_json["email"]}, 200, {"Content-Type": "application/json"}
    else:
        return {"valid": False, "message": "User invalid", "email": data_json["email"]}, 400, {"Content-Type": "application/json"}
    
if __name__ == '__main__':
    print("--------- APP STARTED ON PORT: 8080 ---------")
    from waitress import serve
    serve(app, host='0.0.0.0', port=8080)
