// TODO: write code here
import { Popovers } from "./popovers";

const form = document.querySelector('form')
const popovers = new Popovers;
const btn = document.querySelector('button[type=reset]')
let popoverId = null

form.addEventListener('click', (e) => {
    e.preventDefault()
})

btn.addEventListener('focus', () => {
  popoverId = popovers.show('asda', 'asda', btn)
})

btn.addEventListener('focusout', () => {
  popovers.remove(popoverId)
})