import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../Redux/Counter/Actions";
function Counter({ count, increment, decrement }) {
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
              onClick={increment}
            >
              Increment
            </button>
            <button
              className="px-5 py-3 bg-red-500 text-white font-samibold cursor-pointer rounded"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
