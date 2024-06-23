import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();
  const handleSignuout = async () => {
    try {
      const res = await signOut(auth);
      console.log("signout:", res);
      navigate("/");
    } catch (err) {
      console.log("error", err.message);
      navigate("/error");
    }
  };
  return (
    <div className="w-[200px] border rounded bg-black py-2">
      <div className="">
        <ul className="flex flex-col text-white">
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer">
            Profile
          </li>
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer">
            Manage Profile
          </li>
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer">
            Account
          </li>
          <li
            className="px-8 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={handleSignuout}
          >
            Sign out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
