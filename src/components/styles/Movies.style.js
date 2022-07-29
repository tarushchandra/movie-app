import styled from "styled-components";

export const StyledMovies = styled.div`
  flex-grow: 1;
  background-color: #181818;
  color: white;
  padding: 3% 6%;
  min-height: 300vh;
  margin-left: 250px;

  div {
    display: grid;
    height: auto;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4%;
    column-gap: 4%;
    justify-content: space-between;
  }
`;

export const LoadingText = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
