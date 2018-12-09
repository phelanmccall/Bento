import  React                     from 'react';
import  { Route, NavLink, Link }  from 'react-router-dom';

import  CreateTaskContainer       from '../tasks/create_task_container';
import  TaskIndexContainer        from '../tasks/index_tasks_container';

import  { ItemTypes }             from "../../util/dnd_constants.js";
import  { updateProject,
          destroyProject,
          getAllProjects }        from '../../actions/project_actions';
import  { DragSource,
          DropTarget,
          DragLayer }             from 'react-dnd';

const projectSource = {
  beginDrag(props, monitor, component) {
    return {
      id:     props.project.id,
      index:  props.project.index,
    };
  },

  isDragging(props, monitor) {
    return props.project.id === monitor.getItem().id;
  },
};

function collectSource(connect, monitor) {
  return {
    connectDragSource:  connect.dragSource(),
    isDragging:         monitor.isDragging(),
  };
};

const projectTarget = {
  hover(props, monitor, component) {
    const dragProject   =  monitor.getItem();
    const dragId        =  monitor.getItem().id;
    const dragIndex     =  monitor.getItem().index;
    const hoverProject  =  props.project;
    const hoverId       =  props.project.id;
    const hoverIndex    =  props.project.index;

    if (dragProject.index !== props.project.index) {
      const dragProjectToUpdate   =
        Object
          .assign({},
                  dragProject,
                  { index: hoverIndex });
      const hoverProjectToUpdate  =
        Object
          .assign({},
                  hoverProject,
                  { index: dragIndex });

      console.log('drag idx:', dragIndex);
      console.log(dragProjectToUpdate);
      // console.log('hover idx:', hoverIndex);
      // console.log(hoverProjectToUpdate);

      // props.updateProject(dragProjectToUpdate);
      // setTimeout(() => props.updateProject(hoverProjectToUpdate));
      // setTimeout(() => props.getAllProjects(props.teamId), 65);

      // component.setState({
      //   index:       props.index,
      //   team_id:     props.teamId,
      // });

    }
  },


  drop(props, monitor, component) {
    // return props;
    const dragProject   =  monitor.getItem();
    const dragId        =  monitor.getItem().id;
    const dragIndex     =  monitor.getItem().index;
    const dropProject   =  props.project;
    const dropId        =  props.project.id;
    const dropIndex     =  props.project.index;

    if (dragIndex !== dropIndex) {
      const dragProjectToUpdate   =
        Object
          .assign({},
                  dragProject,
                  { index: dropIndex });
      const dropProjectToUpdate  =
        Object
          .assign({},
                  dropProject,
                  { index: dragIndex });


        console.log('drag idx:', dragIndex);
        console.log(dragProjectToUpdate);
        // console.log('drop idx:', dropIndex);
        // console.log(dropProjectToUpdate);

    props.updateProject(dragProjectToUpdate);
    setTimeout(() => props.updateProject(dropProjectToUpdate), 65);
  }
},
};

function collectTarget(connect, monitor) {
  return {
    connectDropTarget:  connect.dropTarget(),
    highlighted:        monitor.canDrop(),
    hovered:            monitor.isOver(),
  };
};

// ProjectIndexItem Class_______________ ______________________________________

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete         =  this.handleDelete.bind(this);
    this.handleInput          =  this.handleInput.bind(this);
    this.handleEnter          =  this.handleEnter.bind(this);

    this.state = {
      title:       this.props.project.title,
    };
  }

  handleDelete(e) {
    e.preventDefault();

    let id = e.currentTarget.id;

    this.props.destroyProject(id);
  }

  handleInput(e) {
    e.preventDefault();

    const title = e.target.value ? e.target.value : '';

    this.setState({ title });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      const obj = {
        title:       this.state.title,
        creator_id:  this.props.project.creator_id,
        id:          this.props.project.id,
      };

      this.props.updateProject(obj);
      var successor =
        document.querySelector(`#success-for-${this.props.project.id}`);
      successor.style.display = 'block';

      setTimeout(() => (successor.style.opacity = '0', successor.style.display = 'none'), 1500)

      e.currentTarget.blur();
    }
  }

// ProjectIndexItem render___________________________________________________
  render() {

    const { state,
            project,
            index,
            hovered,
            connectDragSource,
            connectDropTarget,
            isDragging,
          }              =  this.props;
    const idOfProject    =  project.id;
    const teamOfProject  =  project.team_id;
    const opacity        =  1;
    const display        =  'none';
    const position       =  'absolute';
    const marginLeft     =  '95px';
    const width          =  '120px';


    return connectDropTarget(connectDragSource(
      <li
        key        =  { `ProjectIndexItem-${project.id}` }
        style      =  {{ opacity }}
        className  =  'project-list-item'
      >
        <button
        id         =  { project.id }
        onClick    =  { this.handleDelete }
        className  =  'task-delete'
        >x</button>

        <input
          className   =  'project-title-live-input'
          type        =  'text'
          value       =  { this.state.title }
          onChange    =  { this.handleInput }
          onFocus     =  { this.handleInput }
          onKeyPress  =  { this.handleEnter }
        />

      <div
        id={`success-for-${project.id}`}
        style={{ display, position, marginLeft, width }}
      > title updated 🍱 </div>

        <TaskIndexContainer
          key        =  { `TaskIndexContainer-${project.id}` }
          className  =  'pli-task-index-wrapper'
          tasks      =  { this.props.tasks }
          projectId  =  { idOfProject }
          teamId     =  { teamOfProject }
        />
      </li>
    ));
  }
}

export default DropTarget(
  ItemTypes.PROJECT,
  projectTarget,
  collectTarget,
)(DragSource(
  ItemTypes.PROJECT,
  projectSource,
  collectSource,
)(ProjectIndexItem));
