import { useQuery, gql } from '@apollo/client';
import * as Styles from "./types.styles";
import { useMain } from '../../context/mainContext';
import { IData } from '../../interfaces';

const GET_TYPES = gql`
  query { pokemonTypes }
`;

const Types = () => {
  const { loading, error, data: types } = useQuery(GET_TYPES);
  const { data }: IData = useMain();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Styles.Types>
      <option>Type</option>
      {
        types && types?.pokemonTypes?.map((type: string, index: Number) => (
          <option value={type} key={`${type}-${index}`}>{type}</option>
        ))
      }
    </Styles.Types>
  )
}

export default Types;
