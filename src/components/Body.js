import Header from "./Header";
import "../App.css";
import DevicesCard from "./DevicesCard";
import DevicesData from "./DevicesData";
import SignIn from "./SignIn";
const Body = () => {
  return (
    <div className="body ">
      <div className="wrapper bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
        <div className="gradient">
          <Header />
          <SignIn />
        </div>
      </div>
      <div className="card-wrapper bg-black">
        <div className="custum-container">
            {
                DevicesData.map((card, index) => {
                  return (
                  <DevicesCard
                    title={card.title}
                    subTitle={card.subTitle}
                    img={card.img}
                    key={index}
                    index={index}
                  />
                );
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
