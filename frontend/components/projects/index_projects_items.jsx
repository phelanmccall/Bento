// React always required for JSX; compiles to React.createElement()
import  React                     from 'react';
import  { Route, NavLink, Link }  from 'react-router-dom';

import  CreateTaskContainer       from '../tasks/create_task_container';
import  TaskIndexContainer        from '../tasks/index_tasks_container';

import  { ItemTypes }             from '../../util/dnd_constants.js';
// import  { updateProject,
//           destroyProject,
//           getAllProjects }        from '../../actions/project_actions';
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
    // const dragId        =  monitor.getItem().id;
    const dragIndex     =  monitor.getItem().index;
    // const hoverProject  =  props.project;
    // const hoverId       =  props.project.id;
    const hoverIndex    =  props.project.index;
    props.gimmeStateProjs(props.order, dragIndex, hoverIndex, dragProject.id);
    //
    // if (dragIndex !== hoverIndex) {
    //   const dragProjectToUpdate   =
    //     Object
    //       .assign({},
    //               dragProject,
    //               { index: hoverIndex });
    //   const hoverProjectToUpdate  =
    //     Object
    //       .assign({},
    //               hoverProject,
    //               { index: dragIndex });
    //
    //   // console.log('drag idx:', dragIndex);
    //   // console.log(dragProjectToUpdate);
    //   // console.log('hover idx:', hoverIndex);
    //   // console.log(hoverProjectToUpdate);
    //
    //   // props.updateProject(dragProjectToUpdate);
    //   // setTimeout(() => props.updateProject(hoverProjectToUpdate));
    //   // setTimeout(() => props.getAllProjects(props.teamId), 65);
    //
    //   // component.setState({
    //   //   index:       props.index,
    //   //   team_id:     props.teamId,
    //   // });
    //
    // }
      // setTimeout(() => props.getAllProjects, 65);
      // return props;
      // const dragIndex     =  monitor.getItem().index;
      // const hoverIndex    =  props.project.index;
      //
      //
      // if (dragIndex !== hoverIndex) {
      //   const dragProject   =  monitor.getItem();
      //   const dragId        =  monitor.getItem().id;
      //   const hoverProject  =  props.project;
      //   const hoverId       =  props.project.id;
      //   console.log('%ccomponent',
      //               'color: pink; background-color: black;',
      //               component);
      //   const dragProjectToUpdate   =  { ...dragProject, index: hoverIndex };
      //   const hoverProjectToUpdate  =  { ...hoverProject, index: dragIndex };
      //
      //     console.log('drag idx:',
      //                 dragIndex);
      //     console.log('%cdragProjectToUpdate',
      //                 'color:blue; background:red',
      //                 dragProjectToUpdate);
      //     console.log('hover idx:',
      //                 hoverIndex);
      //     console.log('%choverProjectToUpdate',
      //                 'color:red; background:blue',
      //                 hoverProjectToUpdate);
      //   // monitor.getItem().index = props.index;
      //   // props.updateProject(dragProjectToUpdate);
      //   // setTimeout(() => props.getAllProjects(props.project.team_id), 130);
      // }
      //
      // return props;
  },


  drop(props, monitor, component) {
    const dragProject   =  monitor.getItem();
    const dragId        =  monitor.getItem().id;
    const dragIndex     =  monitor.getItem().index;
    const dropProject   =  props.project;
    const dropId        =  props.project.id;
    const dropIndex     =  props.project.index;

    console.log('%ccomponent',
                'color: pink; background-color: black;',
                component);

    if (dragIndex !== dropIndex) {
      const dragProjectToUpdate  =  { ...dragProject, index: dropIndex };
      const dropProjectToUpdate  =  { ...dropProject, index: dragIndex };

        console.log('drag idx:',
                    dragIndex);
        console.log('%cdragProjectToUpdate',
                    'color:blue; background:red',
                    dragProjectToUpdate);
        console.log('drop idx:',
                    dropIndex);
        console.log('%cdropProjectToUpdate',
                    'color:red; background:blue',
                    dropProjectToUpdate);
      // component.setState(()=> {
      //   indicesOrder: []
      // });
      props.updateProject(dragProjectToUpdate);

      setTimeout(() => props.getAllProjects(props.project.team_id), 175);
    }

    return props;
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
    this.handleDelete  =  this.handleDelete.bind(this);
    this.handleInput   =  this.handleInput.bind(this);
    this.handleEnter   =  this.handleEnter.bind(this);

    this.state = {
      title:       this.props.project.title,
      // order:
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

      console.log('%cthis.props @handleEnter', 'border: 2px dashed white', this.props);
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
    const display        =  'none';
    const position       =  'absolute';
    const marginLeft     =  '95px';
    const width          =  '120px';
    const opacity  =  isDragging ? 0 : 1;
    const cursor   =  isDragging ? '-webkit-grabbing !important' : '-webkit-grab !important';
    // const animation = hovered
    //   ? 'animation: 250ms ease-out 0s 1 slideOut'
    //   : 'animation: 250ms ease-out 0s 1 slideIn'
    const border = hovered ? '1px solid red' : '1px solid green'

    return connectDropTarget(connectDragSource(
      <li
        style      =  {{ opacity, border }}
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
