import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center   ">
      <form className="w-full max-w-sm pb-4 bg-gray-700/70 otline-gray-700 otline-2 rounded-2xl text-white ">
        <div>
          <h2 className="font-semibold text-2xl text-white text-center pb-10 pt-4 text-">
            Sign in to your account
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
            label="Password"
            type="password"
            required
            placeholder="Podaj hasło"
          />

          <div>
            <p className=" text-indigo-400 hover:text-indigo-300">
              Forgot password?
            </p>
          </div>

          <div>
            <Button>Sign in</Button>
          </div>

          <div className="pt-2">
            <p className="text-center ">Or continue with</p>
          </div>

          <div>
            <Button variant="secondary">Google</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
