import "./detail.css";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { useLocation } from "react-router-dom";
function Detail() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className="main-detail">
        <div className="main-detail-child">
          <div className="left-detail">
            <img className="detail-img" src={location.state.add.imageUrl} />
            <div className="det-carinfo-price">
              <div>
                <h3>CarInfo</h3>
                <h3 className="detail-txt">{location.state.add.carinfo}</h3>
              </div>
              <div>
                <h3>Price</h3>
                <h3 className="detail-txt">{location.state.add.price}</h3>
              </div>
              <div>
                <h3>KM</h3>
                <h3 className="detail-txt">{location.state.add.km}</h3>
              </div>
            </div>
            <div className="det-city-color">
              <div>
                <h3>City</h3>
                <h3 className="detail-txt">{location.state.add.city}</h3>
              </div>
              <div>
                <h3>Color</h3>
                <h3 className="detail-txt">{location.state.add.color}</h3>
              </div>
            </div>
            <h3>Description</h3>
            <h3 className="detail-txt">{location.state.add.description}</h3>
          </div>
          <div className="right-detail">
            <h3>Primary Number</h3>
            <h3 className="detail-txt">{location.state.add.no}</h3>
            <h3>Secondary number</h3>
            <h3 className="detail-txt">{location.state.add.secno}</h3>
            <h3>Wallet Address</h3>
            <h3 className="detail-txt">{location.state.add.address}</h3>
            <button className="chat-btn">Chat</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
