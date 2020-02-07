export default function handleIncrement(count, setPage) {
  const maxPageNum = Math.floor(count / 25);
  setPage(page => Math.min(page + 1, maxPageNum));
}
