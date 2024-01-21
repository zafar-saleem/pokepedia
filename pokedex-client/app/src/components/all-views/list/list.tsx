import React from "react";
import * as Styles from "./list.styles";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useMain } from "../../../context/mainContext";

const ListView = React.memo(({ ...props }) => {
  // @ts-ignore
  const { makeFavorite, makeUnFavorite, filteredContents } = useMain();
  const { pathname } = useLocation();

  if (filteredContents && pathname !== "/favorites") {
    return (
      <Styles.List>
        {
          // @ts-ignore
          filteredContents?.pokemons?.edges?.map((pokemon: any, index: number) => (
            <Styles.ListItem key={index}>
              <Link to={`/detail/${pokemon.name}`}>
                <Styles.Media src={pokemon.image} alt={pokemon.name} />
              </Link>
              <Link to={`/detail/${pokemon.name}`}>
                <Styles.Title>{pokemon.name}</Styles.Title>
                <span>{pokemon.resistant[0]},  {pokemon.resistant[1]}</span>
              </Link>
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
            </Styles.ListItem>
          ))
        }
      </Styles.List>
    )
  }

  return (
    <Styles.List>
      {
        // @ts-ignore
        props?.pokemons?.edges?.map((pokemon: any, index: number) => (
          <Styles.ListItem key={index}>
            <Link to={`/detail/${pokemon.name}`}>
              <Styles.Media src={pokemon.image} alt={pokemon.name} />
            </Link>
            <Link to={`/detail/${pokemon.name}`}>
              <Styles.Title>{pokemon.name}</Styles.Title>
              <span>{pokemon.resistant[0]},  {pokemon.resistant[1]}</span>
            </Link>
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
          </Styles.ListItem>
        ))
      }
    </Styles.List>
  )
});

export default ListView;
