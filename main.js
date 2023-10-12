import './src/index.css'
import jeLogoSvg from './src/je-logo-svg'
import { setupCounter } from './src/counter.js'

const appWrapper = document.querySelector('#app')

appWrapper.classList.add(
    'min-w-full',
    'min-h-screen',
    'flex',
    'text-center',
    'justify-center',
    'm-0'
)
appWrapper.innerHTML = /*html*/ `
  <main class="min-w-full">
    <section id="welcome">
      <svg class="inline h-20 p-4 text-red-700">
        ${jeLogoSvg}
      </svg>
      <h1 class="text-5xl font-medium">Hello!</h1>
      <div class="p-8">
        <button id="counter" type="button" class="border-zinc-950 py-2 px-5 border-2 rounded-lg"></button>
      </div>
      <p class="text-gray-500">
        Click on the Vite logo to learn more
      </p>
    </section>
    <section id="projects">
    </section>
    <section id="personal">
    </section>
    <section id="footer/links">
    </section>
  </main>
`

setupCounter(document.querySelector('#counter'))
