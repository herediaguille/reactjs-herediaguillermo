import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0kGWL5Y35CVGF7PM2QBxRuy8Hfovtqxg",
  authDomain: "proyectoreactjsheredia.firebaseapp.com",
  projectId: "proyectoreactjsheredia",
  storageBucket: "proyectoreactjsheredia.appspot.com",
  messagingSenderId: "163142261606",
  appId: "1:163142261606:web:6b8385f173041dffe786a7"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app