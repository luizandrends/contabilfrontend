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
        border-right: 1px solid #fff;
      }

      li {
        margin-right: 18px;
        color: #fff;
        font-size: 15px;

        &:hover {
          color: #ddd;
        }
      }

      button {
        padding: 15px 30px;
        border-radius: 6px;
        background: #fff;

        color: #7289da;
        font-size: 12px;
        font-weight: bold;
        border: none;
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin-top: 200px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      align-self: flex-start;
      font-size: 42px;
      max-width: 400px;
      line-height: 62px;
      color: #fff;
      text-align: left;
      font-weight: 300;
    }
    .animated-banner {
      margin: 0 auto;
      max-width: 480px;

      animation-name: floating;
      animation-duration: 2.2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

      img {
        align-self: flex-end;
        width: 500px;
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
  }
`;

export const Services = styled.div`
  margin-top: 250px;
`;
