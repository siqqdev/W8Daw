import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { useAppDispatch } from './../../../Store/hooks'
import { deleteSound } from './../../../Store/settingsSlice'

const DeleteSoundButton: FC<{ soundPath: string }> = ({ soundPath }) => {

const dispatch = useAppDispatch()

const handleDeleteSound = () => {
    dispatch(deleteSound(soundPath))
}

  return (
    <button onClick={() =>  handleDeleteSound()}>
        <XMarkIcon className="w-6 h-6" color="white" />
    </button>
  )
}

export default DeleteSoundButton