// import { Item } from "./pages/item";
// import { ItemList } from "./pages/item/item-list";
// import { ItemDetail } from "./pages/item/item-detail";
import { useRoutes } from "react-router-dom";

export const Routes = () => {
  const element = useRoutes([
    { 
      path: "/",
      element: <Item />,
      children: [
        {
          index: true,
          element: <ItemList />,
        },
      ],
    },
    {
      path: "detail/:slug",
      element: <ItemDetail />,
    },
  ]);
  return element;
}
