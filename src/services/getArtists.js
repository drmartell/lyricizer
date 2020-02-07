export default function(search, offset) {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(search)}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(({ count, artists }) => (
      { 
        count,
        artists: artists.map(({ id, name }) => ({ id, name }))
      }));
}
