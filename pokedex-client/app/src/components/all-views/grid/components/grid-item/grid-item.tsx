import * as Styles from "../../grid.styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useMain } from "../../../../../context/mainContext";

export const GridItem = ({ ...props }) => {
  // @ts-ignore
  const { makeFavorite, makeUnFavorite } = useMain();

  return (
    <Styles.Grid>
      {
        // @ts-ignore
        props && props?.pokemons?.edges?.map((pokemon, index) => (
          <Styles.Container key={index}>
            <Link to={`/detail/${pokemon.name}`} key={index}>
              <Styles.Media src={pokemon.image} alt={pokemon.name} />
            </Link>
            <Styles.Info>
              <Styles.Title>{pokemon.name}</Styles.Title>
              <span>{pokemon.resistant[0]}</span>, <span>{pokemon.resistant[1]}</span>
              {/* {pokemon?.isFavorite ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={farHeart} />}<br /> */}

              {
                pokemon?.isFavorite
                ? 
                <FontAwesomeIcon icon={faHeart} onClick={() => {
                  makeUnFavorite(pokemon.id);
                }} /> 
                : 
                <FontAwesomeIcon icon={farHeart} onClick={() => {
                  makeFavorite(pokemon.id);
                }} />
              }<br />
            </Styles.Info>
          </Styles.Container>
        ))
      }
    </Styles.Grid>
  )
}