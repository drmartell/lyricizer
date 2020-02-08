export default function getLyrics(artistName, recordingName) {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${recordingName}`)
    .then(res => res.json())
    .then(({ lyrics }) => lyrics);
}
