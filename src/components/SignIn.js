import { ValidateForm } from "../utils/Validate";
import { useRef } from "react";
const SignIn = () => {
  const email = useRef(null);
  const checkUserRegester = () => {
    const message = ValidateForm(email.current.value);
    console.log(message)
  };

  return (
    <div className="wrapper py-36">
      <div className="upper-sec">
        <div className="title">
          <h1 className="text-5xl text-white font-bold text-center py-4">
            Unlimited movies, TV shows and more
          </h1>
        </div>
        <div className="sub-title text-center text-white text-3xl ">
          <p className="pb-4">Watch anywhere. Cancel anytime.</p>
          <p className="pb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <div className="wrap flex py-3 justify-center items-center">
          <div className="input-box border-white bg-[#5a5a5a] border-2 mr-6 rounded-md">
            <input
              type="text"
              className="text-white bg-transparent placeholder:text-white px-3 py-2 text-xl"
              placeholder="Email Address"
              ref={email}
            />
          </div>
          <div className="btn-wrap">
            <button
              className="bg-red-600 text-white fw-bold px-4 text-2xl py-2 rounded-md font-bold"
              onClick={checkUserRegester}
            >
              Get Started
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
