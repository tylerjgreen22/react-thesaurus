import getSynonym from "../api/api";

export default function SearchForm({ word, wordSetter, resultSetter }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await getSynonym(word);

    resultSetter(res.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter a word"
        value={word}
        onChange={(e) => {
          wordSetter(e.target.value);
        }}
      ></input>
      <button>Submit</button>
    </form>
  );
}
