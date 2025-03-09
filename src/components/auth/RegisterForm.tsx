import * as React from "react";
import { months, day, generateYears } from "../../assets/data/data";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormUserSchema } from "../../validators/user.validator";
import { z } from "zod";

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = () => {
  const [showpasswordMessage, setShowPasswordMessage] =
    React.useState<boolean>(false);

  type IRegisterUserSchema = z.infer<typeof registerFormUserSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserSchema>({
    resolver: zodResolver(registerFormUserSchema),
  });

  const handleRegister: SubmitHandler<IRegisterUserSchema> = (data) => {
    console.log(data);
  };

  const handleErrors = () => {
    console.log(errors);
  };

  return (
    <form
      className="w-full flex flex-col space-y-4"
      onSubmit={handleSubmit(handleRegister, handleErrors)}
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
      </div>
      {/* dispaly name */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="displayName" className="auth-label">
          display name
          <span className="red-ast">*</span>
        </label>
        <input
          type="text"
          id="displayName"
          className="auth-input"
          {...register("displayName", {
            required: { value: true, message: "Please provide a display name" },
          })}
        />
      </div>
      {/* username */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="username" className="auth-label">
          username
          <span className="red-ast">*</span>
        </label>
        <input
          type="text"
          id="username"
          className="auth-input"
          {...register("username", {
            required: { value: true, message: "Please provide a username" },
            maxLength: {
              value: 20,
              message: "Username must not exceed 20 characters",
            },
          })}
        />
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
            onChange: () => setShowPasswordMessage(true),
            onBlur: () => setShowPasswordMessage(false),
          })}
        />
        {showpasswordMessage && (
          <p className="text-xs text-gray-100 text-wrap">
            Password must contain at least 6 characters, including one uppercase
            letter, one lowercase letter, one number and one special character
          </p>
        )}
      </div>
      {/* dateofbirth */}
      <div className="w-full flex flex-col space-y-2">
        <label className="auth-label">
          date of birth
          <span className="red-ast">*</span>
        </label>

        <div className="w-full flex space-x-3">
          {/* month */}
          <select
            id="month"
            {...register("month", {
              required: { value: true, message: "Please provide a month" },
              validate: (value) =>
                months.includes(value) || "Please provide a valid month",
            })}
            className="auth-input"
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          {/* day */}
          <select
            id="day"
            {...register("day", {
              required: { value: true, message: "Please provide a day" },
              validate: (value) =>
                day.includes(value) || "Please provide a valid day",
              valueAsNumber: true,
            })}
            className="auth-input"
          >
            <option value="">Day</option>
            {day.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>

          {/* year */}
          <select
            id="year"
            {...register("year", {
              required: { value: true, message: "Please provide a year" },
              validate: (value) =>
                generateYears().includes(value) ||
                "Please provide a valid year",
              valueAsNumber: true,
            })}
            className="auth-input"
          >
            <option value="">Year</option>
            {generateYears().map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* continue */}
      <button type="submit" className="submit-btn">
        Continue
      </button>
    </form>
  );
};

export default RegisterForm;
