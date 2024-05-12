import { roleContent } from "@prisma/client";

export const dataUser = [
  //students
  {
    image:
      'https://img.freepik.com/photos-gratuite/illustration-3d-belle-fille-aux-cheveux-bruns-au-maquillage-professionnel_1142-38905.jpg?t=st=1714838830~exp=1714842430~hmac=747ec5bd38129f9518358b1a88209700bb1e7099d1c0a522fd6641025fdb3088&w=740',
    firstName: 'ferchichi',
    lastName: 'ghofrane',
    email: 'ghofferchichi@gmail.com',
    password: '1111',
    phone: 258147369,
    address: 'Tunis',
    role: roleContent.Student ,
  },
  {
    image:
      'https://img.freepik.com/photos-gratuite/portrait-jeune-homme-affaires-moustache-lunettes-rendu-3d_1142-41831.jpg?w=740&t=st=1714308829~exp=1714309429~hmac=76711254e7202bde60710cec82aaae6107c7358f39cc473de8022d43492bc862',
    firstName: 'ferchichi',
    lastName: 'ranim',
    email: 'ranimferchichi@gmail.com',
    password: '1122',
    phone: 14725836,
    address: 'Sfax',
    role: roleContent.Student ,
  },

  {
    image:
      'https://img.freepik.com/photos-gratuite/portrait-jeune-femme-portant-lunettes-rendu-3d_1142-43632.jpg?t=st=1714839189~exp=1714842789~hmac=9ed6dee49a5692fe78133e3c1dcb45c71498213d33c1df58984ba962b2911af9&w=740',
    firstName: 'oueslati',
    lastName: 'mariem',
    email: 'mariemoueslati@gmail.com',
    password: '3333',
    phone: 3336836,
    address: 'Siliana',
    role: roleContent.Student
  },
  {
    image:
      'https://img.freepik.com/photos-gratuite/illustration-3d-personnage-dessin-anime-costume-affaires-lunettes_1142-40377.jpg?w=740&t=st=1714308941~exp=1714309541~hmac=b313606e54aef1763cd47432129230f6dba626481034d5cd43705ba79081fade',
    firstName: 'chakroun',
    lastName: 'hamza',
    email: 'chakrounhamza@gmail.com',
    password: '0010',
    phone: 58636836,
    address: 'Sousse',
    role: roleContent.Student
  },

  {
    image:
      'https://img.freepik.com/photos-gratuite/illustration-3d-homme-affaires-lunettes-fond-rue-ville_1142-51028.jpg?w=740&t=st=1714837701~exp=1714838301~hmac=5e148a654d013a83dec4fa71bfd7db9bc9dc8e632cc9c579379b83368d12ef3a',
    firstName: 'ferchichi',
    lastName: 'ghaith',
    email: 'ghaithferchichi@gmail.com',
    password: '2222',
    phone: 1555836,
    address: 'Beja',
    role: roleContent.Student,
  },

  {
    image:
      'https://img.freepik.com/photos-gratuite/portrait-jeune-homme-affaires-moustache-lunettes-rendu-3d_1142-51509.jpg?w=740&t=st=1714837892~exp=1714838492~hmac=b6d4feef5251aecaa5cc2eb2dc63f84d431d3e22046ab5029f03324ae6fa94f5',
    firstName: 'taktak',
    lastName: 'Amine',
    email: 'amine33tt@gmail.com',
    password: '22a2',
    phone: 9555836,
    address: 'Sfax',
    role: roleContent.Student,
  },
  {
    image:
      'https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/219497874_2920618321527888_4242538066758795595_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LjKQKJjpqAAAX_3gM82&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCP4NtOV2V3BgaxG3eNNzvimfi0BTaDB3r04UPGyKj0Kw&oe=660776C3',
    firstName: 'chebi',
    lastName: 'emna',
    email: 'chebiemna@gmail.com',
    password: '1510',
    phone: 20836836,
    address: 'Gabes',
    role: roleContent.Student
  },
  //teachers
  {
    image: 'http://localhost:5000/upload/seed/users/farouk.JPG',
    firstName: 'mestiri',
    lastName: 'farouk',
    email: 'mestirifarouk@gmail.com',
    password: '0009',
    phone: 29836836,
    address: 'Djerba',
    role: roleContent.Teacher,
  },

  {
    image:
      'https://img.freepik.com/photos-gratuite/portrait-homme-affaires-lunettes-moustache-rendu-3d_1142-43442.jpg?w=740&t=st=1714837554~exp=1714838154~hmac=e484a71ab1db5cfc1069f235373e2ec24f5851439e4ba5116a1392609b2c80d5',
    firstName: 'afifi',
    lastName: 'mohamed',
    email: 'afifimohamed@gmail.com',
    password: '2209',
    phone: 98836836,
    address: 'Ben Arous',
    role: roleContent.Student
  },

  {
    image: 'http://localhost:5000/upload/seed/users/rania.JPG',
    firstName: 'elouni',
    lastName: 'rania',
    email: 'elounirania@gmail.com',
    password: '0007',
    phone: 56836836,
    address: 'Ariana',
    role: roleContent.Teacher ,
  },
  //mangers
  {
    image: 'http://localhost:5000/upload/seed/users/khalil.JPG',
    firstName: 'kraiem',
    lastName: 'khalil',
    email: 'kraiemkhalil@gmail.com',
    password: '0887',
    phone: 50836036,
    address: 'Nabeul',
    role: roleContent.Manager,
  },

];