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
  }
`;

export const Favorites = () => {
  const [favorites, updateFavorites] = React.useState<any>([]);
  // const { data, allview }: any = useMain();
  const { data, allView }: any = useMain();
  let filtered: any = { pokemons: { edges: [] }};

  React.useEffect(() => {
    // @ts-ignore
    if (data && "pokemons" in data) {
      filtered.pokemons.edges = data.pokemons.edges.filter((item: any) => item.isFavorite && item);
      updateFavorites(filtered);
    }
  }, [data]);

  if (favorites.length <= 0) {
    return <>No favorites</>
  }

  return (
    <>
      {RenderAllView[allView](favorites)}
    </>
  )
}
