import { BrowserRouter as Router, Switch, Route, Redirect, Routes } from 'react-router-dom';
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
// import Authorized from "./Auth/Authorized";
// import ApplicationViews from "./Auth/ApplicationViews";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4EC_P9tUeDanrpb2alX3GvrinkUzlLYk",
  authDomain: "at-a-glance-966b5.firebaseapp.com",
  projectId: "at-a-glance-966b5",
  storageBucket: "at-a-glance-966b5.appspot.com",
  messagingSenderId: "195291912902",
  appId: "1:195291912902:web:4adb3d8d38c2ea577f55c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);


// import './App.css';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>
  <Router>
    <NavBar />
 <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
       </Router>
  </>
}

export default App;
