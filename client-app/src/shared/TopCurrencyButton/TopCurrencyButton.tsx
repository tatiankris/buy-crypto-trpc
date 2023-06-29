import style from './TopCurrencyButton.module.scss';
import { abbrNum } from '../../processes/abbrNum';

type PropsType = {
  onClick: () => void;
  item: number;
  name: string;
  priceUsd: string;
};

function TopCurrencyButton({ onClick, item, name, priceUsd }: PropsType) {
  const price = abbrNum(+priceUsd, 2);
  return (
    <div onClick={onClick} className={`${style.topCrypto__Item} ${style[`topCrypto__${item}`]}`}>
      <span>{name}</span> <b>{`${String(price.number).slice(0, 4)}${price.abb}$`}</b>
    </div>
  );
}

export default TopCurrencyButton;
