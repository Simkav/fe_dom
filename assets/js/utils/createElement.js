/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Map[]} options.attr - html map presents as attr,value
 * @param {string} options.id - element id
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type,
  { attr = new Map(), classNames, onClick, id },
  ...children
) {
  const elem = document.createElement(type);
  attr.forEach((v, k) => {
    elem.setAttribute(k, v);
  });
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  if (id) elem.id = id;
  return elem;
}
