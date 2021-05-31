
import React from 'react'
import './App.css';
export const TodoApp = React.lazy(() => import('./components/TodoApp'))

function App() {
  console.log('render');
  return (
    <div className="App">
      <React.Suspense fallback={<>Loading...</>}>
        <TodoApp />
      </React.Suspense>
    </div>
  );
}

export default App;
