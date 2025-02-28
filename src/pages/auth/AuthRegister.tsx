import * as React from "react";
import AuthLayout from "../../layouts/auth/AuthLayout";

interface IAuthRegisterProps {}

const AuthRegister: React.FunctionComponent<IAuthRegisterProps> = () => {
  return (
    <AuthLayout>
      <div>Register</div>
    </AuthLayout>
  );
};

export default AuthRegister;
