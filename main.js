import './src/index.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './src/counter.js'

const appWrapper = document.querySelector('#app')

appWrapper.classList.add(
    'm-0',
    'min-w-full',
    'p-8',
    'text-center',
    'bg-zinc-900',
    'text-white',
    'flex',
    'place-items-center',
    'min-h-screen'
)
appWrapper.innerHTML = /*html*/ `
  <div class="min-w-full">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}"  class="inline h-24 p-6" alt="Vite logo"/>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="">
      <img src="${javascriptLogo}"  class="inline h-24 p-6" alt="JavaScript logo" />
    </a>
    <h1 class="text-5xl">Hello Vite!</h1>
    <div class="p-8">
      <button id="counter" type="button" class="border-zinc-950 py-2 px-5 border-2 rounded-lg"></button>
    </div>
    <p class="text-gray-500">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
