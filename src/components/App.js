import '../App.css'

import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App(){

  const myStyledComponentStyles = {
    display: 'center',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingLeft: '200px',
    paddingRight: '200px',
    textAlign: 'center'
  }

  return ( 
    <div style={myStyledComponentStyles}>
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
    </div>
  );
}

export default App;