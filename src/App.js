import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from './component/mainTitle';
import SubTitleForEating from './component/SubTitleForEating';
import ContainerForSubTitle from './component/ContainerForSubTitle';
function App() {

  // example json data = 
  const a=  {
    "date" : '2022-01-20',
    "skinState" : 5,
    "sleepTime" : 8
  }

  return (
    <div className="App" >
      <header className="App-header">
          <MainTitle skinState = {a.skinState}></MainTitle>
          <ContainerForSubTitle sleepTime= {a.sleepTime}></ContainerForSubTitle>
      </header>
    </div>
  );
}

export default App;
