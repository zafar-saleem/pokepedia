import React from "react";
import * as Styles from "./grid.styles";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useMain } from "../../../context/mainContext";

const GridView = React.memo(({ ...props }: any) => {
  // @ts-ignore
  const { makeFavorite, makeUnFavorite, filteredContents } = useMain();
  const { pathname } = useLocation();

  if (filteredContents && pathname !== "/favorites") {
    return (
      <Styles.Grid>
        {
          // @ts-ignore
          filteredContents.pokemons.edges.map((pokemon, index) => (
            <div key={index}>
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
            </div>
          ))
        }
      </Styles.Grid>
    )
  }

  return (
    <Styles.Grid>
      {
        // @ts-ignore
        props.pokemons.edges.map((pokemon, index) => (
          <div key={index}>
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
          </div>
        ))
      }
    </Styles.Grid>
  )
});

export default GridView;
