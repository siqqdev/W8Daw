import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../../Store/hooks"
import { selectedBars, setBars } from "../../../Store/settingsSlice"

const BarsCount = () => {

const dispatch = useAppDispatch()
const bars = useAppSelector(selectedBars)

const handleBarsChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const selectedBars = parseInt(e.target.value)
  dispatch(setBars(selectedBars))
}
  return (
    <select name="bars" id="bars" value={bars} onChange={e => handleBarsChange(e)}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="32">32</option>
    </select>
  )
}

export default BarsCount