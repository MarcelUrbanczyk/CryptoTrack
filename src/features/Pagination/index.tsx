import { Arrow, Button, Pages, Wrapper } from "./styled";
interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <Wrapper>
      <Button
        onClick={() => {
          setPage(1);
        }}
      >
        <Arrow $rotated={true} />
        <Arrow $rotated={true} />
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <Arrow $rotated={true} />
      </Button>
      <Pages>
        Page <strong>{page}</strong> of <strong>250</strong>
      </Pages>
      <Button
        disabled={page === 250}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <Arrow />
      </Button>
      <Button
        onClick={() => {
          setPage(250);
        }}
      >
        <Arrow />
        <Arrow />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
