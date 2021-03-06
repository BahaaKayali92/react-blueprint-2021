import React from 'react';
import PropTypes from 'prop-types';
import './style'
import Teaser from '../../organisms/Teaser';

class Info extends React.PureComponent {
  render() {
    const { title, text, link } = this.props;

    return (
      <div className='info-wrapper'>
        <div className='info-wrapper__title'>
          <span>
            <img src='assets/images/iconarrow.png' alt='arrow icon' />
          </span>
          <h3>{title}</h3>
        </div>
        <p className='info-wrapper__text'>{text}</p>
        <div className='info-wrapper__button-wrapper'>
          <a className='info-wrapper__button' target={link.target} href={link.href} title={link.title}>
            {link.text}
          </a>
        </div>
      </div>
    );
  }
}

export default Info;

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
  }),
};

Info.defaultProps = {
  title: '',
  text: '',
  link: {
    href: '#',
    title: 'Link to',
    text: '',
    target: '_blank',
  },
};
