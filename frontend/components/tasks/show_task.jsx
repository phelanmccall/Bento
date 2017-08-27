// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Route, withRouter, history, Link } from 'react-router-dom';
// import merge from 'lodash/merge';
// import CreateTaskContainer from './create_task_container';
//
// class TaskShow extends React.Component {
//   componentDidMount() {
//     this.props.getSingleTask(this.props.match.params.id);
//   }
//
//   componentWillReceiveProps(newProps) {
//  this.props.match.params
//     if (this.props.match.params.id !== newProps.match.params.id) {
//       this.props.getSingleTask(newProps.match.params.id);
//     }
//   }
//
//   render () {
//     const { task } = this.props;
//     return (
//       <section className="show-container">
//         <section className="task-show">
//           <h1>{ task.title }</h1>
//           <h1> hi </h1>
//           <CreateTaskContainer />
//         </section>
//       </section>
//     );
//   }
// }
//
// export default TaskShow;
