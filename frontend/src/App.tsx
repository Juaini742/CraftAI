import { useEffect } from "react";
import { RootRoute } from "./router";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return <RootRoute />;
}

export default App;
