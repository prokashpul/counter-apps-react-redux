import Counter from "./Components/Counter/Counter";
import StaticCounter from "./Components/StaticCounter/StaticCounter";

function App() {
  return (
    <>
      {/* header area */}
      <header className="text-center text-3xl md:text-5xl text-violet-600 font-bold my-10 mx-5">
        Multi Counter Application
      </header>
      {/* main area */}
      <main className="md:max-w-[620px] mx-auto p-5 text-center">
        <Counter />
        <StaticCounter />
      </main>
    </>
  );
}

export default App;
