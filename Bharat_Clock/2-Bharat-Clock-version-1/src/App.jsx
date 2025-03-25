import Header from "./components/Header"
import Interface from "./components/Interface"
import Regions from "./components/Regions"
import TimeStamp from "./components/TimeStamp"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const regions = ['India','Brazil','Columbia','Canada','US','Toronto','Mexico'];

  return (
    <>
      <center>

        <Header/>
        <Interface/>
        <TimeStamp/>
        <Regions regions={regions}/>

      </center>
    </>
  )
}

export default App
