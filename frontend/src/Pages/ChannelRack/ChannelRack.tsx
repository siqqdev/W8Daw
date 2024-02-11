import BarsCount from "./Components/BarsCount"
import BPMButton from "./Components/BPMButton"
import Pattern from "./Components/Pattern"
import PlayButton from "./Components/PlayButton"

const ChannelRack = () => {
  return (
    <div className="bg-neutral-500 h-screen">
      <div className="p-3 flex justify-center gap-4">
        <PlayButton />
        <BPMButton/>
        <BarsCount />
      </div>

      <div>
        <Pattern />
      </div>
    </div>
  )
}

export default ChannelRack