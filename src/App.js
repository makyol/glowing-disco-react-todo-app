import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Learn Vue', rowAssigned: "Mehmet"},
    {rowNumber: 2, rowDescription: 'Learn Java', rowAssigned: "Ali"},
    {rowNumber: 3, rowDescription: 'Learn Pandas', rowAssigned: "Akyol"},
    {rowNumber: 4, rowDescription: 'Learn English', rowAssigned: "DefneX"}
  ]
  );

  const addTodo = (description, assigned) => {
    console.log("Btn clicked!");
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
