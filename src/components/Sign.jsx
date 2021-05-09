import React from "react";
import cancer from "../images/cancer.png";
import capricorn from "../images/capricorn.png";
const Sign = (props) => {
  const { sign } = props;

  const getSignImage = () => {
    console.log(sign);
    switch (sign) {
      case "Cancer": {
        return (
          <img
            style={{ maxheight: "100px", maxWidth: "100px" }}
            src={cancer}
            alt="Cancer"
          />
        );
      }
      case "Capricorn": {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontFamily: "sans-serif",
            }}
          >
            <img
              style={{ maxheight: "100px", maxWidth: "100px" }}
              src={capricorn}
              alt="Capricorn"
            />
            <div
              onClick={() => {
                console.log("hi");
              }}
            >
              View horoscope
            </div>
          </div>
        );
      }
    }
  };
  return <div style={{ display: "flex" }}>{getSignImage()}</div>;
};

export default Sign;
