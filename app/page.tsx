import { Suspense } from "react";
import Banner from "./components/Banner";
import Exercises from "./components/Exercises";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <Suspense fallback={<p>Loading Exercises...</p>} >
        <Exercises></Exercises>
      </Suspense>


    </div>
  );
};

export default HomePage;