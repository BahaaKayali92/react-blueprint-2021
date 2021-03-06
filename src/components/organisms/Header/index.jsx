import React from 'react';
import PropTypes from 'prop-types';
import './style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.CLASSES = {
      STICKY: 'header-wrapper--sticky',
      NAVBAR_OPEN: 'header-wrapper__link-list-wrapper--open',
      SUBLIST_WRAPPER: 'header-wrapper__sublist-wrapper',
      SUBLIST_WRAPPER_OPEN: 'header-wrapper__sublist-wrapper--open',
    };

    this.onScroll = this.onScroll.bind(this);
    this.toggleSubList = this.toggleSubList.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  render() {
    const { nav } = this.props;
    return (
      <header ref={(ref) => { this.headerNode = ref; }} className='header-wrapper'>
        <div className='container-lg'>
          <nav className='header-wrapper__navbar'>
            <h2
              className='header-wrapper__title'
            >
              <strong>Untitled</strong>Corp
            </h2>
            <div ref={(ref) => { this.listWrapper = ref; }} className='header-wrapper__link-list-wrapper'>
              <ul ref={(ref) => { this.list = ref; }} className='header-wrapper__link-list'>
                {
                  nav.map((item, index) => (
                    <li key={index} className='header-wrapper__link-list-item'>
                      <a onClick={this.toggleSubList} href={item.href}>
                        {item.text}
                      </a>
                      {item.subList &&
                        <div role='menu' className='header-wrapper__sublist header-wrapper__sublist--depth-1'>
                          <div className='header-wrapper__sublist-wrapper'>
                            { this.getLinkList(item.subList) }
                          </div>
                        </div>
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
            <button
              className='header-wrapper__navbar-toggle'
              onClick={this.toggleNavbar}
            >
              <img
                src='assets/images/iconmenu.png'
                alt='icon menu'
              />
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

  getLinkList(list, depth = 2) {
    return (
      list.map((subItem, index) => {
        if (subItem.subList && subItem.subList.length) {
          return (
            <div role='menu' key={index} className={`header-wrapper__sublist header-wrapper__sublist--depth-${depth}`}>
              <a href={subItem.href} onClick={this.toggleSubList}>{subItem.text}</a>
              <div className='header-wrapper__sublist-wrapper'>
                { this.getLinkList(subItem.subList, depth + 1) }
              </div>
            </div>
          );
        }

        return (
          <div role='menu' key={index} className={`header-wrapper__sublist header-wrapper__sublist--depth-${depth}`}>
            <a href={subItem.href}>{subItem.text}</a>
          </div>
        );
      })
    );
  }

  toggleSubList(event) {
    event.preventDefault();
    event.stopPropagation();

    const { target } = event;
    const subList = target.nextElementSibling;
    if (subList) {
      const subListWrapper = subList.querySelector(`.${this.CLASSES.SUBLIST_WRAPPER}`);
      if (subListWrapper.classList.contains(this.CLASSES.SUBLIST_WRAPPER_OPEN)) {
        subListWrapper.style.maxHeight = '0';
        subListWrapper.classList.remove(this.CLASSES.SUBLIST_WRAPPER_OPEN);
      } else {
        const height = subListWrapper.clientHeight;
        subListWrapper.style.maxHeight = `${height}px`;
        subListWrapper.classList.add(this.CLASSES.SUBLIST_WRAPPER_OPEN);
      }
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
  nav: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    subList: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })),
  })),
};

Header.defaultProps = {
  nav: [],
};
