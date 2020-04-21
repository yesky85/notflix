import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collectionApi } from "api";
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

const Collection = ({
  // location: {
  //   state: { result },
  // },
  result,
}) => {
  const [loading, setLoading] = useState(true);
  const [parts, setParts] = useState([]);

  const collections = async () => {
    const { id } = result;
    try {
      const { data: parts } = await collectionApi.collectionDetail(id);
      setParts(parts);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    collections();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <Container>
      <ImageContainer>
        {parts.parts &&
          parts.parts.map((part) => (
            <Link key={part.id} to={`/movie/${part.id}`}>
              <Image
                bgUrl={
                  part.poster_path
                    ? `https://image.tmdb.org/t/p/original/${part.poster_path}`
                    : require("../../../assets/noPosterSmall.png")
                }
              />
              <Title>{part.title}</Title>
            </Link>
          ))}
      </ImageContainer>
    </Container>
  );
};

export default Collection;
