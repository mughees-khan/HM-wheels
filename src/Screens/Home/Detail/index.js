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
              <h3 className="det-carinfo">{location.state.add.carinfo}</h3>
              <h3 className="det-price">{location.state.add.price}</h3>
              <h3 className="det-km">{location.state.add.km}</h3>
            </div>
            <div className="det-city-color">
              <h3 className="det-city">{location.state.add.city}</h3>
              <h3 className="det-color">{location.state.add.color}</h3>
            </div>
            <p className="det-description">{location.state.add.description}</p>
          </div>
          <div className="right-detail">
            <h3 className="no">{location.state.add.no}</h3>
            <h3 className="secno">{location.state.add.secno}</h3>
            <button className="chat-btn">Chat</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
