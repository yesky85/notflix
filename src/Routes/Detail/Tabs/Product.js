import React from "react";
import styled from "styled-components";

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

const Product = ({ result }) => {
  return (
    <Container>
      <ImageContainer>
        {result.production_companies &&
          result.production_companies.map((company) => (
            <div key={company.id}>
              <Image
                bgUrl={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                    : require("../../../assets/noPosterSmall.png")
                }
              />
              <Title>{company.name}</Title>
            </div>
          ))}
      </ImageContainer>
    </Container>
  );
};

export default Product;
