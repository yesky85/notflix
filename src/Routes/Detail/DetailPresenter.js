import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import { Route, Link, withRouter } from "react-router-dom";
import Season from "./Tabs/Season";
import Product from "./Tabs/Product";
import Youtube from "./Tabs/Youtube";
import Collection from "./Tabs/Collection";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Imdb = styled.a`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url("https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/android-mobile-196x196._CB479962153_.png");
  background-size: cover;
  background-position: center center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
  height: 30px;
  width: 100px;
  border: none;
  color: #ffffff;
  background-color: inherit;
  border-top: 2px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const DetailPresenter = ({ result, error, loading, location: { pathname } }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Notflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Notflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.imdb_id ? (
                <Imdb
                  href={`https://www.imdb.com/title/${result.imdb_id}/`}
                ></Imdb>
              ) : (
                <span>None</span>
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.release_date ? (
            <ButtonContainer>
              <Button current={pathname === `/movie/${result.id}/collection`}>
                {/* <Link to={`/movie/${result.id}/collection`}>COLLECTION</Link> */}
                <Link
                  to={{
                    pathname: `/movie/${result.id}/collection`,
                    state: { result },
                  }}
                >
                  COLLECTION
                </Link>
              </Button>
              <Button current={pathname === `/movie/${result.id}/youtube`}>
                <Link to={`/movie/${result.id}/youtube`}>TRAILER</Link>
              </Button>
              <Button current={pathname === `/movie/${result.id}/product`}>
                <Link to={`/movie/${result.id}/product`}>PRODUCT</Link>
              </Button>
              <Route path="/movie/:id/collection">
                {result.belongs_to_collection && (
                  <Collection result={result.belongs_to_collection} />
                )}
              </Route>
              <Route path="/movie/:id/youtube">
                <Youtube result={result} />
              </Route>
              <Route path="/movie/:id/product">
                <Product result={result} />
              </Route>
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              <Button current={pathname === `/tv/${result.id}/season`}>
                <Link to={`/tv/${result.id}/season`}>SEASON</Link>
              </Button>
              <Button current={pathname === `/tv/${result.id}/youtube`}>
                <Link to={`/tv/${result.id}/youtube`}>TRAILER</Link>
              </Button>
              <Button current={pathname === `/tv/${result.id}/product`}>
                <Link to={`/tv/${result.id}/product`}>PRODUCT</Link>
              </Button>
              <Route path="/tv/:id/season">
                <Season result={result} />
              </Route>
              <Route path="/tv/:id/youtube">
                <Youtube result={result} />
              </Route>
              <Route path="/tv/:id/product">
                <Product result={result} />
              </Route>
            </ButtonContainer>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default withRouter(DetailPresenter);
