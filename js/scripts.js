
let anonymousCollection = (function(){


      artistList = [{title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Harry"},
                    {title: "Unhappy", artist: "Chris"},
                    {title: "Holy", artist: "Olga"},
                    {title: "Unhappy", artist: "Hans"},
                    {title: "Holy", artist: "Helwetika"},
                    {title: "Unhappy", artist: "Thomas"},
                    {title: "Holy", artist: "Tamira"},
                    {title: "Unhappy", artist: "Olek"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"}];

// Send list to outside myLoopFunction

              function getAll() {
                return artistList.forEach(myLoopFunction);
              }
// Add artitem to list

              function addListItem(art) {
                let artList = document.querySelector('#artList');
                let listItem = document.createElement('li');
                let a = document.createElement('a');
                a.innerText = art.artist.toUpperCase();
                artList.appendChild(listItem);
                listItem.appendChild(a);
                a.addEventListener('click', function(){
                  artistCollectionProfile(art)
                });
              };

              function artistCollectionProfile(art) {
                let artCollection = document.querySelector('.artistCollection');
                artCollection.style.display = "grid"
                let title = document.createElement('p');
                let image = document.createElement('img');
                title.style.zIndex = "4"
                title.innerText = art.title;
                image.src = "https://picsum.photos/400/600?random=2"
                artCollection.appendChild(title);
                artCollection.appendChild(image);
              }

              return {
                getAll: getAll,
                addListItem: addListItem,
                artistCollectionProfile: artistCollectionProfile
              };

})();


function myLoopFunction(art) {
  anonymousCollection.addListItem(art);
}

anonymousCollection.getAll();


