import * as React from "react";
import AuthLayout from "../../layouts/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import LoginForm from "../../components/auth/LoginForm";

interface IAuthLoginProps {}

const AuthLogin: React.FunctionComponent<IAuthLoginProps> = () => {
  return (
    <AuthLayout>
      <AuthCard title="Welcome back!" purpose={1}>
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default AuthLogin;
