import React     from 'react';
import Nav       from '../Nav/Nav';
import TaskForm  from '../TaskForm';
import Footer    from '../Footer/Footer';
import TaskList  from '../TaskList';
// import db        from '../../../model/task';
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

    fetch()
      .then(r => r.json())
      .then(data => {
        const task = new Task(data);
        const newState = {...this.state.tasks};
        newState.push(task);
        this.setState({ task: newState });
      });
    // post to DB, this name and desc
    // .then update the state
    console.log(arguments);
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
