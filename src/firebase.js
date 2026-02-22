// Importamos las herramientas de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Reemplaza TODO este bloque por las llaves que te dio Firebase:
const firebaseConfig = {
  apiKey: "AIzaSyA6MogOz6574Bwl2PE0y-rYzgNA7e3uKTQ",
  authDomain: "portafolio-7373f.firebaseapp.com",
  projectId: "portafolio-7373f",
  storageBucket: "portafolio-7373f.firebasestorage.app",
  messagingSenderId: "909744989954",
  appId: "1:909744989954:web:0ac8dcc8c270e592c8041b"
};

// Encendemos la aplicación
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos para poder usarla en otros archivos
export const db = getFirestore(app);