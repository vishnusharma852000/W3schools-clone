import logo from './logo.svg';
import './App.css';
import W3schoolsnavbar from './Components/W3schoolsnavbar';
import W3schoolscontent from './Components/W3schoolscontent';
import W3schoolcontentmid from './Components/W3schoolcontentmid';

function App() {
  return (
    <div className="App">
      <W3schoolsnavbar/>
      <W3schoolscontent/>
      <W3schoolcontentmid/>
    </div>
  );
}

export default App;
