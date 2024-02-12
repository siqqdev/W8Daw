import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const SaveProjectButton = () => {
  return (
    <button className='active:scale-75 transition-all'>
        <ArrowDownTrayIcon className='w-8 h-8' fill='#d4d4d4' />
    </button>
  )
}

export default SaveProjectButton