import AddSoundButton from "./Components/AddSoundButton"
import BarsCount from "./Components/BarsCount"
import BPMButton from "./Components/BPMButton"
import ClearAllButoon from "./Components/ClearAllButoon"
import Pattern from "./Components/Pattern"
import PlayButton from "./Components/PlayButton"

const ChannelRack = () => {
  return (
    <div className="bg-neutral-700 p-10 rounded-lg">
      <div className="flex justify-center gap-4">
        <PlayButton />
        <BPMButton/>
        <BarsCount />
        <ClearAllButoon />
        <AddSoundButton />
      </div>

      <div className="mt-10 flex justify-center">
        <Pattern />
      </div>
    </div>
  )
}

export default ChannelRack