import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Router} from 'react-router-dom';
import createAppStore from '../../lib/store.js';
import DashboardContainer from '../dashboard-container';

const store = createAppStore();

class App extends React.component {
  componentDidMount(){
    store.subscribe( () => {
      console.log('__STATE__', store.getState())
    });

    store.dispatch({type: null})
  }

  render() {
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
        <h1>hello world!</h1>
      </div>
    )
  }
}

export default App;
