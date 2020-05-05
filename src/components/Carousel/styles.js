import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Infos = styled(Slider)`
  display: flex;
  max-width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  height: 150px;
  max-width: 60%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 30px 0;
    text-align: center;

    span {
      margin-bottom: 10px;
      color: #666;
      font-weight: bold;
      line-height: 10px;
    }
  }
`;

export const Content = styled.div``;
