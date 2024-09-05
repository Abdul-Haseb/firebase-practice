/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../Firebase/config";
import { ref, set } from "firebase/database";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const SignUpUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const FireBaseDataBase = async (key, data) => {
    const userCrediental = ref(db, key);
    return await set(userCrediental, data);
  };
  return (
    <FirebaseContext.Provider
      value={{
        SignUpUser,
        SignInUser,
        FireBaseDataBase,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// FirebaseProvider.propTypes = {
//   children: propTypes.node.isRequired,
// };
