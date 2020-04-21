import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 520px;
  height: 320px;
  overflow: scroll;
`;

const Title = styled.span``;

const Trailer = styled.div`
  display: grid;
  grid-auto-columns: 500px;
  grid-template-rows: 300px;
  grid-auto-flow: column;
  gap: 10px;
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
