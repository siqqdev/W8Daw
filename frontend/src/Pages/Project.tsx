import ChannelRack from './ChannelRack/ChannelRack'
import ProjectSettings from './ChannelRack/Components/ProjectSettings/ProjectSettings'

const Project = () => {
// @ts-ignore
  console.log(window.Telegram.WebApp.initData)
  return (
        <div className='h-screen flex justify-center bg-neutral-900 overflow-hidden flex-col gap-6'>
            <div className="flex justify-center items-center">
                <ProjectSettings />
            </div>

            <div className="flex justify-center items-center">
                <ChannelRack />
            </div>
        </div>
  )
}

export default Project
