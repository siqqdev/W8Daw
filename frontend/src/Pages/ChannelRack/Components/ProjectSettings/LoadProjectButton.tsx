import { DocumentPlusIcon } from '@heroicons/react/24/solid'

const LoadProjectButton = () => {
  return (
    <button className='active:scale-75 transition-all'>
        <DocumentPlusIcon className='w-8 h-8' fill='#d4d4d4'/>
    </button>
  )
}

export default LoadProjectButton