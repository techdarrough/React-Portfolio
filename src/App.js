import './App.css';
import Header from './component/Header';
import LeftSide from './component/LeftSide';
import RightSide from './component/RightSide';
import Main from './component/Main';


function App() {

  return (
    <div className="App">
      <Header />
       
        <div>
          <LeftSide />
          <Main Name="Preston Darrough" Role="FSDEV"/>
          <RightSide />
        </div>
      
    </div>
  );
}

export default App;
