import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App(){

  const myStyledComponentStyles = {
    backgroundColor: '#ffa500',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
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