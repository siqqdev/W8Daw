import { useState } from "react"
import { useAppSelector } from "../../../Store/hooks"
import { selectedBars, selectedSoundsArray } from "../../../Store/settingsSlice"
import Beats from "./Beats"
import DeleteSoundButton from "./DeleteSoundButton"

const Pattern = () => {
  const bars = useAppSelector(selectedBars) * 2
  const soundsArray = useAppSelector(selectedSoundsArray);

  const [hoveredSound, setHoveredSound] = useState<string | null>(null);

  return (
    <div className="flex justify-start">
      <div className="flex flex-col">
        {soundsArray.map((sound, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mt-2"
            
          >
            <div
              className={`text-wrap p-2 w-20 border-white border text-center uppercase 
                          border-opacity-40 rounded-md text-white font-bold
                          transition-all cursor-pointer ${hoveredSound === sound.soundName ? 'bg-red-400' : ''}
                          flex justify-center`}
              onMouseEnter={() => setHoveredSound(sound.soundName)}
              onMouseLeave={() => setHoveredSound(null)}
            >
              {hoveredSound === sound.soundName ? (
                <DeleteSoundButton soundPath={sound.soundPath}/>
              ) : (
                <p>{sound.soundName}</p>
              )}
            </div>

            <div>
              <Beats key={index} count={bars} soundName={sound.soundName} soundPath={sound.soundPath}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pattern;
