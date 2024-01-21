import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { PokemonItems } from "./pages/pokemon-items";
import { PokemonDetail } from "./pages/pokemon-detail";
import { Favorites } from "./pages/favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PokemonItems />} />
          <Route path={`favorites`} element={<Favorites />} />
        </Route>
        <Route path={`/detail/:slug`} element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
