import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authService, firebaseInstance } from "../fbase/fbase";
import AuthForm from "../AuthForm/AuthForm";


const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <img src="./img/jaram_.ico" />
      <FontAwesomeIcon
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;