import { useState } from "react";
import SearchForm from "./SearchForm";
import ResultsDisplay from "./ResultsDisplay";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  return (
    <>
      <div>
        <SearchForm word={word} wordSetter={setWord} resultSetter={setResult} />
        <ResultsDisplay result={result} />
      </div>
    </>
  );
}

export default App;
