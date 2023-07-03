import style from './PortfolioButton.module.scss';
import IconPortfolio from '../../assets/wallet.svg';
import { useLocation, useNavigate } from 'react-router-dom';

function PortfolioButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOpenModal = () => {
    navigate('portfolio', { state: { background: location } });
  };
  return (
    <button id={'portfolioButton'} onClick={handleOpenModal} className={style.portfolioButton}>
      <img src={IconPortfolio} alt="icon" style={{ height: '40px', width: '40px' }} />
    </button>
  );
}

export default PortfolioButton;
