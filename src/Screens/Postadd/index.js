import "./postadd.css";
function Postadd() {
  return (
    <div className="main-postadd">
      <div className="postadd-allfields">
        <h1 className="postadd-form-heading">Car Information</h1>
        <div className="postadd-text-fields">
          <h3>City:</h3>
          <input
            className="postadd-fields"
            type="text"
            placeholder="City"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Car Info:</h3>
          <input
            className="postadd-fields"
            type="text"
            placeholder="Make/Model/version"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Exterior Color:</h3>
          <input
            className="postadd-fields"
            type="text"
            placeholder="Exterior color"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Mileage(km):</h3>
          <input
            className="postadd-fields"
            type="text"
            placeholder="km"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Price(Rs):</h3>
          <input
            className="postadd-fields"
            type="text"
            placeholder="Price"
            required
          />
        </div>
        <div>
          <h3>Description:</h3>
          <textarea
            placeholder="Describe Your Car:"
            name=""
            id=""
            cols="70"
            rows="10"
          ></textarea>
        </div>
        <div>
          <h3>Photos:</h3>
          <input className="postadd-fields" type="file" required />
        </div>
        <h1 className="postadd-form-heading">Contact Information</h1>
        <div className="postadd-text-fields">
          <h3>Number:</h3>
          <input
            className="postadd-fields"
            type="number"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="postadd-text-fields">
          <h3>Secondary Number:</h3>
          <input
            className="postadd-fields"
            type="number"
            placeholder="Secondary Number"
            required
          />
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}
export default Postadd;
