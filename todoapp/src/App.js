import React from 'react';
import './App.css';

function App() {
  return(
      <div>
          <input id="cb1" type="checkbox" name="item1"/>
          <label htmlFor="item1">Brownie</label><br/>
          <input id="cb2" type="checkbox" name="item2" />
          <label htmlFor="item2">Cookie</label><br/>
          <input id="cb3" type="checkbox" name="item3" />
          <label htmlFor="item3">Pastry</label>
      </div>
  )
}

export default App;
