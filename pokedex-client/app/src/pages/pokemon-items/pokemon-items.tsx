import { useMain } from "../../context/mainContext"
import { RenderAllView } from "../../utils/render-view";

export const PokemonItems = () => {
  const { data, loading, error, allView }: any = useMain();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {RenderAllView[allView]({ ...data })}
    </>
  )
}
