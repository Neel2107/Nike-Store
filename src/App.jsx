import {heroapi} from "./data/data"
import { Hero, Sales } from "./components"
function App() {

  return (
    < >
<main>
  <Hero heroapi= {heroapi}/>
  <Sales/>
  </main>
    </>
  )
}

export default App
