import { TrashIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, useAppSelector } from './../.././../Store/hooks'
import { currentArrangement, removeArrangementItem } from './../../../Store/playSlice'

const ClearAllButoon = () => {

const dispatch = useAppDispatch()
const arrangement = useAppSelector(currentArrangement)


const handleClearButton = () => {
    arrangement.forEach(item => {
        dispatch(removeArrangementItem(item.index));
    });
};


  return (
    <button 
    onClick={handleClearButton}
    className='transition-all active:scale-75'>
        <TrashIcon className='w-12 h-12' color='gray' />
    </button>
  )
}

export default ClearAllButoon