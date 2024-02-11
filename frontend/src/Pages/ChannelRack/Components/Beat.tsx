import { useAppSelector } from "./../../../Store/hooks";
import { ArrangementType } from "../../../../types";
import { currentBeat } from "./../../../Store/playSlice";

const Beat: React.FC<{ i: number; arrangement: ArrangementType[]; soundName: string; soundPath: string }> = ({ i, arrangement, soundName, soundPath }) => {
    const hasSound = arrangement.some((item) => item.index === i && item.sound === soundName && item.soundPath === soundPath);
    const currentIndex = useAppSelector(currentBeat)

    return (
        <div
            className={`w-4 h-6 border-black border-2 rounded-md border-opacity-50 flex flex-col transition-all  duration-100 justify-end 
            ${hasSound ? 'bg-red-300' : i === 0 || i % 4 === 0 ? 'bg-neutral-300' : 'bg-neutral-500'} 
            ${currentIndex === i && i % 4 || i === 0 ? 'bg-opacity-70' 
            : currentIndex === i ? 'bg-opacity-40' : 'bg-opacity-100'}
            hover:shadow-white hover:shadow-lg hover:bg-opacity-80`
            }
        >
            <div className="w-full"></div>
        </div>
    );
};

export default Beat