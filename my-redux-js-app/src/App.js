import React from 'react';
import './App.css';
import Blog from './containers/Blog';
import { BrowserRouter } from 'react-router-dom';

//import Second from './Second';
//import First from './First';

function App() {

  return (
    <div className="App">
       {/*let's learn again
  <First />*/}
  <BrowserRouter>
        <Blog />
  </BrowserRouter>
    </div>
  );
}

export default App;
