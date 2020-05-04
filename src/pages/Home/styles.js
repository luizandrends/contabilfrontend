import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1024px;
`;

export const HeaderWrapper = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div.logo {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 50%;
        height: 50%;
      }

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-left: 12px;
        margin-top: 20px;
      }

      li {
        margin-left: 12px;
      }
    }

    div.login {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: 20px;

      ul {
        display: flex;
        flex-direction: row;
        margin-right: 12px;
        border-right: 1px solid #273d8e;
      }

      li {
        margin-right: 18px;
        color: #273d8e;
        font-weight: bold;
        font-size: 15px;
      }

      button {
        padding: 15px 30px;
        border-radius: 6px;
        background: #273d8e;

        color: #fff;
        font-size: 12px;
        font-weight: bold;
        border: none;
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 100px;

  div {
    display: flex;
    flex-direction: row;

    h3 {
      align-self: flex-start;
      font-size: 50px;
      max-width: 620px;
      line-height: 62px;
      color: #273d8e;
      text-align: left;
    }

    .animated-banner {
      animation-name: floating;
      animation-duration: 2.2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

      img {
        width: 90%;
        height: 90%;
      }
    }

    @keyframes floating {
      from {
        transform: translate(0, 0px);
      }
      65% {
        transform: translate(0, 25px);
      }
      to {
        transform: translate(0, -0px);
      }
    }
  }
`;
