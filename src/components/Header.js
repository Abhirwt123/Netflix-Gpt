import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="wrapper w-10/12 mx-auto justify-between flex items-center">
          <div className="left">
            <div className="img-wrap w-4/12">
              <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="logo" />
            </div>
          </div>
          <div className="right ">
            <form className="flex m">
              <select
                name="lang"
                id="language"
                className=" mr-6 px-4 py-1 bg-transparent text-white border border-white rounded-md font-bold">
                <option className="bg-black" value="hindi">Hindi</option>
                <option className="bg-black" value="english">English</option>
              </select>
              <div className="btn-wrap ">
                <Link to="/SignUp"><button className="bg-red-500 px-3 py-1 text-white rounded-md font-bold">
                  Sign In
                </button></Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
