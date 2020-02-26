import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/reducer/index'
import HomePage from './components/homePage/index';

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <HomePage></HomePage>
    </Provider>
  );
}

export default App;
