import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
onAuthStateChanged(auth, (user) => {
    // console.log(user.accessToken)
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    // ...
    console.log(uid,email)
    dispath(
        addUser({ uid: uid, email: email, displayName: displayName })
      );
  } else {
    // User is signed out
    // ...
    dispath(removeUser())
  }
});
  },[]);
  return (
    <div>
      <div className="img-wrap w-2/12">
        <img
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
