import style from './Pagination.module.scss';
import PageButton from '../../shared/PageButton/PageButton';
type PropsType = { page: number; setPage: (num: number) => void; itemsCount: number };
function Pagination({ setPage, itemsCount, ...props }: PropsType) {
  const page = props.page;
  const pages = Array.from({ length: Math.ceil(itemsCount / 6) }, (_, index) => index + 1);
  const firstPages = pages.slice(0, 4);
  const currentPages = pages.slice(page - 1, page + 2);
  const lastPages = pages.slice(-3);
  const handleSetPage = (page: number) => {
    setPage(page);
  };
  return (
    <div id={'pagination'} className={style.pagination}>
      <PageButton
        disabled={page < 1}
        onClick={() => {
          page > 0 && handleSetPage(page - 1);
        }}
      >
        ⬅
      </PageButton>
      {page < 3 &&
        firstPages.map((p) => (
          <PageButton
            onClick={() => {
              handleSetPage(p - 1);
            }}
            active={p === page + 1}
            key={p}
          >
            {p}
          </PageButton>
        ))}
      {page > 2 && (
        <PageButton
          onClick={() => {
            handleSetPage(0);
          }}
          active={1 === page + 1}
        >
          1
        </PageButton>
      )}
      {page < pages.length - 3 && <span>...</span>}
      {page > 2 &&
        page < pages.length - 3 &&
        currentPages.map((p) => (
          <PageButton
            onClick={() => {
              handleSetPage(p - 1);
            }}
            active={p === page + 1}
            key={p}
          >
            {p}
          </PageButton>
        ))}
      {page > 2 && <span>...</span>}
      {page < pages.length - 3 && (
        <PageButton
          onClick={() => {
            handleSetPage(pages.length - 1);
          }}
          active={pages.length === page + 1}
        >
          {pages.length}
        </PageButton>
      )}
      {page > pages.length - 4 &&
        pages.length > 3 &&
        lastPages.map((p) => (
          <PageButton
            onClick={() => {
              handleSetPage(p - 1);
            }}
            active={p === page + 1}
            key={p}
          >
            {p}
          </PageButton>
        ))}
      <PageButton
        disabled={page + 1 === pages.length}
        onClick={() => {
          page < pages.length && handleSetPage(page + 1);
        }}
      >
        ➡
      </PageButton>
    </div>
  );
}

export default Pagination;
