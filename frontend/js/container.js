import { connect } from 'react-redux';
import { AthleteList } from './athlete.jsx';
import { addPoints } from './actions';

const mapStateToProps = state => ({
  athletes: state.athletes,
});

const mapDispatchToProps = dispatch => ({
  onAthleteClick: id => dispatch(addPoints(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AthleteList);
