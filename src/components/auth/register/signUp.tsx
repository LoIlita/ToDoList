import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function signUp() {
  return (
    <div className="min-h-screen flex justify-center items-center   ">
      <form className="w-full max-w-sm pb-4 bg-gray-700/70 otline-gray-700 otline-2 rounded-2xl text-white ">
        <div>
          <h2 className="font-semibold text-2xl text-white text-center pb-10 pt-4 text-">
            Create your account
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-start pl-4 pr-4 text-sm/6 ">
          <Input
            id="email"
            label="Email address"
            type="text"
            required
            placeholder="Podaj email"
          />

          <Input
            id="password"
            label="password"
            type="password"
            required
            placeholder="Podaj hasło"
          />

          <div className="pt-6">
            <Button>Create an account</Button>
          </div>

          <div>
            <Button variant="secondary">Sign up with google</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
