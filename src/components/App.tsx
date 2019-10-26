import React from 'react';
// import logo from './logo.svg';
import '../styles/App.scss';
import LayoutContainer from './LayoutContainer'


const App: React.FC = () => {
  console.log("ADDDDDDD", process.env)
  return (
    <div className="App">
      <LayoutContainer />
    </div>
  );
}

export default App;
