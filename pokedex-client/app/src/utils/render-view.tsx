import GridView from "../components/all-views/grid";
import ListView from "../components/all-views/list";

export const RenderAllView: any = {
  "grid": ({ ...props }) => <GridView {...props} />,
  "list": ({ ...props }) => <ListView {...props} />,
}