
let anonymousCollection = (function(){


      artistList = [{title: "Holy", artist: "Henry"},
                    {title: "Unhappy", artist: "Olaf"},
                    {title: "Holy", artist: "Harry"},
                    {title: "Unhappy", artist: "Chris"},
                    {title: "Holy", title2:  "Ambience", artist: "Olga"},
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
                a.innerText = art.artist;
                a.href = "#";
                artList.appendChild(listItem);
                listItem.appendChild(a);
                a.addEventListener('click', function(){
                  artistCollectionProfile(art)
                });
              };

              function artistCollectionProfile(art) {
                let artCollection = document.querySelector('.artistCollection');
                artCollection.style.display = "block";
                let title = document.createElement('h1');
                let title2 = document.createElement('p');
                let image1 = document.createElement('img');
                let image2 = document.createElement('img');
                let image3 = document.createElement('img');
                title.style.zIndex = "4"
                title.innerText = art.artist;
                title2.style.zIndex = "4"
                title2.innerText = art.title;
                image1.src = "https://picsum.photos/400/600?random=2";
                image2.src = "https://picsum.photos/500/600?random=2";
                image3.src = "https://picsum.photos/600/600?random=2";
                artCollection.appendChild(title);
                artCollection.appendChild(image1);
                artCollection.appendChild(title2);
                artCollection.appendChild(image2);
                artCollection.appendChild(image3);
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


