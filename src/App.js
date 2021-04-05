
import React from 'react'
import './App.css';
// import TodoApp from "./components/TodoApp";
const TodoApp = React.lazy(() => import('./components/TodoApp'))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<>Loading...</>}>
        <TodoApp />
      </React.Suspense>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
