import loadingData from "../assets/loading.json";
import Lottie from "react-lottie-player";

export default function Loading() {
  return (
    <div className="h-screen bg-base-100 flex justify-center items-center  ">
      <Lottie
        animationData={loadingData}
        loop
        play
        style={{ width: 100, height: 100 }}
        // isStopped={animateState.isStopped}
        // isPaused={animateState.isPaused}
      />
    </div>
  );
}
