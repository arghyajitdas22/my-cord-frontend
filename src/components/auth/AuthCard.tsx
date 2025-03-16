import * as React from "react";
import { NavLink } from "react-router";

interface IAuthCardProps {
  title: string;
  purpose: number;
  children: React.ReactNode;
}

const AuthCard: React.FunctionComponent<IAuthCardProps> = ({
  title,
  purpose,
  children,
}) => {
  return (
    <section className="bg-slate-800 md:rounded-md w-screen md:w-[420px] p-4 md:p-8 flx flex-col space-y-5">
      <h1 className="text-2xl font-bold text-center text-white">{title}</h1>
      {children}
      <NavLink
        to={`${purpose === 0 ? "/login" : "/register"}`}
        className={"text-sm text-cyan-600 cursor-pointer"}
      >
        {purpose === 0 ? "Already have an account?" : "Create an account!"}
      </NavLink>
    </section>
  );
};

export default AuthCard;
