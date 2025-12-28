import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../../services/firebase";

import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.code);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm pb-4 bg-gray-700/70 rounded-2xl text-white"
      >
        <h2 className="font-semibold text-2xl text-center pb-10 pt-4">
          Create your account
        </h2>

        <div className="flex flex-col gap-4 px-4 text-sm">
          <Input
            id="email"
            label="Email address"
            type="email"
            required
            placeholder="Podaj email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            required
            placeholder="Podaj hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button type="submit">Create an account</Button>

          <Button variant="secondary" disabled>
            Sign up with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
