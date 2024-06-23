import { Link, useNavigate } from "react-router-dom";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header";
import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { BadgeX } from "lucide-react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const Signup = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(-1);
  const [isloading, setIsloading] = useState(false);
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFocus = (index) => {
    if (index === 0) {
      nameRef.current.focus();
      setIsFocused(0);
    } else if (index === 1) {
      mobileRef.current.focus();
      setIsFocused(1);
    } else if (index === 2) {
      emailRef.current.focus();
      setIsFocused(2);
    } else if (index === 3) {
      passwordRef.current.focus();
      setIsFocused(3);
    }
  };
  const handleBlur = (index) => {
    if (index === 0) {
      const value = nameRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else if (index === 1) {
      const value = mobileRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else if (index === 2) {
      const value = emailRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else if (index === 3) {
      const value = passwordRef.current.value;
      if (value.trim().length === 0) setIsFocused(-1);
    } else {
      setIsFocused(-1);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const errs = validateData({ name, mobile, email, password });
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setIsloading(false);
      return;
    }
    setErrors({});
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.UserCredentialImpl?.user;
      console.log("user:", user);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://avatars.githubusercontent.com/u/34247798?v=4",
      });
      setIsloading(false);
      toast.success("Signed up successfully");
      navigate("/browse");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setIsloading(false);
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
            <h1 className="text-white text-3xl font-bold mb-8">Sign Up</h1>
            <form
              className="flex flex-col gap-y-3"
              onSubmit={(e) => handleSignup(e)}
            >
              {/* Name */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      name.length === 0 && isFocused !== 0
                        ? "text-sm -mt-2 py-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(0)}
                  >
                    Name
                  </div>
                  <input
                    type="text"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(0)}
                    onBlur={() => handleBlur(-1)}
                    ref={nameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  {errors?.name && (
                    <>
                      <BadgeX size={20} />
                      <p className="text-sm">{errors.name.message}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile No. */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      mobile.length === 0 && isFocused !== 1
                        ? "text-sm -mt-2 py-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(1)}
                  >
                    Mobile Number
                  </div>
                  <input
                    type="number"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(1)}
                    onBlur={() => handleBlur(-1)}
                    ref={mobileRef}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  {errors?.mobile && (
                    <>
                      <BadgeX size={20} />
                      <p className="text-sm">{errors?.mobile.message}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      email.length === 0 && isFocused !== 2
                        ? "text-sm -mt-2 py-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(2)}
                  >
                    Email Address
                  </div>
                  <input
                    type="email"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(2)}
                    onBlur={() => handleBlur(-1)}
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  {errors["email"] && (
                    <>
                      <BadgeX size={20} />
                      <p className="text-sm">{errors?.email.message}</p>
                    </>
                  )}
                </div>
              </div>

              {/* password */}
              <div className="">
                <div className="relative border border-red-600 rounded bg-inputBox-0 p-2 flex flex-col justify-center items-center pt-4">
                  <div
                    className={`w-full text-gray-400 transition-all duration-200 absolute pl-2 ${
                      password.length === 0 && isFocused !== 3
                        ? "text-sm -mt-2"
                        : "text-xs -mt-8"
                    }`}
                    onClick={() => handleFocus(3)}
                  >
                    Password
                  </div>
                  <input
                    type="password"
                    className=" text-white w-full text-base outline-none bg-transparent mt-1"
                    onFocus={() => handleFocus(3)}
                    onBlur={() => handleBlur(-1)}
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-red-500 flex gap-x-2 my-2">
                  {errors?.password && (
                    <>
                      <BadgeX size={20} />
                      <p className="text-sm">{errors?.password.message}</p>
                    </>
                  )}
                </div>
              </div>

              <button className="mt-4 bg-red-600 py-2 text-white rounded flex justify-center">
                {isloading ? (
                  <Oval
                    visible={true}
                    height="20"
                    width="20"
                    color="#fff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    strokeWidth="5"
                    secondaryColor="#fff"
                  />
                ) : (
                  " Sign Up"
                )}
              </button>

              <div className="text-sm">
                <span className="text-gray-400">Already have an account?</span>
                <Link to={"/"}>
                  <span className="text-white cursor-pointer">
                    {" "}
                    Sign in now.
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
