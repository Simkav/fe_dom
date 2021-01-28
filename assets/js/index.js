'use strict';

const arr = [];
const ulList = document.getElementById('root-list');

const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
  const {
    target: {
      body,
      body: { value: val },
    },
  } = e;
  e.preventDefault();
  if (val) {
    arr.push(val);
    ulList.append(createLiElement(val));
    body.value = '';
  } else {
    console.log('Empty input');
  }
});
const createLiElement = (textNode) => {
  const liElem = document.createElement('li');
  liElem.append(document.createTextNode(textNode));
  return liElem;
};
