import { useEffect, useState } from "react";
import { UseContext } from "../context/UseFirebaseContext";
import { auth } from "../Firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { SignInUser, currentUser, setCurrentUser } = UseContext();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (usre) => {
      if (usre) {
        setCurrentUser(usre);
      } else {
        setCurrentUser(null);
      }
      return () => unSubscribe();
    });
  }, [auth]);

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const userCredential = await SignInUser(user.email, user.password);
      const userInfo = userCredential.user;
      console.log("Signed in successfully:", userInfo.displayName);

      setUser({
        email: "",
        password: "",
      });

      // Optionally update the state or handle post-login actions
      // setUser({ ...user, displayName: userInfo.displayName });
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const Logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth); // Only pass the auth instance
      console.log("User signed out successfully");
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <button onClick={() => Logout(user.email, user.password)}>
          Logout
        </button>

        {/* Display user's name after successful sign-in, if applicable */}
        {currentUser && <div>Welcome, {currentUser.displayName}!</div>}
      </form>
    </div>
  );
}
