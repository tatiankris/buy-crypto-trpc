import style from './PageButton.module.scss';
type PropsType = {
  disabled?: boolean;
  onClick: () => void;
  children: string | number;
  active?: boolean;
};
function PageButton({ disabled, onClick, children, active }: PropsType) {
  return (
    <button
      disabled={disabled ? disabled : false}
      onClick={onClick}
      className={active ? style.active : ''}
    >
      {children}
    </button>
  );
}

export default PageButton;
