import * as React from "react";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logging in...");
  };
  return (
    <form className="w-full flex flex-col space-y-4" onSubmit={handleLogin}>
      {/* email */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="email" className="auth-label">
          email
          <span className="red-ast">*</span>
        </label>
        <input type="email" id="email" name="email" className="auth-input" />
      </div>
      {/* password */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="password" className="auth-label">
          password
          <span className="red-ast">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="auth-input"
        />
      </div>
      {/* login */}
      <button type="submit" className="submit-btn">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
