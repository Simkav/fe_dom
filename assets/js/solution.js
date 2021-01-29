'use strict';
const iconClasses = new Map()
  .set('www.facebook.com', ['ico', 'fab', 'fa-facebook'])
  .set('www.instagram.com', ['ico', 'fab', 'fa-instagram'])
  .set('twitter.com', ['ico', 'fab', 'fa-twitter']);
const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quasisit in adipisci temporibus dolor fugiat incidunt omnis eligendinon ea.';

const cardContainer = document.getElementById('root');
const cards = responseData.map((person) => createPersonCard(person));
cardContainer.append(...cards);
function createPersonCard(person) {
  const p = createElement(
    'p',
    { classNames: ['cardDescription'] },
    document.createTextNode(lorem)
  );

  const h3 = createElement(
    'h3',
    { classNames: ['cardName'] },
    document.createTextNode(
      `${person.firstName} ${person.lastName}`.trim() || 'Unknown'
    )
  );
  const cardLinks = createElement(
    'div',
    { classNames: ['cardLinks'] },
    ...createContacts(person.contacts)
  );
  const article = createElement(
    'article',
    { classNames: ['cardContainer'] },
    createImageWrapper(person, ['cardImageWrapper']),
    h3,
    p,
    cardLinks
  );

  return createElement('li', { classNames: ['cardWrapper'] }, article);
}

function createContacts(contacts = []) {
  const conctactsEl = [];
  contacts.forEach((v) => {
    if (iconClasses.has(new URL(v).hostname)) {
      conctactsEl.push(createLink(v, iconClasses.get(new URL(v).hostname)));
    }
  });
  return conctactsEl;
}
function createLink(hrefLink, classList) {
  const icon = createElement('i', { classNames: [...classList] });
  const a = createElement(
    'a',
    {
      attr: new Map().set('href', hrefLink),
      classNames: ['link'],
    },
    icon
  );
  const linkContainer = createElement(
    'div',
    {
      classNames: ['link-container'],
    },
    a
  );
  return linkContainer;
}

function createImageWrapper(person, classList) {
  const { firstName, id } = person;

  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`);
  imageWrapper.classList.add(...classList);
  imageWrapper.style.backgroundColor = stringToColour(firstName);

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(firstName.trim().charAt(0) || ''));

  createImage(person, { className: 'cardImage' });

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ firstName, profilePicture, id }, { className }) {
  const img = document.createElement('img');
  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute('alt', firstName);
  img.setAttribute('src', profilePicture);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  return img;
}

/* 
    EVENT HANDLERS
  */

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}

/* 
    UTILS
  */

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

/* 
  
    LIB
  
  */
/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Map[]} options.attr - html map presents as attr,value
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type,
  { attr = new Map(), classNames, onClick },
  ...children
) {
  const elem = document.createElement(type);
  attr.forEach((v, k) => {
    elem.setAttribute(k, v);
  });
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}
