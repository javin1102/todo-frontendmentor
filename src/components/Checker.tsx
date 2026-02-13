const Checker = ({
  onClick,
  isChecked,
}: {
  onClick?: () => void;
  isChecked: boolean;
}) => {
  const checkedStyle = isChecked
    ? "bg-linear-to-br from-primary-gradient-1 to-primary-gradient-2"
    : "";
  const checkMark = (
    <img
      src="/src/assets/images/icon-check.svg"
      alt="check mark"
      className="h-3 object-cover absolute top-1/2 left-1/2 -translate-1/2"
    />
  );
  return (
    <div
      className={`w-6 h-6 rounded-full outline-[0.5px] outline-gray-300 cursor-pointer ${checkedStyle} relative select-none`}
      onClick={() => {
        if (onClick != null) {
          onClick();
        }
      }}
    >
      {isChecked && checkMark}
    </div>
  );
};
export default Checker;
