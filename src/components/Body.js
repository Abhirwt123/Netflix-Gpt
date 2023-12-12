import Header from "./Header";
import Login from "./Login";
import "../App.css";
import DevicesCard from "./DevicesCard";
const Body = () => {
  return (
    <div className="body ">
      <div className="wrapper bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
        <div className="gradient">
          <Header />
          <Login />
        </div>
      </div>
      <div className="card-wrapper bg-black">
        <div className="container">
          <DevicesCard/>
        </div>
      </div>
    </div>
  );
};
export default Body;
