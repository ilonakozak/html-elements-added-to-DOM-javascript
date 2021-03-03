// Header Section

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
rootElement.id = 'root';

const newElement = document.createElement('header');
rootElement.appendChild(newElement);

const nav = document.createElement('nav');
newElement.appendChild(nav);
nav.className = 'nav';

// Ul Element

const ulList = document.createElement('ul');
nav.appendChild(ulList);
ulList.className = 'nav__ul';

const liItem = document.createElement('li');
ulList.appendChild(liItem);

// Activ link
const a = document.createElement('a');
const linkText = document.createTextNode('Gmail');
a.append(linkText);
a.title = 'Gmail';
a.href = 'https://mail.google.com/';
liItem.appendChild(a);

const liItem2 = document.createElement('li');
ulList.appendChild(liItem2);

// Activ link
const a2 = document.createElement('a');
const linkText2 = document.createTextNode('Images');
a2.append(linkText2);
a2.title = 'Images';
a2.href = 'https://www.google.ie/imghp?hl=en&ogbl';
liItem2.appendChild(a2);

// Main section

const mainElement = document.createElement('main');
rootElement.appendChild(mainElement);

// Google Logo

const img = document.createElement('img');
img.setAttribute('src', 'https://www.google.ie/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
const body = document.querySelector('main');
body.append(img);

// Input

const inputField = document.createElement('input');
inputField.type = 'search'; inputField.value = '';
mainElement.appendChild(inputField);
inputField.id = 'search';

// Buttons

const buttonsElement = document.createElement('section');
mainElement.appendChild(buttonsElement);
buttonsElement.className = 'section__buttons';

const buttonElement = document.createElement('button');
buttonsElement.appendChild(buttonElement);
buttonElement.className = 'section__buttons-button';
buttonElement.textContent = 'Google Search';

const buttonElement2 = document.createElement('button');
buttonsElement.appendChild(buttonElement2);
buttonElement2.className = 'section__buttons-button';
buttonElement2.textContent = 'Feeling Lucky';

// Lang section

const sectLanguage = document.createElement('section');
mainElement.appendChild(sectLanguage);
sectLanguage.className = 'section__lang';
sectLanguage.textContent = 'Google offered in:';

const ulButtons = document.createElement('ul');
sectLanguage.appendChild(ulButtons);

// Activ link
const secLink1 = document.createElement('li');
ulButtons.appendChild(secLink1);

const a10 = document.createElement('a');
const linkText10 = document.createTextNode('English');
a10.append(linkText10);
a10.title = 'English';
a10.href = 'https://www.google.com/';
secLink1.appendChild(a10);

// Activ link
const secLink2 = document.createElement('li');
ulButtons.appendChild(secLink2);
    
const a11 = document.createElement('a');
const linkText11 = document.createTextNode('Gaeilge');
a11.append(linkText11);
a11.title = 'Gaeilge';
a11.href = 'https://www.google.ie/';
secLink2.appendChild(a11);
