//TODO REFACTOR
const container = document.querySelector('.selectedCardsContainer');
const selectedCard = new Map();
function selectCard(li) {
  const id = li.id.slice(6); //remove 'person' from id
  const name = li.dataset.name;
  if (selectedCard.has(`${id}`)) {
    selectedCard.delete(id);
    document.getElementById(`selectedItem${id}`).remove();
  } else {
    selectedCard.set(id, name);
    appendSelectedCard(id, name);
  }
}
function removeSelectionCard(id) {
  if (selectedCard.has(`${id}`)) {
    document.getElementById(`person${id}`).classList.toggle('selectedCard');
    selectedCard.delete(`${id}`);
  }
}
function appendSelectedCard(id, name) {
  container.append(
    createElement(
      'div',
      {
        classNames: ['selectCard'],
        id: `selectedItem${id}`,
        onClick: handleRemoveCardFromContainer,
      },
      document.createTextNode(name)
    )
  );
}
