export default function handleIncrement(count, setPage) {
  const maxPageNum = Math.max(Math.floor(count / 25), 1);
  setPage(page => Math.min(page + 1, maxPageNum));
}
