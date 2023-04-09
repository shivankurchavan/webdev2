import "./TripStyles.css";
import "./TripData";
import TripData from "./TripData";
import trip1 from "../assets/about_image.jpg";
import trip2 from "../assets/home.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Description</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="silk"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TripData
          image={trip2}
          heading="silk"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TripData
          image={trip1}
          heading="silk"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default Trip;
