import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import leftfblogo from "../../images/left fb logo.png";
import leftinstalogo from "../../images/left insta logo.png";
import lefttwiterlogo from "../../images/left twiter logo.png";
import leftmsglogo from "../../images/left msg logo.png";
import "./home.css";
function Home() {
  return (
    <div>
      <Header />
      <div className="usedcars-top-text">
        <h1>Find used cars in Pakistan</h1>
        <p>With thousand of cars,we have just the right one for you</p>
      </div>
      <div className="fixed-leftside-logos">
        <img className="left-side-logos" src={leftfblogo} alt="" />
        <img className="left-side-logos" src={leftinstalogo} alt="" />
        <img className="left-side-logos" src={lefttwiterlogo} alt="" />
        <img className="left-side-logos" src={leftmsglogo} alt="" />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
