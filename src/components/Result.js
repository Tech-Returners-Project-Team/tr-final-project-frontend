import React from "react";
import "../Result.css";

function Result(props) {
  return (
    <div class="resultstyle">
      <h3>
        Luck is on your side! Your perfect holiday destination is {"  "}
        <br />
        <strong>{props.quizResult.city}</strong>
      </h3>

      <div>
        <img
          src={props.quizResult.picture}
          alt="resultDestination"
          title="city"
          className="destinationPicture"
          width="500px"
          height="300px"
        />
      </div>
      <p>
        <br />
        To book your holiday, take a look here:
        <br />
        <a href={props.quizResult.booking_link}>
          <img
            alt="bookingLink"
            src="data:image/png;base64,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"
            width="150"
            height="85"
          />
        </a>
      </p>
    </div>
  );
}

export default Result;
