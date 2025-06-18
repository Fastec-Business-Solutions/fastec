interface TextAreaProps {
  label: string;
  name: string;
}

const TextArea = ({ label, name }: TextAreaProps) => {
  return (
    <div className="font-family-inter font-medium">
      <label className="text-sm font-medium block mb-2 text-white/90">
        {label}
      </label>
      <textarea
        className="input-field h-26 md:h-20 max-sm:h-18 resize-none"
        name={name}
      />
    </div>
  );
};

export default TextArea;
