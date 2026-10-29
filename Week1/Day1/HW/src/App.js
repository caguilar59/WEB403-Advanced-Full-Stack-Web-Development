import React from 'react';
import './App.css';
import {TodoList1, TodoList2} from './componets/todolist';
import "bootstrap/dist/css/bootstrap.min.css";


 function App() {

  let d = new Date();//get current date

  let day =new Array(7);// create array of days

  day[0] = "Sunday";
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";

  let n = day[d.getDay()];

  let todo;

  if (n === "Monday"){
    todo = <TodoList1 />;
  } else if (n ==="Tuesday"){
    todo = <TodoList2/>;
  }

  return (
    <div className="App">
      <h1>{n}Todo List</h1>
      {todo}
    </div>
  );
}

export default App;