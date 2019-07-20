import React from 'react';
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Blog />
      </BrowserRouter>

    </div>
  );
}

export default App;
