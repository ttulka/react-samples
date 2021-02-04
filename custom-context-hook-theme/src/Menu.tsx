import Button from "./components/Button";
import useTheme from "./hooks/useTheme";

const Menu = () => {
  const {updateTheme} = useTheme();

  const lighten = () => updateTheme("light");
  const darken = () => updateTheme("dark");

  return (
    <div>
      <nav>
        <a onClick={lighten}>🌝</a>
        <a onClick={darken}>🌚</a>
      </nav>
      <Button label="Home" />
      <Button label="About" />
    </div>
  );
}

export default Menu;
