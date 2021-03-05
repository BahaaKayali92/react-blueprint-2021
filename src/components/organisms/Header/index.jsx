import React from 'react';
import PropTypes from 'prop-types';
import './style';
import H1 from '../../atoms/H1';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.CLASSES = {
      STICKY: 'header-wrapper--sticky',
      NAVBAR_OPEN: 'header-wrapper__link-list-wrapper--open',
    };

    this.onScroll = this.onScroll.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  render() {
    const { nav } = this.props;
    return (
      <header ref={(ref) => { this.headerNode = ref; }} className='header-wrapper'>
        <div className='container-xl'>
          <nav className='header-wrapper__navbar'>
            <a
              className='header-wrapper__logo-link'
              href='#'
              title='homepage Link'
            >
              <img
                className='header-wrapper__logo-image'
                src='assets/images/logo.svg'
                alt='logo'
              />
            </a>
            <div ref={(ref) => { this.listWrapper = ref; }} className='header-wrapper__link-list-wrapper'>
              <ul ref={(ref) => { this.list = ref; }} className='header-wrapper__link-list'>
                {
                  nav.map((item, index) => (
                    <li key={index} className='header-wrapper__link-list-item'>
                      <a href={item.href}>
                        {item.text}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <button className='header-wrapper__btn'>
              test
            </button>
            <button
              className='header-wrapper__navbar-toggle'
              onClick={this.toggleNavbar}
            >
              hallo
            </button>
          </nav>
        </div>
      </header>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const offset = this.headerNode.offsetTop;
    if (window.pageYOffset > offset + this.headerNode.clientHeight) {
      this.headerNode.classList.add(this.CLASSES.STICKY);
    } else {
      this.headerNode.classList.remove(this.CLASSES.STICKY);
    }
  }

  toggleNavbar() {
    if (this.listWrapper.classList.contains(this.CLASSES.NAVBAR_OPEN)) {
      this.listWrapper.style.maxHeight = '0';
      this.listWrapper.classList.remove(this.CLASSES.NAVBAR_OPEN);
    } else {
      const height = this.list.clientHeight;
      this.listWrapper.style.maxHeight = `${height}px`;
      this.listWrapper.classList.add(this.CLASSES.NAVBAR_OPEN);
    }
  }
}

export default Header;

Header.propTypes = {
  nav: PropTypes.arrayOf({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  nav: [],
};
