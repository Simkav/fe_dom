function handleImageError({ target }) {
  target.remove();
}

function handleSelectCard({ currentTarget: li, currentTarget: { id } }) {
  li.classList.toggle('selectedCard');
  selectCard(li);
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}
function handleRemoveCardFromContainer({ target, target: { id } }) {
  removeSelectionCard(id.slice(12));
  target.remove();
}
