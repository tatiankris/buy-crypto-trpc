import { CurrenciesType } from '../../../../server/src/api/api';
import style from './TopCurrenciesList.module.scss';
import { useNavigate } from 'react-router-dom';
import TopCurrencyButton from '../../shared/TopCurrencyButton/TopCurrencyButton';
type PropsType = {
  currencies: CurrenciesType;
  handleClose?: () => void;
};

function TopCurrenciesList({ currencies, handleClose }: PropsType) {
  const navigate = useNavigate();

  const handleCurrencyPage = (i: number) => {
    currencies && navigate(`currencies/${currencies[i].id}`);
    handleClose && handleClose();
  };
  return (
    <div className={style.topCrypto__Box}>
      {currencies &&
        currencies.slice(0, 3).map((el, i) => {
          return (
            <TopCurrencyButton
              key={el.id}
              onClick={() => handleCurrencyPage(i)}
              name={el.name}
              priceUsd={el.priceUsd}
              item={i}
            />
          );
        })}
      {/*<div*/}
      {/*  onClick={() => handleCurrencyPage(0)}*/}
      {/*  className={`${style.topCrypto__Item} ${style.topCrypto__Item1}`}*/}
      {/*>*/}
      {/*  <span>{currencies[0].name}</span> <b>{currencies[0].priceUsd.slice(0, 7)}</b>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  onClick={() => handleCurrencyPage(1)}*/}
      {/*  className={`${style.topCrypto__Item} ${style.topCrypto__Item2}`}*/}
      {/*>*/}
      {/*  <span>{currencies[1].name}</span> <b>{currencies[1].priceUsd.slice(0, 7)}</b>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  onClick={() => handleCurrencyPage(2)}*/}
      {/*  className={`${style.topCrypto__Item} ${style.topCrypto__Item3}`}*/}
      {/*>*/}
      {/*  <span>{currencies[2].name}</span> <b>{currencies[2].priceUsd.slice(0, 7)}</b>*/}
      {/*</div>*/}
    </div>
  );
}

export default TopCurrenciesList;
