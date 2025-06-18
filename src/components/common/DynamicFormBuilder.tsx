import InputField from "./InputField";
import TextArea from "./TextArea";

interface DynamicFormBuilderProps {
  label: string;
  type: string;
  name: string;
}

const DynamicFormBuilder = (props: DynamicFormBuilderProps) => {
  const { label, type, name } = props;

  if (type === "text" || type === "email" || type === "tel") {
    return (
      <>
        <InputField type={type} label={label} name={name} />
      </>
    );
  }

  if (type === "textarea") {
    return (
      <div className="w-full">
        <TextArea label={label} name={name} />
      </div>
    );
  }

  return null;
};

export default DynamicFormBuilder;
