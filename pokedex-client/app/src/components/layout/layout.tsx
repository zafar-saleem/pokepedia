import { Outlet } from "react-router-dom";
import * as Styles from "./layout.styles";
import Header from "../header";


export const Layout = () => {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  )
};
