import * as React from "react";
import AuthLayout from "../../layouts/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";

interface IAuthRegisterProps {}

const AuthRegister: React.FunctionComponent<IAuthRegisterProps> = () => {
  return (
    <AuthLayout>
      <AuthCard title="Create an account" purpose={0}>
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default AuthRegister;
