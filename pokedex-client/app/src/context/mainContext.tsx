import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { debounce } from "lodash";

export interface IEdges {
  id: string;
  image: string;
  isFavorite: boolean;
  name: string;
  resistant: string[];
}

interface IPokemons {
  edges: IEdges[];
}

export interface IContents {
  pokemons: IPokemons;
}

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

let filtered: IContents = { pokemons: { edges: [] }};

// Main provider.
const MainProvider = ({ children }: React.PropsWithChildren) => {
  const { loading, error, data, refetch } = useQuery(GET_POKEMONS);
  const [favorite] = useMutation(FAVORITE);
  const [unFavorite] = useMutation(UN_FAVORITE);
  const [allView, updateAllView] = React.useState<string>("grid");
  const [filteredContents, updateFilteredContent] = React.useState<IContents>();
  const [favorites, updateFavorites] = React.useState<IContents | IContents[]>([]);
  const [filteredFavorites, updateFilteredFavorites] = React.useState<IContents>();

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
 
  const filterPokemonsByName = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
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
