import { connect } from 'react-redux';
import { AthleteList } from './athlete.jsx';

const mapStateToProps = state => ({
  athletes: state.athletes,
});

export default connect(mapStateToProps)(AthleteList);
