import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDropdown = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const handleSignuout = async () => {
    try {
      const res = await signOut(auth);
    } catch (err) {
      navigate("/error");
    }
  };
  return (
    <div className="w-[200px] border rounded bg-black py-2">
      <div className="">
        <ul className="flex flex-col text-white font-openSans">
          <li className="px-8 py-2 text-gray-300 text-sm">
            {user?.displayName}
          </li>
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer text-sm">
            Profile
          </li>
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer text-sm">
            Manage Profile
          </li>
          <li className="px-8 py-2 hover:bg-gray-800 cursor-pointer text-sm">
            Account
          </li>
          <li
            className="px-8 py-2 hover:bg-gray-800 cursor-pointer text-sm"
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
