// components
import Mains from "./mains";
// contexts
import { ProvideLocale } from "./contexts/LocaleContexts";
// others
import "./App.css";
import "antd/dist/antd.css";

const App = () => (
  <div className="App">
    <ProvideLocale>
      <Mains />
    </ProvideLocale>
  </div>
);

export default App;
