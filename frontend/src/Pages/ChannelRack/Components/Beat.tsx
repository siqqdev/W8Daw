import { useAppSelector } from "./../../../Store/hooks";
import { ArrangementType } from "../../../../types";
import { currentBeat } from "./../../../Store/playSlice";

const Beat: React.FC<{ i: number; arrangement: ArrangementType[]; sound: string }> = ({ i, arrangement, sound }) => {
    const hasSound = arrangement.some((item) => item.index === i && item.sound === sound);
    const currentIndex = useAppSelector(currentBeat)

    return (
        <div
            className={`w-4 h-6 border-black border-2 rounded-md border-opacity-50 flex flex-col justify-end ${
                i === 0 || i % 4 === 0 ? 'bg-yellow-300' : 'bg-neutral-500'
            } ${hasSound ? 'bg-red-400' : ''} transition-all ${currentIndex === i && i % 4 || i === 0 ? 'bg-opacity-70' : currentIndex === i ? 'bg-opacity-40' : 'bg-opacity-100'}`}
        >
            <div className="w-full"></div>
        </div>
    );
};

export default Beat