interface InputFormProps {}

const InputForm: React.FC<InputFormProps> = () => {
  return (
    <input
      className="rounded-md p-2 h-12 w-full"
      placeholder="write a message"
    />
  );
};

export default InputForm;
