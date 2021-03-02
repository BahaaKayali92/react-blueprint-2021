import PropTypes from 'prop-types';
import './style';

const H1 = ({ text, classes }) => (
  <h1
    className={`h1 ${classes}`}
  >
    {text}
  </h1>
);

export default H1;

H1.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

H1.defaultProps = {
  classes: '',
};

