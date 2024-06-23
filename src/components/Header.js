import { ChevronDown } from "lucide-react";
import { LOGO_URL, USER_ICON } from "../utils/constants";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((store) => store.user.user);

  return (
    <div className="flex justify-between border items-center px-8">
      <div className="w-[45%] sm:w-[20%] md:w-[20%] lg:w-[12%] ml-10 pt-4">
        <img src={LOGO_URL} alt="logo" className="" />
      </div>
      {user && (
        <div className="relative">
          <div
            className="flex items-center gap-x-1 px-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={user?.photoURL ? user?.photoURL : USER_ICON}
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
