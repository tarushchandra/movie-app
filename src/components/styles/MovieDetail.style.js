import styled from "styled-components";

export const StyledMovieDetail = styled.div`
  flex-grow: 1;
  background-color: #181818;
  color: white;
  padding: 3% 6%;
  min-height: 100vh;
  margin-left: 250px;

  .movie-detail-card {
    background-color: #292828;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1.5% 1%;
    border-radius: 10px;
  }

  .right-section {
    width: 100%;
    padding: 0 2%;
  }

  .basic-info {
    display: flex;
    gap: 7%;
  }

  .basic-info-item p {
    border-width: 900;
  }

  .title {
    margin-top: 4%;
    font-size: 2rem;
    font-weight: bold;
  }

  .plot {
    margin: 4% 0;
    text-align: justify;
  }
`;
