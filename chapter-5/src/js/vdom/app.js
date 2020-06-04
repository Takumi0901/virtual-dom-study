import { mount, render } from './render'

export const app = ({ root, state, view }) => {
  const $el = document.querySelector(root)
  let newNode = view(state)

  const renderDOM = () => {
    $el.appendChild(render(newNode))
  }

  renderDOM()
}