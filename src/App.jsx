import { useState } from "react";
import getSynonym from "../api/api";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await getSynonym(word);

    setResult(res.data);
  }

  console.log(result);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a word"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
      <div>
        {result.map((word) => (
          <p>{word.word}</p>
        ))}
      </div>
    </>
  );
}

export default App;
