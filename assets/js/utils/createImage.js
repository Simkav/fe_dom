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
  loadImage(img, profilePicture)
    .then((d) => {
      handleImageLoad(d);
    })
    .catch((d) => {
      handleImageError(d);
    });
  return img;
}
function loadImage(img, src) {
  img.setAttribute('src', src);
  return new Promise((resolve, reject) => {
    img.addEventListener('load', (response) => {
      resolve(response);
    });
    img.addEventListener('error', (response) => {
      reject(response);
    });
  });
}
