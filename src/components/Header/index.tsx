import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart, Dropdown } from './styled';

import logo from '../../assets/rocketshoes.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <strong>My cart</strong>

        <div>
          <MdShoppingCart size={20} color="#130042" />
          <span>5</span>
        </div>

        <Dropdown>
          <div>
            <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="Tenis"/>

            <div>
              Tênis de Caminhada Leve Confortável
              <p>3 x 179.9</p>
            </div>
          </div>
          
          <div className="more">
            <h2>
              <span>TOTAL:</span>
              <span>3</span>
            </h2>
          </div>
        </Dropdown>
      </Cart>
    </Container>
  );
}

export default Header;