import { useEffect, useState } from "react"
import {ThemeBtn, Card} from "./components/index"
import {ThemeProvider} from "./Contexts/Theme"

function App() {
  const [theme, setTheme] = useState('light');

  const lightTheme = () =>{
    setTheme("light");
  }

  const darkTheme = () => {
    setTheme("dark")
  }


  // change in theme
  useEffect(() => {
    document.querySelector("html").setAttribute("data-bs-theme", theme);
  }, [theme]);
  

  return (
    <ThemeProvider value={{theme, lightTheme, darkTheme}}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
