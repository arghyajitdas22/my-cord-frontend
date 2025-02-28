import * as React from "react";
import AuthLayout from "../../layouts/auth/AuthLayout";

interface IAuthLoginProps {}

const AuthLogin: React.FunctionComponent<IAuthLoginProps> = () => {
  return (
    <AuthLayout>
      <div>Login</div>
    </AuthLayout>
  );
};

export default AuthLogin;
