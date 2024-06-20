import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(-1);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFocus = (index) => {
    if (index === 0) {
      emailRef.current.focus();
      setIsFocused(0);
    } else if (index === 1) {
      setIsFocused(1);
      passwordRef.current.focus();
    }
  };
  const handleBlur = (index) => {
    if (index === 0) {
      const value = emailRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else if (index === 1) {
      const value = passwordRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else {
      setIsFocused(-1);
    }
  };

  return (
    <div className="relative bg-black">
      <div className="absolute">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="backgroundImage"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="absolute h-screen w-screen bg-transparentBlack-0">
        <Header />
        <div className="h-[90%] w-full flex justify-center items-center font-openSans">
          <div className="px-14 pt-16 pb-28 rounded bg-transparentBlack-1 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[27%]">
            <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>
            <form className="flex flex-col gap-y-3">
              {/* Email */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      email.length === 0 && isFocused !== 0
                        ? "text-sm -mt-2 py-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(0)}
                  >
                    Email or mobile number
                  </div>
                  <input
                    type="text"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(0)}
                    onBlur={() => handleBlur(-1)}
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  {/* <BadgeX size={20} />
                  <p className="text-sm">
                    Please enter a valid email address or phone number.
                  </p> */}
                </div>
              </div>

              {/* password */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      password.length === 0 && isFocused !== 1
                        ? "text-sm -mt-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(1)}
                  >
                    Password
                  </div>
                  <input
                    type="password"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(1)}
                    onBlur={() => handleBlur(-1)}
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="text-red-500 flex gap-x-2 my-2">
                  <BadgeX size={20} />
                  <p className="text-sm">
                    Please enter a valid email address or phone number.
                  </p>
                </div> */}
              </div>

              <button className="mt-4 bg-red-600 py-2 text-white rounded">
                Sign In
              </button>

              <h2 className="text-gray-200 mt-2 text-center">OR</h2>

              <button className="mt-0 bg-grayTransparent-0 py-2 text-white rounded">
                Use a sign-in code
              </button>
              <div className="text-white text-center mt-3">
                Forget Password?
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <input type="checkbox" id="remember_me" className="" />
                <label htmlFor="remember_me" className="text-white">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <span className="text-gray-400">New to Netflix?</span>
                <span className="text-white cursor-pointer"> Sign up now.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;