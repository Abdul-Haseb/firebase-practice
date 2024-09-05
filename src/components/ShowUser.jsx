import { UseContext } from "../context/UseFirebaseContext";

export default function ShowUser() {
  const { currentUser } = UseContext();
  return (
    <div>
      {currentUser ? (
        <h1>Welcome, {currentUser.displayName}!</h1>
      ) : (
        <div>No user Login </div>
      )}
    </div>
  );
}
