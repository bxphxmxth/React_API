import logo from './logo.svg';
import './App.css';
import APIRequest from './components/APIRequest';
import Todolist from "./components/Todolist"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <APIRequest />
       <Todolist/>
      </header>
    </div>
  );
}

export default App;
