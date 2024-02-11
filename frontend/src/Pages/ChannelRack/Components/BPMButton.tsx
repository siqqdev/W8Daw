import { useAppDispatch, useAppSelector } from '../../../Store/hooks'
import { selectedBPM, setBPM } from '../../../Store/settingsSlice'

const BPMButton = () => {

const dispatch = useAppDispatch()
const BPM = useAppSelector(selectedBPM)

  return (
    <div className='border rounded-lg flex justify-center items-center text-center w-auto'>
        <input 
        type="number" 
        value={BPM.toString()}
        onChange={e => dispatch(setBPM(parseInt(e.target.value)))}
        className='w-auto'
        />
    </div>
  )
}

export default BPMButton