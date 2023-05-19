import './App.css';
import Header from './components/Header';
import TodosLogic from './logic/TodosLogic';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TodosLogic />
    </>
  );
}

export default App;
