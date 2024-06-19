import { BadgeX } from "lucide-react";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

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
        <div className="border h-[90%] w-full flex justify-center items-center font-openSans">
          <div className="p-6 bg-transparentBlack-1">
            <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>
            <form className="">
              {/* Email */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2">
                  <div
                    className={`w-full h-full text-gray-200 transition-all duration-200 ${
                      isEmailFocused ? "text-xs" : ""
                    }`}
                    onClick={() => setIsEmailFocused(true)}
                  >
                    Email or mobile number
                  </div>
                  {isEmailFocused && (
                    <input
                      type="text"
                      className="0 text-white w-full text-base outline-none bg-transparent p bg-green-500"
                      ref={emailRef}
                    />
                  )}
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  <BadgeX size={20} />
                  <p className="text-sm">
                    Please enter a valid email address or phone number.
                  </p>
                </div>
              </div>

              {/* password */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
