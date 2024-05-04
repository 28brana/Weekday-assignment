import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hook/useFetch";

function App() {
  const { loading, error, data, totalCount, fetchData } = useFetch();
  return (
    <div className="App">
      <button onClick={fetchData}>Click</button>
    </div>
  );
}

export default App;
