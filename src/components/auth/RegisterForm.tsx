import * as React from "react";
import DropdownInput from "./DropdownInput";
import { months, day, generateYears } from "../../assets/data/data";

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = () => {
  return (
    <form className="w-full flex flex-col space-y-4">
      {/* email */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="email" className="auth-label">
          email
          <span className="red-ast">*</span>
        </label>
        <input type="email" id="email" name="email" className="auth-input" />
      </div>
      {/* dispaly name */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="display-name" className="auth-label">
          display name
          <span className="red-ast">*</span>
        </label>
        <input
          type="text"
          id="display-name"
          name="display-name"
          className="auth-input"
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
          name="username"
          className="auth-input"
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
          name="password"
          className="auth-input"
        />
      </div>
      {/* dateofbirth */}
      <div className="w-full flex flex-col space-y-2">
        <label htmlFor="dateofbirth" className="auth-label">
          date of birth
          <span className="red-ast">*</span>
        </label>

        <div className="w-full flex space-x-3">
          {/* month */}
          <DropdownInput placeholder="Month" options={months} />
          {/* day */}
          <DropdownInput placeholder="Day" options={day} />
          {/* year */}
          <DropdownInput placeholder="Year" options={generateYears()} />
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
