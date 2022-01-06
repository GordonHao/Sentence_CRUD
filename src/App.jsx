import { Provider } from 'react-redux';
import './App.css';
import Main from './Layouts';
import React from 'react';
import { store } from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
