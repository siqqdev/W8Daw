import { useAppDispatch, useAppSelector } from '../../../Store/hooks'
import { selectedBPM, setBPM } from '../../../Store/settingsSlice'

const BPMButton = () => {

const dispatch = useAppDispatch()
const BPM = useAppSelector(selectedBPM)

  return (
        <input 
        type="number" 
        value={BPM.toString()}
        onChange={e => dispatch(setBPM(parseInt(e.target.value)))}
        className='rounded-md bg-neutral-500 text-white text-center'
        />
  )
}

export default BPMButton