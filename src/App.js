import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutComponent from './components/About/about.component';
import MenuComponent from './components/Menu/menu.component';
import AvatarListComponent from './components/Avatar/avatar-list.component';
import ToDoListComponent from './components/ToDo/todo-list.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={AvatarListComponent}></Route>
          <Route path="/about" component={AboutComponent}></Route>
          <Route path="/todo" component={ToDoListComponent}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
