import { useAppSelector } from "../../../Store/hooks"
import { selectedBars } from "../../../Store/settingsSlice"
import Beats from "./Beats"

const Pattern = () => {
  
const bars = useAppSelector(selectedBars) * 2


  return (
    <div className="flex justify-start">
      <div className="flex flex-col text-white font-bold">
        Kick <Beats count={bars} sound="kick"/>
        Hi Hat <Beats count={bars} sound="hihat"/>
        Snare <Beats count={bars} sound="snare"/>
        Clap <Beats count={bars} sound="clap"/>
      </div>
    </div>
  )
}

export default Pattern