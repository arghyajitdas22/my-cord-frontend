import * as React from "react";

interface IAuthProps {
  children: React.ReactNode;
}

const AuthLayout: React.FunctionComponent<IAuthProps> = ({ children }) => {
  return (
    <main className="bg-[url(/src/assets/auth-bg.svg)] bg-cover bg-no-repeat max-w-screen min-h-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
