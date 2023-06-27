import axios from axios
import { useState } from 'react';
import './App.css';

function App() {

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleSbmit = async () => {

    const payLoad = {
      language: "cpp",
      code
    };
    try{
      const {data} = await axios.post("http://localhost:5000/run", payLoad)
      setOutput(data.output)
    } catch (err){
      console.log(err.response);
    }

  }

  return (
    <div className="App">
      <h1>Code Editor</h1>
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => {setCode(e.target.value)}}
      ></textarea>
      <br />
      <button onClick={handleSbmit}>Submit</button>
      <p>{output}</p>
    </div>
  );
}

export default App;
