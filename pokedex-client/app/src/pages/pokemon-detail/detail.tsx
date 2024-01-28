import { gql, useQuery } from "@apollo/client";
import * as Styles from "./detail.styles";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useMain } from "../../context/mainContext";

interface IEvolutionsPokemon {
  name: string;
  id: string;
  image: string;
  isFavorite: boolean;
}

const GET_POKEMON = gql`
  query getPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      name,
      image,
      id,
      maxCP,
      maxHP,
      resistant,
      isFavorite,
      weight {
        minimum,
        maximum,
      },
      height {
        minimum,
        maximum
      },
    	evolutions {
        name,
        id,
        image,
        isFavorite,
      },
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
    <>
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
        <Styles.PokemonBody>
          <Styles.WeightContainer>
            <h5>Weight</h5>
            <span>{data.pokemonByName.weight.minimum} - {data.pokemonByName.weight.maximum}</span>
          </Styles.WeightContainer>
          <Styles.WeightContainer>
            <h5>Height</h5>
            <span>{data.pokemonByName.height.minimum} - {data.pokemonByName.height.maximum}</span>
          </Styles.WeightContainer>
        </Styles.PokemonBody>
      </Styles.Container>
      <Styles.Evolutions>
        {data?.pokemonByName?.evolutions.length > 0 && <h2>Evolutions</h2>}
        {
          <Styles.EvolutionsWrapper>
          {
            data.pokemonByName.evolutions.map((item: IEvolutionsPokemon, index: number) => (
              <Styles.EvolutionsContainer key={`${item.name}-${index}`}>
                <Link to={`/detail/${item.name}`}><Styles.Media src={item.image} alt={item.name} /></Link>
                <Link to={`/detail/${item.name}`}><span>{item.name}</span></Link>
                {
                  item.isFavorite
                  ?
                  <FontAwesomeIcon icon={faHeart} onClick={() => {
                    makeUnFavorite(item.id);
                  }} /> 
                  : 
                  <FontAwesomeIcon icon={farHeart} onClick={() => {
                    makeFavorite(item?.id);
                  }} />
                }
              </Styles.EvolutionsContainer>
            ))
          }
          </Styles.EvolutionsWrapper>
        }
      </Styles.Evolutions>
    </>
  )
}
