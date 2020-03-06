import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/reducer/index'
import MainIndex from './components/index';
import {Grid} from 'semantic-ui-react';


let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



function App() {
  return (
    <Provider store={store}>
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
            <MainIndex></MainIndex>
            </Grid.Column>
            </Grid.Row>
            </Grid>
    </Provider>
  );
}

export default App;
