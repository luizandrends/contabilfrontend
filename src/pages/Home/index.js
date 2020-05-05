import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import { Container, HeaderWrapper, CardContainer, Services } from './styles';

import Carousel from '../../components/Carousel';

import logo from '../../assets/03.svg';
import banner from '../../assets/accounting_1.svg';

export default function Home() {
  return (
    <Container>
      <HeaderWrapper>
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <FaInstagram size={22} color="#FFF" />
              </li>
              <li>
                <FaFacebookF size={22} color="#FFF" />
              </li>
            </ul>
          </div>

          <div className="login">
            <ul>
              <li>Nossos serviços</li>
              <li>Onde estamos</li>
            </ul>
            <button type="button">Espaço Cliente</button>
          </div>
        </header>
      </HeaderWrapper>
      <CardContainer>
        <div className="card-wrapper">
          <span>
            Trazendo qualidade e compromisso para empresas de Santa Catarina e
            de todo o Brasil desde 1995.
          </span>
          <div className="animated-banner">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </CardContainer>
      <Services>
        <Carousel />
      </Services>
    </Container>
  );
}
