interface ButtonIconProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function ButtonIcon({ label, icon, onClick, disabled, className }: ButtonIconProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label && <span className="ml-2">{label}</span>}
    </button>
  );
}

export default ButtonIcon;
