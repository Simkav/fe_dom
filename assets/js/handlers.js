function handleImageError({ target }) {
  target.remove();
}

function handleSelectCard({ currentTarget: li }) {
  li.classList.toggle('selectedCard');
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}
