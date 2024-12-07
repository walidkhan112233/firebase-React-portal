
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBpaI6aObozjVWxMHarLP-cZINZYmMT5b0",
  authDomain: "react-app-4fb17.firebaseapp.com",
  projectId: "react-app-4fb17",
  storageBucket: "react-app-4fb17.firebasestorage.app",
  messagingSenderId: "438214469621",
  appId: "1:438214469621:web:ca320de83349b6bdee62bc",
  measurementId: "G-9JSKYXLVZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;