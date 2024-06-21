export const validateData = ({ name, mobile, email, password }) => {
  const errors = {};
  const isValidName = /^[a-zA-Z ]{2,30}$/.test(name);
  if (!isValidName) {
    errors["name"] = {
      status: true,
      message: "Name is not valid",
    };
  }
  const isValidMobile = /^[0-9]{10}$/.test(mobile);
  if (!isValidMobile) {
    errors["mobile"] = {
      status: true,
      message: "Mobile number is",
    };
  }
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    errors["email"] = {
      status: true,
      message: "Email id is invalid",
    };
  }
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password);

  if (!isValidPassword) {
    errors["password"] = {
      status: true,
      message: "Password is invalid",
    };
  }

  return errors;
};

/* Email-acceptable format
  user@example.com
  user.name+tag+sorting@example.com
  user.name@subdomain.example.com
*/
