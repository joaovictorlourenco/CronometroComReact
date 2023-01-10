import Cronometro from "./Components/Cronometro"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{

    background-color: #252525;

  }
`

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Cronometro/>
    </div>
  )
}

export default App
