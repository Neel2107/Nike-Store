import {heroapi, popularsales, toprateslaes} from "./data/data"
import { Hero, Sales } from "./components"
function App() {

  return (
    < >
<main>
  <Hero heroapi= {heroapi}/>
  <Sales endpoint =  {popularsales}/>
  <Sales endpoint =  {toprateslaes}/>
  </main>
    </>
  )
}

export default App
