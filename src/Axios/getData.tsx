import React, {useState, useEffect} from "react";
import axios from "axios";


function GetData() {
    const [data, setData] = useState([]);
    const [isError, setError] = useState<string>();
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").
      then((res) =>
        setData(res.data))
        .catch((error) => setError(error.message));
    })

    return (
        <>
             <h1>Axios</h1>
      {isError !== '' && <h2>{isError}</h2>}
      <div className="grid">
      {
        data.map((post) => {
          const {id, title, body} = post;
          return <div className="card" key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
            </div>
        })
      }
      </div>
        </>
    )
}

export default GetData;