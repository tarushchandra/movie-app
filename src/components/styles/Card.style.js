import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: grey;
  height: 60vh;
  width: 22vw;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }

  .image {
    width: 22vw;
    height: 60vh;
    object-fit: cover;
  }
`;
