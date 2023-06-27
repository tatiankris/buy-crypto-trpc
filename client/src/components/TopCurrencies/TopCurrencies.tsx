import React, { useMemo, useState } from 'react';
import style from './TopCurrencies.module.scss';
import { useGetAllCurrencies } from '../../processes/hooks/useGetAllCurrencies';
import ModalContainer from '../../shared/ModalContainer/ModalContainer';
import { useResize } from '../../processes/hooks/useResize';
import TopCurrenciesList from './TopCurrenciesList';

function TopCurrencies() {
  const { data } = useGetAllCurrencies(0);
  const currencies = useMemo(() => data?.data, [data?.data]);
  const windowSize = useResize();

  const [openTop, setOpenTop] = useState(false);
  const handleOpenTop = () => {
    setOpenTop(true);
  };
  const handleCloseTop = () => {
    setOpenTop(false);
  };
  if (!currencies) {
    return <div>Loading...</div>;
  }
  return (
    <div className={style.topCrypto}>
      {windowSize > 700 ? (
        <TopCurrenciesList currencies={currencies} />
      ) : (
        <>
          <div
            onClick={handleOpenTop}
            className={`${style.topCrypto__Item} ${style.topCrypto__Button}`}
          >
            Top 3
          </div>
          {openTop && (
            <ModalContainer handleClose={handleCloseTop} nameText={'Top 3 Currencies'}>
              <TopCurrenciesList currencies={currencies} handleClose={handleCloseTop} />
            </ModalContainer>
          )}
        </>
      )}
    </div>
  );
}

export default TopCurrencies;
