import React, { Component } from 'react';
import './CommentStyles.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      content: ''
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false });
  }
  toggleDropDown = () => {
    // event.preventDefault();
    this.setState({
      showPopUp: !this.state.displayMenu
    });
  };

  render() {
    console.log('DD', this.props);
    // I NEED TO FIX THIS CLOSE BUTTON. SO MUCH TO DO SO LITTLE TIME
    return (
      <div className='dropdown'>
        <div onClick={this.hideDropdownMenu}>Close X</div>
        <div className='button' onClick={this.showDropdownMenu}>
          {' '}
          + Comment{' '}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className='active' href='#Create Page'>
                This is my comment for this post the first one in my drop down.
              </a>
            </li>
            <li>
              <a href='#Manage Pages'>
                I think I can agree with the above post. It is indeed a comment
                for the first post. Although this is the second the one above is
                the first
              </a>
            </li>
            <li>
              <a href='#Create Ads'>Create Ads</a>
            </li>
            <li>
              <a href='#Manage Ads'>Manage Ads</a>
            </li>
            <li>
              <a href='#Activity Logs'>Activity Logs</a>
            </li>
            <li>
              <a href='#Setting'>Setting</a>
            </li>
            <li>
              <input placeholder='Add comment...' />
              <button>Submit +</button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
