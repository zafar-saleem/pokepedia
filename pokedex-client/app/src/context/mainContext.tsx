import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

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

const FAVORITE = gql`
  mutation makeFavorite($id: ID!) {
    favoritePokemon(id: $id) {
      name,
      id
    }
  }
`;

const UN_FAVORITE = gql`
  mutation makeUnFavorite($id: ID!) {
    unFavoritePokemon(id: $id) {
      name,
      id
    }
  }
`;

// Create Main Context
export const MainContext = React.createContext({ });

// export useMain to use as Context.
export const useMain = () => React.useContext(MainContext);

// Main provider.
const MainProvider = ({ children }: React.PropsWithChildren) => {
  const { loading, error, data, refetch } = useQuery(GET_POKEMONS);
  const [allView, updateAllView] = React.useState("grid");
  const [favorite] = useMutation(FAVORITE);
  const [unFavorite] = useMutation(UN_FAVORITE);

  const makeFavorite = React.useCallback((id: string) => {
    favorite({ variables: { id: id } });
    refetch();
  }, [data]);

  const makeUnFavorite = React.useCallback((id: string) => {
    unFavorite({ variables: { id: id } });
    refetch();
  }, [data]);

  return (
    <MainContext.Provider
      value={{
        data,
        loading,
        error,
        allView,
        updateAllView,
        makeFavorite,
        makeUnFavorite,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
