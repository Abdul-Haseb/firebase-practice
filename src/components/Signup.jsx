import { useState } from "react";
import { UseContext } from "../context/UseFirebaseContext";
import { auth } from "../Firebase/config";
import { updateProfile } from "firebase/auth";

export default function Signup() {
  const { SignUpUser, FireBaseDataBase } = UseContext();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const UserCrediental = await SignUpUser(user.email, user.password);
      const userId = UserCrediental.user.uid;

      if (UserCrediental) {
        await updateProfile(auth.currentUser, {
          displayName: user.name,
        });
      }
      await FireBaseDataBase(`Users${userId}`, {
        name: user.name,
        email: user.email,
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });

      console.log("User has been successfully Regiested and saved to dataBase");
    } catch (error) {
      console.log(error.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Your name "
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
