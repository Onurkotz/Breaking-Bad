import { useEffect } from "react";
import lottie from "lottie-web";
import loadAnimation from "./ani.json";
import "./style.css";

function Loading() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".load"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadAnimation,
    });
  }, []);

  return (
    <div>
      <div className="load" />
    </div>
  );
}

export default Loading;
