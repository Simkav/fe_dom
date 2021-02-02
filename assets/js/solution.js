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


