
import React from 'react'
import './App.css';
// export const TodoApp = React.lazy(() => import('./components/TodoApp'))
export const AppRoute = React.lazy(() => import('./route/AppRoute'))

function App() {
  console.log('render');
  return (
    <div className="App">
      <React.Suspense fallback={<>Loading...</>}>
        <AppRoute />
      </React.Suspense>
    </div>
  );
}

export default App;
