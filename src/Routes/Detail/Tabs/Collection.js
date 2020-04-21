import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collectionApi } from "api";
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
      const {
        data: { parts },
      } = await collectionApi.collectionDetail(id);
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
        {parts &&
          parts.map((part) => (
            <Link key={part.id} to={`/movie/${part.id}`}>
              <Image
                bgUrl={
                  part.poster_path
                    ? `https://image.tmdb.org/t/p/original/${part.poster_path}`
                    : require("../../../assets/noPosterSmall.png")
                }
              />
              <Title>{part.title && part.title.substring(0, 32)}...</Title>
            </Link>
          ))}
      </ImageContainer>
    </Container>
  );
};

export default Collection;
