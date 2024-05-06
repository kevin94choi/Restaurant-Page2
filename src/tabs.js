import createRestaurantHomePage from "./restaurant";
import createMenuPage from './menu';
import createContactPage from './contact';

const createTabs = () => {

    const content = document.querySelector('#content');
    const nav = document.querySelector('nav');

    // Create the three divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //Set ids for the divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //Set classes for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //Set text content for the tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //Append the divs to the content div
    nav.appendChild(div1);
    nav.appendChild(div2);
    nav.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

function clearContent() {
    const header = document.querySelector('#title');
    const headline = document.querySelector('.headline');
    const copy = document.querySelector('.copy');

    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if(pageContent && headline && copy) {
        content.removeChild(pageContent);
        header.removeChild(headline);
        header.removeChild(copy);
    } else if (pageContent && headline) {
        content.removeChild(pageContent);
        header.removeChild(headline);
    }
    // if(header){
    //     header.removeChild(headline);
    //     header.removeChild(copy);
    // }
}
export default createTabs;