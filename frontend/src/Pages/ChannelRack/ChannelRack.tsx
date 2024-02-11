import BarsCount from "./Components/BarsCount"
import BPMButton from "./Components/BPMButton"
import Pattern from "./Components/Pattern"
import PlayButton from "./Components/PlayButton"

const ChannelRack = () => {
  return (
    <div className="bg-neutral-700 p-10 rounded-lg">
      <div className="flex justify-center gap-4">
        <PlayButton />
        <BPMButton/>
        <BarsCount />
      </div>

      <div className="mt-10">
        <Pattern />
      </div>
    </div>
  )
}

export default ChannelRack