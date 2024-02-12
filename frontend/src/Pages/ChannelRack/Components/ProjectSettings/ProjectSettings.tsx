import LoadProjectButton from "./LoadProjectButton";
import ProjectNameInput from "./ProjectNameInput";
import SaveProjectButton from "./SaveProjectButton";

const ProjectSettings = () => {


  return (
    <div className="flex justify-center items-center">
        <LoadProjectButton />
        <ProjectNameInput />
        <SaveProjectButton />
    </div>
  );
};

export default ProjectSettings;
