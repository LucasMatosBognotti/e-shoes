import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  transition: opacity 0.3s ease-in;
  opacity: 1;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    img {
      transition: all 0.3s;
      max-width: 250px;
      align-self: center;
    }

    &:hover img {
      transform: scale(1.05);
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      color: #333;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      &:disabled {
        cursor: wait;
      }

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: #7112c4;
      }

      > div {
        display: flex;
        align-items: center;
        padding: 12px;
        position: relative;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }

        .loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #7942c4;
          
          > div {
            width: 18px;
            height: 18px;
          }
          
          svg {
            margin: 0;
          }
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;