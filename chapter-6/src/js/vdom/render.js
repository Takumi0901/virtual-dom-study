import { isEventAttr } from './utils'

const setAttrs = (target, attrs) => {
  for (const attr in attrs) {
    if (isEventAttr(attr)) {
      target.addEventListener('click', attrs[attr])
    } else {
      target.setAttribute(attr, attrs[attr])
    }
  }
}

function renderElement({ tagName, attrs, children }) {
  const $el = document.createElement(tagName)

  setAttrs($el, attrs)

  for (const child in children) {
    $el.appendChild(render(children[child]))
  }

  return $el
}

export function render(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }
  return renderElement(vNode)
}
