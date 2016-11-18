import React     from 'react';
import Nav       from '../Nav/Nav';
import TaskForm  from '../TaskForm';
import Footer    from '../Footer/Footer';
import TaskList  from '../TaskList';
// import Task      from '../Model/Task';

import './App.css';
import './GA_gear.png';

export default class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      tasks: {},
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(name, desc) {
    fetch('/tasks', {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stingify({ name, desc }),
    })
      .then(r => r.json())
      .then((newTask) => {
        // const task = new Task(data);
        const newState = { ...this.state.tasks };
        newState[newTask.id] = newTask;
        this.setState({ task: newState });
      })
      .catch((error) => {
        throw error;
      });
    // post to DB, this name and desc
    // .then update the state
    // console.log(arguments);
  }

  render() {
    return (
      <container>

        <header>
          <Nav />
        </header>

        <main className="container">

          <section className="jumbotron">
            <h1>Task Manager</h1>
            <TaskForm
              addTask={this.addTask}
            />
          </section>

          {/* to do lists */}

          <section className="row">
            <article className="col-md-4">
              <h3>Open Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Completed Items</h3>
              <TaskList />
            </article>

            <article className="col-md-4">
              <h3>Deleted Items</h3>
              <TaskList />
            </article>
          </section>

        </main>

        <footer>
          <Footer />
        </footer>

      </container>
    );
  }

}
