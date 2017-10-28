import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Enable HMR
if (module.hot) {
    module.hot.accept('./App', () => 
        ReactDOM.render(<App />, document.getElementById('root')))
}
  
  //Using Redux
  // import { createStore } from 'redux'
  //
  // import rootReducer from './reducers'
  //
  // const configureStore = () => {
  //   const store = createStore(rootReducer)
  //
  //   if (process.env.NODE_ENV !== "production") {
  //     if (module.hot) {
  //       module.hot.accept('./reducers', () => {
  //         store.replaceReducer(rootReducer)
  //       })
  //     }
  //   }
  //
  //   return store
  // }
  //
  // export default configureStore
