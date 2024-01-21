import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { debounce } from "lodash";

const GET_POKEMONS = gql`
  query { 
    pokemons(query: { limit: 50, offset: 0 }) { 
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
  const [filteredContents, updateFilteredContent] = React.useState({});
  const [favorites, updateFavorites] = React.useState<any>([]);
  const [filteredFavorites, updateFilteredFavorites] = React.useState<any>();
  let filtered: any = { pokemons: { edges: [] }};
  // const { pathname } = useLocation();

  React.useEffect(() => {
    // @ts-ignore
    if (data && "pokemons" in data) {
      filtered.pokemons.edges = data.pokemons.edges.filter((item: any) => item.isFavorite && item);
      updateFavorites(filtered);
    }
  }, [data]);

  React.useEffect(() => {
    updateFilteredContent(data);
  }, [data]);

  const makeFavorite = React.useCallback((id: string) => {
    favorite({ variables: { id: id } });
    refetch();
  }, [data]);

  const makeUnFavorite = React.useCallback((id: string) => {
    unFavorite({ variables: { id: id } });
    refetch();
  }, [data]);
 
  const filterPokemonsByName = debounce((event: any) => {
    let filtered = { pokemons: { edges: []}}
    if (window.location.pathname === "/favorites") {
      // @ts-ignore
      filtered.pokemons.edges = favorites?.pokemons?.edges?.filter((item) => {
        if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          return item;
        }
      });  
      return updateFilteredFavorites(filtered);
    }
    // @ts-ignore
    filtered.pokemons.edges = data?.pokemons?.edges?.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return item;
      }
    });

    return updateFilteredContent(filtered);
  }, 300);

  return (
    <MainContext.Provider
      value={{
        data,
        loading,
        error,
        allView,
        filteredContents,
        updateAllView,
        makeFavorite,
        makeUnFavorite,
        filterPokemonsByName,
        favorites,
        filteredFavorites,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
