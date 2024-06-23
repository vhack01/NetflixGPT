import { onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/slice/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
const useAuth = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign-in
        dispatch(addUser(user));
        navigate("/browse");
      } else {
        // logout
        dispatch(removeUser());
        if (pathname !== "/signup") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useAuth;
