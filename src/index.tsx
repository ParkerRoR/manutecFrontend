import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

//IMPORTS COMPONENTS
import LoginPage from 'views/LoginPage/LoginPage'
import Robert from 'views/Robert/Robert'

//REDUX
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import reducers from './redux/reducers'
import sagas from './redux/sagas'
import * as moment from 'moment';
import 'moment/locale/pt-br';
import 'assets/scss/bootstrap/scss/bootstrap.scss'
import 'assets/styles/global.css'






const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
// if (process.env.NODE_ENV === 'development') {
middlewares.push(logger)




  const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

moment.locale('pt-br')



ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact render={props => <LoginPage {...props} />} history={history} />
          <Route path="/" exact render={props => <Robert {...props} />} history={history} />

         <Redirect to="/" />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
