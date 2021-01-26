import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage'
import './App.scss';

export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
     </Switch>
    </BrowserRouter>
  );
}
