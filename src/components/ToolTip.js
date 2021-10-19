import styled from 'styled-components';

const ToolTip = styled.div`
  display: none;
  width: max-content;
  top: 40px;
  left: 56%;
  transform: translate(-50%, 0);
  padding: 14px 15px;
  color: #fff;
  background-color: #1c2d41;
  font-weight: normal;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid #1c2d41;
  font-size: 16px;
  text-align: center;
  pointer-events: none;
`;

export default ToolTip;