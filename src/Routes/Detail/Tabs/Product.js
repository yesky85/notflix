import React from "react";
import styled from "styled-components";

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
  background-size: contain;
  height: 180px;
  width: 120px;
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
