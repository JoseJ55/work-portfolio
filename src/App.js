import { useEffect, useState } from 'react';
import './App.css';

import Home from './pages/Home';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App">
      <Home offset={offsetY}/>
    </div>
  );
}

export default App;
