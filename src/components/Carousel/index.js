import React from 'react';
import Slider from 'react-slick';
import {
  FaHeartbeat,
  FaDollarSign,
  FaSearchDollar,
  FaRegHeart,
  FaFileInvoiceDollar,
  FaBuilding,
  FaUserCircle,
  FaFileExcel,
} from 'react-icons/fa';

import { CarouselWrapper, Infos, Wrapper } from './styles';

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <CarouselWrapper>
      <Infos {...settings}>
        <Wrapper>
          <div>
            <span>Acessoria Contabil</span>
            <FaHeartbeat size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Contabilidade</span>
            <FaDollarSign size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Fiscal</span>
            <FaSearchDollar size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Recursos Humanos</span>
            <FaRegHeart size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Classificação do ativo imobilizado</span>
            <FaFileInvoiceDollar size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Constituição e encerramento de empresas</span>
            <FaBuilding size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Pessoa Física</span>
            <FaUserCircle size={60} color="#021586" />
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>Certidões Negativas</span>
            <FaFileExcel size={60} color="#021586" />
          </div>
        </Wrapper>
      </Infos>
    </CarouselWrapper>
  );
}
