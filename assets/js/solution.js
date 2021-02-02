'use strict';
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
  return createElement(
    'li',
    { classNames: ['cardWrapper'], onClick: handleSelectCard },
    article
  );
}

function createContacts(contacts = []) {
  return contacts
    .map((userLink) => {
      return createLink(userLink, iconClasses.get(new URL(userLink).hostname));
    })
    .filter(Boolean);
}
function createLink(hrefLink, iconClassList) {
  const icon = createElement('i', { classNames: [...iconClassList] });
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
