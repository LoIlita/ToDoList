import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase";

export async function signIn(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
}
