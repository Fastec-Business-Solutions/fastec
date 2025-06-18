interface InputFieldProps {
  label: string;
  type: string;
  name: string;
}

const InputField = ({ label, type, name }: InputFieldProps) => {
  return (
    <div className="font-family-inter font-medium">
      <label className="text-sm font-medium block mb-2 text-white/90">
        {label}
      </label>
      <input
        type={type}
        className="input-field h-14 md:h-12 max-sm:h-10"
        name={name}
      />
    </div>
  );
};

export default InputField;
