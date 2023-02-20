import {heroapi, popularsales, toprateslaes} from "./data/data"
import { FlexContent, Hero, Sales, highlight, sneaker } from "./components"
function App() {

  return (
    < >
<main className="flex flex-col gap-16 relative ">
  <Hero heroapi= {heroapi}/>
  <Sales endpoint =  {popularsales} ifExists/>
  <FlexContent endpoint={highlight}/>
  <Sales endpoint =  {toprateslaes}/>
  <FlexContent endpoint={sneaker}/>
  </main>
    </>
  )
}

export default App
