export default function(page, setPage) {
  if(page <= 1) return;
  setPage(page => page - 1);
}
