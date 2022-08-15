import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sdecrement, sincrement } from "../../Redux/StaticCounter/Actions";

// import { decrement, increment } from "../../Redux/Counter/Actions";
export default function StaticCounter() {
  const scount = useSelector((state) => state.staticCounter.value);
  const dispatch = useDispatch();
  const sincrementHandler = () => {
    dispatch(sincrement());
  };
  const sdecrementHandler = () => {
    dispatch(sdecrement());
  };

  return (
    <>
      {" "}
      {/* counter section */}
      <section id="counterId">
        <div className="shadow-2xl rounded-lg p-5 my-5">
          <div className="font-bold text-3xl" id="count">
            {scount}
          </div>
          <div className="flex gap-5 justify-center mt-5">
            <button
              className="px-5 py-3 bg-violet-600 text-white font-samibold cursor-pointer rounded"
              onClick={sincrementHandler}
            >
              Increment
            </button>
            <button
              className="px-5 py-3 bg-red-500 text-white font-samibold cursor-pointer rounded"
              onClick={sdecrementHandler}
            >
              Decrement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
