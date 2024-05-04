import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hook/useFetch";
import Main from "./Main";

function App() {
  const { loading,  hasMore, data,  fetchMore } = useFetch();


  return (
    <div className="App">
      <Main data={data} loading={loading} hasMore={hasMore} fetchMore={fetchMore}/>
    </div>
  );
}

export default App;
