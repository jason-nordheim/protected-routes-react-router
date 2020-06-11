import React from 'react';
import { LandingPage } from './landing.page'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppLayout } from './app.layout.js'
import { ProtectedRoute } from './protected.route.js'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
          <h1>Protected React Router</h1>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
      </div>
    </BrowserRouter>
  );
}

export default App;
