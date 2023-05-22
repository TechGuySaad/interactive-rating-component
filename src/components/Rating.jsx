import { useDispatch, useSelector } from "react-redux";
import { setClickState } from "../store/slices/clickColorSlice";
import { Link } from "react-router-dom";

function Rating() {
  let lock1,
    lock2,
    lock3,
    lock4,
    lock5 = 0;

//   const clickState = useSelector((state) => {
//     return state.clickState;
//   });

  const dispatch = useDispatch();

 

  return (
    <div className="rating flex flex-col gap-y-10">
      {/* <!-- Rating state start --> */}
      <div className="star-icon bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className="description flex flex-col gap-y-4">
        <h1 className="text-white font-bold text-3xl">How did we do?</h1>

        <p className="text-gray-400">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="rating text-gray-300 flex gap-4  w-full justify-center">
        <button
          className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-gray-500 hover:text-white  cursor-pointer focus:bg-orange-500 focus:text-white"
          value={1} onClick={(e) => (dispatch(setClickState(e.target.value)))}
        >
          1
        </button>

        <button className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-gray-500 hover:text-white  cursor-pointer focus:bg-orange-500 focus:text-white" value={2} onClick={(e) => (dispatch(setClickState(e.target.value)))}>
          2
        </button>

        <button className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-gray-500 hover:text-white  cursor-pointer focus:bg-orange-500 focus:text-white" value={3} onClick={(e) => (dispatch(setClickState(e.target.value)))}>
          3
        </button>

        <button className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-gray-500 hover:text-white  cursor-pointer focus:bg-orange-500 focus:text-white" value={4} onClick={(e) => (dispatch(setClickState(e.target.value)))}>
          4
        </button>

        <button className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center hover:bg-gray-500 hover:text-white  cursor-pointer focus:bg-orange-500 focus:text-white" value={5} onClick={(e) => (dispatch(setClickState(e.target.value)))}>
          5
        </button>
      </div>
      <Link to="/thank-you">
        <div className="btn text-white w-full flex justify-center items-center bg-orange-500 h-11 rounded-3xl font-semibold hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider">
          SUBMIT
        </div>
      </Link>

      {/*  <!-- Rating state end --> */}
    </div>
  );
}

export default Rating;
