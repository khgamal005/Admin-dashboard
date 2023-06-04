import { useContext } from "react";

import { ThemeContext } from "../ThemeContext";
import "./Main.css";
import Header from "../componant/HeaderTemplate/Header";
import Content from '../Content/Content'

const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header/>
      <Content/>
     
    </div>
  );
};

export default Main;
