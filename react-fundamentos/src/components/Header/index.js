import React, {useContext} from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Title from "../Title";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";


export default function Header(props) {
 const { onToggleTheme } = useContext(ThemeContext);
  
 return (
  <>
    <Title>{props.title}</Title>
    <Button onClick={onToggleTheme}>
      Mudar Tema
    </Button>
    {props.children}
  </>
 ) 
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}

Header.defaultProps = {
  title: `JStack's Blog`,
}