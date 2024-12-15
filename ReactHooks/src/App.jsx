import EffectChangeVideo from "./Components/EffectChangeVideo/EffectChangeVideo"
import FirstState from "./Components/FirstState/FirstState"
import SecondState from "./Components/FirstState/SecondState/SecondState"
import PracticeState from "./Components/PracticeState"
import ProjectFirst from "./Components/ProjectFirst/ProjectFirst"
import SecPractice from "./Components/SecPractice"
import StateCounter from "./Components/StateCounter/StateCounter"
import UseEffect from "./Components/UseEffect/UseEffect"
import VideoChange from './Components/VideoChange/VideoChange'
import UseRefHooks from './Components/UseRefHooks/UseRefHooks'
import UseRefSec from "./Components/UseRefSec/UseRefSec"
import UseMemo from "./Components/UseMemo/UseMemo"


const App = () => {
  return (
    <div>
      <EffectChangeVideo />
      <hr />
      <VideoChange />
      <hr />
      <FirstState />
      <hr />
      <SecondState />
      <hr />
      <StateCounter />
      <hr />
      <PracticeState />
      <hr />
      <SecPractice />
      <hr />
      <UseEffect />
      <hr />
      <ProjectFirst />
      <hr />
      <UseRefHooks />
      <hr />
      <UseRefSec />
      <hr />
      <UseMemo/>
      
      
    </div>
  )
}

export default App
