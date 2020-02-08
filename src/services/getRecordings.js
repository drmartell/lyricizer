export default function getRecordings(albumId) {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(({ recordings }) => recordings.map(({ title, length }) => ({ title, length })));
}
