import { useCallback, useState } from "react";

// Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

// Components
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setIsSidePanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setIsSidePanelOpen(false);
}, [])

  return (
    <>
      <SidePanel visible={isSidePanelOpen} handleClosePanel={handleClosePanel} />
      <Header handleBurgerClick={handleBurgerClick} />
      <Home />
      <Projects />
    </>
  )
}

export default App;
