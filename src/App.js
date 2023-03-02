//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import AddTask from './components/addTask';

import TodoList from './components/todolist';


class App extends Component{
  
  state = {
    tasks: [
      {
        id: 1,
        description: 'Buy new shoes!',
        done: false,
      },
      {
        id: 2,
        description: 'Soak Garri!',
        done: false,
      },
      {
        id: 3,
        description: 'Eat Rice!',
        done: false,
      },
    ]
  }

  AddTask = (task) => this.setState({
    tasks: [...this.state.tasks, task]
  });

  DeleteTask = (id) => this.setState({
    tasks: this.state.tasks.filter((el) => el.id !== id)
  });

  doneTask = (id) => this.setState({
    tasks : this.state.tasks.map((el) => 
      el.id === id ? {...el, done: !el.done} : el
    )
  });

  render() {
    return (
      <div className='App'>

        
        <TodoList
        todos={this.state.tasks}
        handleDelete = {this.DeleteTask}
        handleDone = {this.doneTask}
        />
        <AddTask handleAdd = { this.AddTask}/>

      </div>

    )
  }
}

export default App;
