import { connect } from 'react-redux';
import { getSingleProject } from '../../actions/project_actions';
import ProjectShow from './show_project';

const mapStateToProps = (state, { match }) => ({
  project: getSingleProject(state, match.params.id),
  creator_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  getSingleProject: id => dispatch(getSingleProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
