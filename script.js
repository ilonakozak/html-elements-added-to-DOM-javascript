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

