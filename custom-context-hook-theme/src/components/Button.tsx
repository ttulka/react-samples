import useTheme from "../hooks/useTheme";
import "./Button.css";

const Button = (prop: {label: string}) => {
  const {theme} = useTheme();
  return (
    <button className={theme}>
      {prop.label}
    </button>
  )
}

export default Button;
