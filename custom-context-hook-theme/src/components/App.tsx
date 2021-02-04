import Menu from "../Menu";
import Content from "./Content";
import Footer from "./Footer";
import {ThemeProvider} from "../hooks/useTheme";

const App = () => {
  return (
    <ThemeProvider value="dark">
      <Menu />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
