import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 520px;
`;

const Title = styled.span``;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-auto-rows: 190px;
  gap: 10px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  height: 180px;
  width: 120px;
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
