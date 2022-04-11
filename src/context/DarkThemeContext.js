import { createContext } from "react"

export default function GrandChildComponent() {
    const { theme, setTheme } = useContext(ThemeContext)
  
    return (
      <>
        <div>The theme is {theme}</div>
        <button onClick={() => setTheme('light')}>
          Change To Light Theme
        </button>
      </>
    )
  }


  