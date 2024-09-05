import Login from "./components/Login";
import ShowUser from "./components/ShowUser";
import Signup from "./components/Signup";
import { FirebaseProvider } from "./context/FirebaseContext";

export default function App() {
  return (
    <div>
      <FirebaseProvider>
        <Signup />
        <Login />
        <ShowUser />
      </FirebaseProvider>
    </div>
  );
}
