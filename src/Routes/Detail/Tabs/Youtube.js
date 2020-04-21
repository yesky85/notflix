import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 520px;
`;

const Title = styled.span``;

const Trailer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-auto-rows: 300px;
  gap: 10px;
  margin-bottom: 10px;
`;

const Youtube = ({ result }) => {
  return (
    <Container>
      <Trailer>
        {result.videos.results &&
          result.videos.results.map((video) => (
            <div key={video.id}>
              <iframe
                title={video.id}
                id="ytplayer"
                type="text/html"
                width="500"
                height="280"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
              ></iframe>
              <Title>{video.name}</Title>
            </div>
          ))}
      </Trailer>
    </Container>
  );
};

export default Youtube;
