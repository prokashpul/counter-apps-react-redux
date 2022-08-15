import React from "react";

export default function Counter() {
  return (
    <>
      {" "}
      {/* counter section */}
      <section id="counterId">
        <div className="shadow-2xl rounded-lg p-5 my-5">
          <div className="font-bold text-3xl" id="count">
            0
          </div>
          <div className="flex gap-5 justify-center mt-5">
            <button
              className="px-5 py-3 bg-violet-600 text-white font-samibold cursor-pointer rounded"
              id="increment"
            >
              Increment
            </button>
            <button
              className="px-5 py-3 bg-red-500 text-white font-samibold cursor-pointer rounded"
              id="decrement"
            >
              Decrement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
