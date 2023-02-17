import './App.css';
import MainTitle from './component/mainTitle';
import SubTitleForEating from './component/SubTitleForEating';
import background from './image/background.jpg';
function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MainTitle></MainTitle>
        <SubTitleForEating></SubTitleForEating>
      </header>
    </div>
  );
}

export default App;
