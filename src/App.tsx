import React, { useEffect, useState } from 'react';
import './App.css';
import UseStateComponent from './useStateComponent';
import UseEffectComponent from './useEffectComponent';
import UseContextComponent from './useContextComponent';
import UseReducerComponent from './useReducerComponent';
import UseRefComponent from './useRefComponent';
import CustomHookComponent from './CustomHookComponent';
import axios from "axios";
import GetData from './Axios/getData';
import PostData from './Axios/postData';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


const newPost = [{
  userId: 1,
  title: 'First post',
  body: 'This is the body of the new post'
},
{
  userId: 2,
  title: 'Second post',
  body: 'This is the body of the new post'
}
]


 function App() {
  const [data, setData] = useState([]);
  const [isError, setError] = useState<string>();

  const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const sendPostRequest = async () => {
  try {
    const data = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    console.log('PostData', data.data)
    
  } catch (error) {
    console.log(error)
  }
}


useEffect(() => {
  sendGetRequest();
  sendPostRequest();
})
  return (



    <>
      {/* <Router> */}
        {/* <header className="sticky"> */}
          {/* <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
            <NavLink to="/" className="button rounded">
              <span className="icon-home"></span>
              GetData
            </NavLink>
          </span> */}
          {/* <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
            <NavLink to="/Axios" className="button rounded">
              PostData
            </NavLink>
          </span> */}

        {/* </header> */}
        {/* <div className="container"> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<GetData />} /> */}
            {/* <Route path="/Axios" element={<PostData />} /> */}
          {/* </Routes> */}
        {/* </div> */}
      {/* </Router> */}



       <h1>UseState</h1>
     <UseStateComponent />
     <h1>UseEffect</h1>
     <UseEffectComponent />
     <h1>useConetxt</h1>
     <UseContextComponent />
     <h1>UseReducer</h1>
     <UseReducerComponent />
     <h1>UseRef</h1>
     <UseRefComponent />
     <h1>Custom Hook</h1>
     <CustomHookComponent />
     
    </>
  );
}

export default App;
