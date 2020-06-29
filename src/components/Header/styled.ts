import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  padding: 0 20px;
  background: #e8e6ef;
  height: 100px;
  border-radius: 10px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  &:hover strong {
    opacity: 0.7;
  }

  &:hover div:last-child {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  strong {
    display: block;
    text-transform: uppercase;
    margin-right: 5px;
    transition: opacity 0.2s;
    color: #130042;
  }

  div {
    position: relative;

    > span {
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      right: -8px;
      top: -10px;
      font-size: 12px;
      font-weight: bold;
      line-height: 21px;
      overflow: hidden;
      border-radius: 100%;
      text-align: center;
      color: #fff;
      background: #7159c1;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute !important;
  width: 220px;
  top: 100%;
  right: 0; 
  z-index: 5;
  border-radius: 4px;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  transform: translateY(10px);
  background: #7159c1;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

  > div {
    display: flex;

    + div {
      margin-top: 15px;
    }

    img {
      width: 50px;
      padding: 5px;
      border-radius: 3px;
      align-self: flex-start;
      background: #fff;
    }

    div {
      color: #fff;
      font-size: 14px;
      margin-left: 10px;

      p {
        font-size: 11px;
        margin-top: 3px;

        span {
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }

  .more {
    width: 100%;
    margin: 5px 0;
    justify-content: center;
    font-size: 15px;
    letter-spacing: 3px;
    color: rgba(255, 255, 255, 0.8);
  }

  h2 {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    
    span:first-child {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
    }
    span:last-child {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;