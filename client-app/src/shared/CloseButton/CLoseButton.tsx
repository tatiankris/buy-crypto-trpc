import style from './CLoseButton.module.scss';

type PropsType = {
  handleClose: () => void;
};
function CLoseButton({ handleClose, ...props }: PropsType) {
  return (
    <button id={'closeButton'} onClick={handleClose} className={style.close}>
      x
    </button>
  );
}

export default CLoseButton;
