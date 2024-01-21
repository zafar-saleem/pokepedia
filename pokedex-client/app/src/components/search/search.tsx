import { useMain } from "../../context/mainContext";
import * as Styles from "./search.styles";

const Search = () => {
  // @ts-ignore
  const { data, filterPokemonsByName } = useMain();

  return (
    <Styles.Search type="text" name="search" placeholder="Search" onChange={filterPokemonsByName} />
  )
}

export default Search;
