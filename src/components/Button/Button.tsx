import React, { FC } from "react";
import { ButtonTheme } from "../../types/types";
import "./Button.scss";

interface ButtonProps {
    title: string;
    theme?: ButtonTheme;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, theme = ButtonTheme.GREEN, onClick }) => {
    return <button className={`button ${theme}`} onClick={onClick}>{title}</button>;
};

export default Button;
