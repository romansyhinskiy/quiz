import styled from "styled-components";

export const Header = styled.div`
  height: 59px;
  background: #000;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: grid;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 85vh;
`;

export const StyledForm = styled.form`
  width: 600px;
  height: 369px;
  border: 2px solid #000000;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    flex-direction: column;
    width: 90%;
    height: initial;
  }
`;

export const Row = styled.div`
  width: 50%;
  padding: 32px 16px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 16px;
  }
`;

export const StyledButton = styled.button`
  height: 52px;
  width: 100%;
  background: #000;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 32px;
  cursor: pointer;
`;
