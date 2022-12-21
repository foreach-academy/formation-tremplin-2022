import PropTypes from 'prop-types';

const testing = (props) => {
  return <div>testing</div>;
};

testing.propTypes = {
  //* raccourcis : ptar -> PropTypes array required
  name: PropTypes.array.isRequired
};

export default testing;

//* raccourci : rafcp -> react function component with PropTypes
