export const getArt = releaseID => {
  fetch(`http://coverartarchive.org/release/${releaseID}/front`)
    .then(res => res.json())
    .then(art => {
      count: artists.count,
      artists: artists.artists.map(artist => {
        return {
          id: artist.id,
          
        }
      })
    })
}

//`http://coverartarchive.org/release/$65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab/front`