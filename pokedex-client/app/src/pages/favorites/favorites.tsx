import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useMain } from '../../context/mainContext';
import { IData } from '../../interfaces';
import { ListItem } from '../../components/all-views/list/list.styles';
import { RenderAllView } from '../../utils/render-view';

const GET_POKEMONS = gql`
  query { pokemons(query: { limit: 5, offset: 0 }) { 
    edges {
        name,
        image,
        id,
        resistant,
        isFavorite,
      }
    }
  }
`;

export const Favorites = () => {
  const { allView, favorites, filteredFavorites }: any = useMain();

  if (favorites.length <= 0) {
    return <>No favorites</>
  }

  return (
    <>
      {RenderAllView[allView](filteredFavorites || favorites)}
    </>
  )
}
