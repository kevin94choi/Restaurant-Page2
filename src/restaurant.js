const createRestaurantHomePage = () => {
    const header = document.querySelector('#title');
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image element
    const image = document.createElement('img');
    image.src = '../dist/Pictures/main.jpg';
    image.height = '300';
    pageContent.appendChild(image);
    content.appendChild(pageContent);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.classList.add('headline');
    headline.textContent = 'Welcome to our restaurant!';
    header.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.classList.add('copy');
    copy.textContent = 'We serve the best food in town. Come and enjoy!'
    header.appendChild(copy);
    // content.appendChild(pageContent);
}

export default createRestaurantHomePage;