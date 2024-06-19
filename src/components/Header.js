import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="border">
      <div className="w-[12%] py-6 px-2 mx-16">
        <img src={LOGO_URL} alt="logo" className="" />
      </div>
    </div>
  );
};

export default Header;
