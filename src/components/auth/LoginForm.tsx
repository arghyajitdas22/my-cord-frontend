import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "../../validators/user.validator";
import { z } from "zod";
import { useAuth } from "../../hooks/useAuth";

interface ILoginFormProps {}
export type ILoginUserSchema = z.infer<typeof loginUserSchema>;

const LoginForm: React.FunctionComponent<ILoginFormProps> = () => {
  const { loginMutation } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  const handleLogin: SubmitHandler<ILoginUserSchema> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        loginMutation.reset();
      },
    });
  };
  return (
    <form
      className="w-full flex flex-col space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      {/* email */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="email" className="auth-label">
          email
          <span className="red-ast">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="auth-input"
          {...register("email", {
            required: { value: true, message: "Please provide an email" },
            validate: (value) =>
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
              ) || "Please provide a valid email address",
          })}
        />
        {errors.email && (
          <p className="text-xs text-red-500 text-wrap">
            Please provide a valid email address
          </p>
        )}
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
          className="auth-input"
          {...register("password", {
            required: { value: true, message: "Please provide a password" },
            minLength: {
              value: 6,
              message: "Password must contain at least 6 characters",
            },
            validate: (value) =>
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
                value
              ) ||
              "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number and one special character",
          })}
        />
        {errors.password && (
          <p className="text-xs text-red-500 text-wrap">
            Password must contain at least 6 characters, including one uppercase
            letter, one lowercase letter, one number and one special character
          </p>
        )}
      </div>
      {/* login */}
      <button
        type="submit"
        className="submit-btn"
        disabled={loginMutation.isPending}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
