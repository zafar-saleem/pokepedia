import { gql, useQuery } from "@apollo/client";
import * as Styles from "./detail.styles";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useMain } from "../../context/mainContext";

const GET_POKEMON = gql`
  query getPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      name,
      image,
      id,
      classification,
      maxCP,
      maxHP,
      fleeRate,
      resistant,
      weaknesses,
      isFavorite,
      attacks {
        fast {
          name,
          damage,
          type
        },
        special {
          name,
          damage,
          type
        }
      }
    }
  }
`;

export const PokemonDetail = () => {
  const location = useLocation();
  const slugs = location.pathname.split("/");
  const name = slugs[2];
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });
  // @ts-ignore
  const { makeFavorite, makeUnFavorite } = useMain();

  if (loading) return <p>Loading Pokemon...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Styles.Container>
      <Styles.ImageWrapper>
        <img src={data?.pokemonByName?.image} alt={data?.pokemonByName?.name} />
      </Styles.ImageWrapper>
      <Styles.Wrapper>
        <h2>{data?.pokemonByName?.name}</h2>
        <span>{data?.pokemonByName?.resistant[0]}</span>
        {/* {data?.pokemonByName?.isFavorite ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={farHeart} />}<br /> */}
        {
          data?.pokemonByName?.isFavorite
          ?
          <FontAwesomeIcon icon={faHeart} onClick={() => {
            makeUnFavorite(data?.pokemonByName?.id);
          }} /> 
          : 
          <FontAwesomeIcon icon={farHeart} onClick={() => {
            makeFavorite(data?.pokemonByName?.id);
          }} />
        }<br />
        <Styles.ProgressCP></Styles.ProgressCP>
        <span>CP: {data?.pokemonByName?.maxCP}</span><br />
        <Styles.ProgressHP></Styles.ProgressHP>
        <span>HP: {data?.pokemonByName?.maxHP}</span>
      </Styles.Wrapper>
    </Styles.Container>
  )
}
