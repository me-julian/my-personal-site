import './src/index.css'
import jeLogoSvg from './src/je-logo-svg'

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
    <section id="intro" class="my-6">
      <div class="relative inline-block my-4">
        <img src="/img/julianeportrait.jpg" class="rounded-full h-36 w-36">
        <svg class="absolute inline-block -right-3 -bottom-4 h-16 w-16 text-red-700">
          ${jeLogoSvg}
        </svg>
      </div>
      <div class="my-4">
        <h1 class="m-3 text-5xl font-medium">Hi!</h1>
        <h2 class="text-2xl text-gray-700">
          I'm <span class="font-medium text-gray-800">
            Julian Edwards
          </span>
          , a web developer in Austin, Texas.
        </h2>
      </div>
    </section>
    <section id="skills" class="my-6 mx-auto w-2/3">
      <div class="flex justify-around gap-x-8 h-64 m-4 p-6 bg-zinc-200 rounded-sm">
        <div class="flex-1 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg my-3">Frontend</h6>
        </div>
        <div class="flex-1 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg my-3">Backend</h6>
        </div>
        <div class="flex-1 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg my-3">Production</h6>
        </div>
      </div>
    </section>
    <section id="projects" class="my-6 mx-8">
      <h2 class="text-3xl my-4 font-medium">Projects</h1>
      <section class="flex justify-stretch my-12">
        <div class="flex-1 h-96 p-6 bg-games-not-played-bg-0 rounded-xl hard-box-shadow-left shadow-games-not-played-primary text-games-not-played-light">
          <h2 class="text-3xl">Games Not Played</h2>
        </div>
        <div class="flex-1 h-96 p-6 rounded-md">
          <h3 class="text-xl font-medium">Information about the app</h3>
        </div>
      </section>
      <section class="flex justify-stretch my-12">
        <div class="flex-1 h-96 p-6 rounded-md">
          <h3 class="text-xl font-medium">Information about the app</h3>
        </div>
        <div class="flex-1 h-96 p-6 bg-zinc-500 rounded-xl hard-box-shadow-right shadow-yellow-500 text-white">
        <h2 class="text-3xl">Parking Lot Simulation</h2>
        </div>
      </section>
    </section>
    <section id="personal"  class="my-6">
    </section>
    <section id="footer/links"  class="my-6">
    </section>
  </main>
`
