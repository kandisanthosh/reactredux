

import './App.css';
import { EmployeeList } from './components/Employees/EmployeeList';
import {Registration} from './components/Form';
import {Header} from './components/Header';
import {BrowserRouter as Router,Switch, Route , useRouteMatch, useParams } from 'react-router-dom';

function App() {
  let match = useRouteMatch();
  return (
    <div className="App">
    <Header />
    <Switch>
     
     <Route path="/edit/:id" exact >
       <Registration />
     </Route>
     <Route path="/" exact> 
     <EmployeeList />
     </Route>
     </Switch>

    </div>
  );
}

export default App;
