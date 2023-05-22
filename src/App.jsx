import { Route, Routes } from "react-router-dom";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

export default function App() {
  return (
    <div className="app flex justify-center items-center bg-background h-screen">
      {/* <h1 className="bg-blue-500">hello world</h1> */}

      <div className="card bg-card h-fit w-customCard rounded-3xl p-8">
        <Routes>
          <Route path="/" element={<Rating />}></Route>
          <Route path="thank-you" element={<ThankYou />}></Route>
        </Routes>
      </div>

      {/* <div className="attribution">
  Challenge by <a>Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div> */}
    </div>
  );
}
