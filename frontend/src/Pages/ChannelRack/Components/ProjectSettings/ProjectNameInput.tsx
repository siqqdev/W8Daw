import { useState } from "react";

const ProjectNameInput = () => {
  const [projectName, setProjectName] = useState<string>('Untitled Project');

  const handleProjectNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  return (
    <div>
        <input 
        type="text" 
        value={projectName}
        onChange={e => handleProjectNameInput(e)}
        className="text-white text-2xl bg-neutral-900 text-center p-2"
        />
    </div>
  );
};

export default ProjectNameInput;
