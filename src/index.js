console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c HI', 'color: firebrick');

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));

    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'firebrick';
        }
    });

    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        const breedItems = breedList.getElementsByTagName('li');
        Array.from(breedItems).forEach(breedItem => {
            const breedName = breedItem.textContent;
            breedItem.style.display = breedName.startsWith(selectedLetter) ? '' : 'none';
        });
    });
});
