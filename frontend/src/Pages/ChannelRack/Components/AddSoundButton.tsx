import { PlusIcon } from '@heroicons/react/24/solid';
import { useAppDispatch } from './../../../Store/hooks';
import { setNewSound } from './../../../Store/settingsSlice';
import { useState } from 'react';

const AddSoundButton = () => {
  const dispatch = useAppDispatch();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [inputSoundName, setInputSoundName] = useState<string>('');
  const [inputSoundPath, setInputSoundPath] = useState<string>('');

  const handleAddSoundButton = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleAddSoundPressed = () => {
    dispatch(setNewSound({ soundName: inputSoundName, soundPath: inputSoundPath }));
    setIsModalOpened(false);
    console.log({ soundName: inputSoundName, soundPath: inputSoundPath });
    
  };

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file ? setInputSoundPath(URL.createObjectURL(file)) : null
    console.log(inputSoundPath);
    
  };
  

  return (
    <div className='relative'>
      <button className='transition-all active:scale-75' onClick={handleAddSoundButton}>
        <PlusIcon className={`w-12 h-12 ${isModalOpened ? 'rotate-45' : 'rotate-0'} transition-all`} fill='#d4d4d4' />
      </button>

      {isModalOpened && (
        <div className={`bg-neutral-600 z-50 fixed p-5 rounded-lg ${isModalOpened ? 'opacity-100' : 'opacity-0'} transition-all`}>
          <div>
            <p className='text-neutral-300'>Sound Name</p>
            <input type="text" className='rounded-md bg-neutral-400 text-neutral-900 p-1 mt-1' value={inputSoundName} onChange={(e) => setInputSoundName(e.target.value)} />
          </div>

          <div className='mt-2'>
            <p className='text-neutral-300'>Upload File</p>
            <input onChange={handleInputFileChange} type="file" className='text-neutral-600 rounded-md mt-1' />
          </div>

          <div>
            <button onClick={handleAddSoundPressed} className='bg-neutral-700 p-2 mt-5 rounded-md text-neutral-300'>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSoundButton;
