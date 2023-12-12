const Login = () => {
  return (
    <div className="wrapper py-36">
      <div className="upper-sec">
        <div className="title">
          <h1 className="text-5xl text-white font-bold text-center py-4">
            Unlimited movies, TV shows and more
          </h1>
        </div>
        <div className="sub-title text-center text-white text-3xl ">
         <p className="pb-4">
         Watch anywhere. Cancel anytime.
         </p>
          <p className="pb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        </div>
        <form>
            <div className="wrap flex py-3 justify-center items-center">
            <div className="input-box border-white bg-[#5a5a5a] border-2 mr-6 rounded-md">
                <input type="email" className="text-white bg-transparent placeholder:text-white px-3 py-2 text-xl" placeholder="Email Address"/>
            </div>
            <div className="btn-wrap">
                <button className="bg-red-600 text-white fw-bold px-4 text-2xl py-2 rounded-md font-bold">Get Started</button>
            </div>
            </div>
        </form>
    </div>
  );
};
export default Login;
