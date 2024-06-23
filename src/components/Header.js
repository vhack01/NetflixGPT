import { ChevronDown } from "lucide-react";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((store) => store.user.user);
  useAuth();
  return (
    <div className="w-full flex justify-between items-center px-10 fixed z-10 py-4">
      <img src={LOGO_URL} alt="logo" className="w-[120px] cursor-pointer" />
      {user && (
        <div className="relative">
          <div
            className="flex items-center gap-x-1 px-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={user?.photoURL ? user?.photoURL : USER_AVATAR}
              alt="userIcon"
              className="w-[35px] h-[35px] rounded hover:shadow-md"
            />
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          <div className="absolute right-0 mt-4">
            {showDropdown && <UserDropdown />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
