import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';


const StyledBurgerMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fff;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #fff;
    text-decoration: none;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;


export class Menu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <StyledBurgerMenu>
        <BurgerMenu right width={ '50%' }>
          <a id="home" className="menu-item" href="/">Forsiden</a>
          <a id="trees" className="menu-item" href="/trees">Juletrær</a>
        </BurgerMenu>
      </StyledBurgerMenu>
    );
  }
}

export default Menu;