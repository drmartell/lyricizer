export const getArtists = (search, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(search)}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(artists => {
      return { 
        count: artists.count,
        artists: artists.artists.map(artist => {
          return {
            id: artist.id,
            name: artist.name
          };
        })
      };});
};
