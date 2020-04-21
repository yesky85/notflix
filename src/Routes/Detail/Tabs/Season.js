import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 520px;
  height: 320px;
  overflow: scroll;
`;

const Title = styled.span``;

const ImageContainer = styled.div`
  display: grid;
  grid-auto-columns: 200px;
  grid-template-rows: 300px;
  grid-auto-flow: column;
  gap: 10px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
`;

const Season = ({ result }) => {
  return (
    <Container>
      <ImageContainer>
        {result.seasons &&
          result.seasons.map((season) => (
            <Link key={season.id} to={`/tv/${season.id}`}>
              <Image
                bgUrl={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                    : require("../../../assets/noPosterSmall.png")
                }
              />
              <Title>{season.name}</Title>
            </Link>
          ))}
      </ImageContainer>
    </Container>
  );
};

export default Season;
