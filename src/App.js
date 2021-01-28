import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );  
}

// class App extends Component {
//   render() {
//     return (
//       <div >
//         <HomePage/>
//       </div>
//     );
//   }
// }

export default App;
