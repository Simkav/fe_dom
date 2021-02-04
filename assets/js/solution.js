'use strict';
//TODO ADD DATA ATTR TO LI WITH NAME OF OWNER AND COMPLETE TASK
const cardContainer = document.getElementById('root');
fetch('./assets/js/data/users.json')
  .then((response) => {
    console.log('Recieve response');
    return response.json();
  })
  .then((persons) => {
    console.log('Response parsed');
    renderCards(persons);
  })
  .catch(() => {
    console.log('Some Error');
  });
function renderCards(persons) {
  cardContainer.append(...persons.map((person) => createPersonCard(person)));
}
//OLD WAY
// const cards = responseData.map((person) => createPersonCard(person));
// cardContainer.append(...cards);
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
  const li = createElement(
    'li',
    {
      classNames: ['cardWrapper'],
      onClick: handleSelectCard,
      id: `person${person.id}`,
    },
    article
  );
  li.dataset.name =
    `${person.firstName} ${person.lastName}`.trim() || 'Unknown';
  return li;
}
