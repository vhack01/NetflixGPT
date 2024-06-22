import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-start md:justify-start">
      <div className="w-[45%] sm:w-[20%] md:w-[20%] lg:w-[12%] ml-10 pt-4">
        <img src={LOGO_URL} alt="logo" className="" />
      </div>
    </div>
  );
};

export default Header;
