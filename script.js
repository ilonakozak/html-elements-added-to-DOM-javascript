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

// Footer
const newFooter = document.createElement('footer');
rootElement.appendChild(newFooter);

// Left link
const footerText = document.createElement('span');
newFooter.appendChild(footerText);
footerText.className = 'footer__text';
footerText.textContent = 'Ireland';

// Left footer section

const sectionElement1 = document.createElement('section');
newFooter.appendChild(sectionElement1);
sectionElement1.className = 'footer__left';

// List left and links
const linksLeft = document.createElement('ul');
sectionElement1.appendChild(linksLeft);

const itemLeft = document.createElement('li');
linksLeft.appendChild(itemLeft)

const a3 = document.createElement('a');
const linkText3 = document.createTextNode('About');
a3.append(linkText3);
a3.title = 'About';
a3.href = 'https://about.google/?utm_source=google-IE&utm_medium=referral&utm_campaign=hp-footer&fg=1';
itemLeft.appendChild(a3);

const itemLeft2 = document.createElement('li');
linksLeft.appendChild(itemLeft2);

const a4 = document.createElement('a');
const linkText4 = document.createTextNode('Advertising');
a4.append(linkText4);
a4.title = 'Advertising';
a4.href = 'https://ads.google.com/intl/en_ie/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1';
itemLeft2.appendChild(a4);

const itemLeft3 = document.createElement('li');
linksLeft.appendChild(itemLeft3);

const a5 = document.createElement('a');
const linkText5 = document.createTextNode('Business');
a5.append(linkText5);
a5.title = 'Business';
a5.href = 'https://www.google.ie/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none';
itemLeft3.appendChild(a5);

const itemLeft4 = document.createElement('li');
linksLeft.appendChild(itemLeft4);

const a6 = document.createElement('a');
const linkText6 = document.createTextNode('How Search works');
a6.append(linkText6);
a6.title = 'How Search works';
a6.href = 'https://www.google.com/search/howsearchworks/?fg=1';
itemLeft4.appendChild(a6);

// Right footer section

const sectionElement2 = document.createElement('section');
newFooter.appendChild(sectionElement2);
sectionElement2.className = 'footer__right';

// List right and links
const linksRight = document.createElement('ul');
sectionElement2.appendChild(linksRight);

const itemRight = document.createElement('li');
linksRight.appendChild(itemRight);

const a7 = document.createElement('a');
const linkText7 = document.createTextNode('Privacy');
 a7.append(linkText7);
a7.title = 'Privacy';
a7.href = 'https://policies.google.com/privacy?hl=en-IE&fg=1';
itemRight.appendChild(a7);

const itemRight2 = document.createElement('li');
linksRight.appendChild(itemRight2);

const a8 = document.createElement('a');
const linkText8 = document.createTextNode('Terms');
a8.append(linkText8);
a8.title = 'Terms';
a8.href = 'https://policies.google.com/terms?hl=en-IE&fg=1';
itemRight2.appendChild(a8);

const itemRight3 = document.createElement('li');
linksRight.appendChild(itemRight3);

const a9 = document.createElement('a');
const linkText9 = document.createTextNode('Search Settings');
a9.append(linkText9);
a9.title = 'Search Settings';
a9.href = 'https://www.google.ie/preferences?hl=en-IE&fg=1';
itemRight3.appendChild(a9);
