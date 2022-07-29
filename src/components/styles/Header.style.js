import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5% 5.5%;
  position: sticky;
  top: 0;
  z-index: 100;

  header h1 {
    font-family: "Mochiy Pop One", sans-serif;
    color: white;
    font-weight: 100;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    padding: 3% 4%;
    border-width: 0;
    background-color: #121212;
    color: #d6d6d6;
    font-size: 1.1rem;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #757575;
  }

  button {
    padding: 4% 5%;
    background-color: #313131;
    border: none;
    cursor: pointer;
  }
  button i {
    color: white;
  }
`;

export const Image = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
