import React from "react";
import { useSelector } from "react-redux";

// import { decrement, increment } from "../../Redux/Counter/Actions";
export default function Counter() {
  const count = useSelector((state) => state.value);
  return (
    <>
      {" "}
      {/* counter section */}
      <section id="counterId">
        <div className="shadow-2xl rounded-lg p-5 my-5">
          <div className="font-bold text-3xl" id="count">
            {count}
          </div>
          <div className="flex gap-5 justify-center mt-5">
            <button
              className="px-5 py-3 bg-violet-600 text-white font-samibold cursor-pointer rounded"
              // onClick={increment}
            >
              Increment
            </button>
            <button
              className="px-5 py-3 bg-red-500 text-white font-samibold cursor-pointer rounded"
              // onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
