import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />      
    </Router>
    <GlobalStyle />
  </>
)

export default App;