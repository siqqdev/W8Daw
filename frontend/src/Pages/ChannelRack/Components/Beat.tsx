import { ArrangementType } from "../../../../types";

const Beat: React.FC<{ i: number; arrangement: ArrangementType[]; sound: string }> = ({ i, arrangement, sound }) => {
    const hasSound = arrangement.some((item) => item.index === i && item.sound === sound);

    return (
        <div
            className={`w-4 h-6 border-black border-2 rounded-md border-opacity-50 flex flex-col justify-end ${
                i === 0 || i % 4 === 0 ? 'bg-neutral-400' : 'bg-neutral-200'
            } ${hasSound ? 'bg-red-300' : ''} transition-all`}
        >
            <div className="w-full"></div>
        </div>
    );
};

export default Beat