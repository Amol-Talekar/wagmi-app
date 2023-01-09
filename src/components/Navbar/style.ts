import styled from "styled-components";

export const NavbarCOntainer = styled.div`
  height: 60px;
  padding: 8px;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
`;

export const ConnectButton = styled.button`
  border: none;
  background-color: blue;
  border-radius: 8px;
  padding: 8px;
  min-width: 100px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

export const DisconnectButton = styled.button`
  border: none;
  background-color: red;
  border-radius: 8px;
  padding: 8px;
  min-width: 100px;
  cursor: pointer;
  font-weight: bold;
  color: white;
`;
