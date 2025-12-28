import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase";

export async function signUp(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
}
