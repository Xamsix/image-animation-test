import React from "react";

const AnimatedImage = ({
  image,
  alt,
  startAnimation,
  width,
  height,
  loadingComplete,
  initialDelay,
  easeDuration,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
      }}
    >
      <div
        style={{
          width: "100%",
          height: startAnimation ? height : "0",
          position: "absolute",
          left: "0",
          bottom: "0",
          overflow: "hidden",
          transition: `all ${
            easeDuration ? easeDuration : "0.6"
          }s cubic-bezier(0.5, 1, 0.89, 1) ${
            initialDelay ? initialDelay : "0"
          }s`,
        }}
      >
        <img
          style={{
            width: width,
            height: height,
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
          src={image}
          alt={alt}
          onLoad={loadingComplete}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
