//let LOCALHOST =  "localhost:3000";
let API_SIA = "localhost:3000";

const URL = {
  CURSOS: `http://${API_SIA}/curso/`,
  ALUMNOS: `http://${API_SIA}/alumno/`,
  DOCENTES: `http://${API_SIA}/docente/`,
  ACUDIENTES: `http://${API_SIA}/acudiente`,
  CONFIG: {
    apiKey: "AIzaSyC3xV67AVjRXN1NQFHkgb5yZEJGSiqussg",
    authDomain: "sia-2019.firebaseapp.com",
    databaseURL: "https://sia-2019.firebaseio.com",
    projectId: "sia-2019",
    storageBucket: "sia-2019.appspot.com",
    messagingSenderId: "568948437578",
    appId: "1:568948437578:web:2edc682b6bcac51d"
  }
};

export default URL;
