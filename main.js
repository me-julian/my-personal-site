import './src/index.css'
import jeLogoSvg from './src/jeLogoSvg'
import linkIconSvg from './src/linkIconSvg'
import githubSvg from './src/githubSvg'
import linkedinSvg from './src/linkedinSvg'

const appWrapper = document.querySelector('#app')

appWrapper.classList.add('text-center', 'font-sans', 'm-0')
appWrapper.innerHTML = /*html*/ `
  <main>
    <section id="intro" class="m-6">
      <div class="relative inline-block my-4">
        <img src="./img/julianeportrait.jpg" class="rounded-full h-36 w-36 drop-shadow-lg">
        <svg class="absolute inline-block -right-3 -bottom-4 h-16 w-16 text-cyan-500 drop-shadow-lg">
          ${jeLogoSvg}
        </svg>
      </div>
      <div class="my-7">
        <h1 class="mb-4 text-5xl font-medium">
          Hi!
        </h1>
        <h3 class="text-2xl text-gray-700">
          I'm <span class="font-medium text-gray-800">Julian Edwards</span>, 
          a web developer in Austin, Texas.
        </h3>
      </div>
      <div class="max-sm:text-left md:mx-auto md:w-2/3">
        <h3 class="text-2xl font-medium mb-7">
          Let me tell you a little bit about myself.
        </h3>
        <h5 class="text-lg font-medium mb-3">
          Computers were central to many of my hobbies growing up
        </h5>
        <p class="mb-7 text-balance font-sans">
          Since I got my first computer in 2011 I've had many different experiences 
          and solved many problems with computers. Whether that's learning to setup 
          and troubleshoot video game mod installations, my first dual boot Ubuntu 
          system, and yes even messing with Ruby and Java.
        </p>
        <h5 class="text-lg font-medium mb-3">
          But the story didn't end there...
        </h5>
        <p class="mb-7 text-balance">
          A couple of years ago I began to pursue them professionally. With all my 
          experiences highlighting my love for learning, solving problems, tinkering 
          and creating, I decided to take the plunge and return to coding. I started 
          with Python, but suddenly was offered a unique opportunity...
        </p>
        <h5 class="text-lg font-medium mb-3">
          Enter Inventive Academy
        </h5>
        <p class="mb-7 text-balance">
          I was lucky enough to be put into contact with 
          <a class="link underline" href="https://learn.inventiveacademy.io/" target="_blank"
          >Inventive</a> who were looking for volunteers to trial run their full 
          stack web development course, now all-online courtesy of COVID-19.
        </p>
      </div>
    </section>
    <section id="skills" class="my-6 mx-6 md:mx-auto md:w-2/3">
      <h3 class="text-2xl font-medium mb-6">Let's take a look at what I've learned</h3>
      <div class="flex flex-col lg:flex-row justify-around gap-8 my-6 sm:mx-6 p-6 bg-slate-200 rounded-sm">
        <div class="flex-1 py-6 bg-gradient-to-b sm:bg-gradient-to-r from-cyan-50 to-cyan-100 border-r border-b border-zinc-300 rounded-md shadow-md">
          <h5 class="text-lg font-medium mb-3 mx-2">Frontend</h5>
          <ul class="mx-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript/Typescript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </div>
        <div class="flex-1 py-6 bg-cyan-100 border-r border-b border-zinc-300 rounded-md shadow-md">
          <h5 class="text-lg font-medium mb-3 mx-2">Backend</h5>
          <ul>
            <li>Node.js</li>
            <li>NPM/PNPM</li>
            <li>Express.js</li>
            <li>MySQL & Sequelize ORM</li>
          </ul>
        </div>
        <div class="flex-1 py-6 bg-gradient-to-b sm:bg-gradient-to-r from-cyan-100 to-cyan-125 border-r border-b border-zinc-300 rounded-md shadow-md">
          <h5 class="text-lg font-medium mb-3 mx-2">Infrastructure</h5>
          <ul>
            <li>Docker</li>
            <li>Bash</li>
            <li>Github Actions</li>
            <li>Amazon Web Services</li>
          </ul>
        </div>
      </div>
      <p class="max-sm:text-left text-lg mb-6 text-balance">
        Some other technologies I've had the pleasure of using include Scala, Python, jQuery, D3, MongoDB & Mongoose ODM, Gulp, Mocha, Chai and Sinon.
      </p>
      <p class="max-sm:text-left text-lg mb-6 text-balance">
        Learning and using new tech is exciting. There are many others I'd like to try and plenty left to learn about what I already know. However, what really excites me is the prospect of putting these tools to use building real products with a team.
      </p>
    </section>
    <section id="projects" class="max-w-screen-xl my-6 mx-auto md:px-6">
      <h3 class="text-2xl font-medium mb-6">So what's that really look like?</h3>
      <section class="flex flex-col sm:flex-row mb-6 lg:mb-24 lg:gap-28">
       <div class="flex-1 sm:m-6">
          <div class="project-img-hover overflow-hidden bg-games-not-played-bg-0 text-white sm:rounded-xl sm:hard-box-shadow-left sm:shadow-games-not-played-primary sm:hover:shadow-games-not-played-primary-active drop-shadow-xl">
            <a href="https://gamesnotplayed.mejulian.dev/" target="_blank">
              <h1 class="text-4xl py-6 px-6 font-bold">
                GAMES NOT <span class="whitespace-nowrap">PLAYED${linkIconSvg(
                    'inline h-6 w-6'
                )}</span>
              </h1>
            <img class="max-lg:hidden" src="./img/projects/games-not-played-md.png" />
            <img class="lg:hidden" src="./img/projects/games-not-played-sm.png" />
            </a>
          </div>
        </div>
        <div class="flex-1 m-6 mb-0 text-left lg:text-right rounded-md">
          <h4 class="text-xl font-medium text-balance mb-3">
            Building a maintainable and fully featured app
          </h4>
          <div>
            <p class="my-2 text-balance">
              With today's digital distribution and constant sales it's easy to end up with more games than you can play. I wanted to make a simple and focused app to help me decide what to play next.
            </p>
            <p class="my-2 text-balance">
              With Games Not Played users have access to an extensive 3rd party database of games. Using simple data and sorting features you can easily narrow down your choices.
            </p>
            <p class="my-2 text-balance">
              My primary focus was to create a well rounded app with consistent custom CSS styling, working user authentication, and proper web hosting. I also integrated VS Code development containers and a continuous delivery workflow with Github Actions and Amazon Web Services.
            </p>
            <div>
              <h5 class="text-lg font-medium mt-3">Key Technologies and Concepts</h5>
              <ul class="max-lg:ml-8 max-lg:list-disc lg:mr-8 lg:list-disc-right">
                <li>Typescript</li>
                <li>React</li>
                <li>User Authentication</li>
                <li>Continuous Delivery</li>
                <li>Cloud Infrastructure</li>
                <li>
                  <a
                    href="https://github.com/julianmedwards/final-project-games-not-played#tech-stack"
                    class="link"
                    target="_blank"
                  >
                    and more...
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col-reverse sm:flex-row my-6 lg:my-24 lg:gap-28">
        <div class="flex-1 m-6 mb-0 text-left rounded-md">
          <h4 class="text-xl font-medium text-balance mb-3">
          Handling complexity and edge cases
          </h4>
          <div>
            <p class="my-2 text-balance">
              An early assignment, I was tasked with building a simulation of cars in a parking lot by scratch. Using an object-oriented approach I created recursive algorithms to get cars to and from their spaces, generate necessary turn and parking animations and handle collision aversion in both standard and edge cases.
            </p>
            <p class="my-2 text-balance">
              A formative moment in my journey to learn what really makes a software engineer beyond knowing language syntax and libraries, I wrote an article about my experience with this project.
            </p>
            <a
              class="my-2 link underline text-balance"
              href="https://www.linkedin.com/pulse/how-junior-dev-can-learn-from-40-year-old-mistakes-julian-edwards-3p2kc/"
              target="_blank"
            >
              Click here to read more.
            </a>
          </div>
          <div>
            <h5 class="text-lg font-medium mt-3">Key Technologies and Concepts</h5>
            <ul class="ml-8 list-disc">
            <li>Object-Oriented Programming</li>
            <li>Recursion</li>
              <li>State Machines</li>
              <li>
                <a
                  class="link underline"
                  href="https://en.wikipedia.org/wiki/Second-system_effect"
                  target="_blank"
                >
                  The Second-System Effect
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 h-96 sm:m-6">
          <div class="project-img-hover overflow-hidden h-96 bg-zinc-400 text-white sm:rounded-xl sm:hard-box-shadow-right sm:shadow-orange-600 sm:hover:shadow-orange-500 drop-shadow-xl-left">
            <a href="https://julianmedwards.github.io/visual-parking-lot/" target="_blank">
              <h1 class="text-4xl py-6 px-6 font-bold">
                PARKING LOT <span class="whitespace-nowrap">SIMULATION${linkIconSvg(
                    'inline h-6 w-6'
                )}</span>
              </h1>
              <div class="relative w-full h-full bg-parking-lot">
                <img src="./img/projects/car-orange.png" class="rotate-180 absolute scale-90 left-5 top-5" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="flex flex-col sm:flex-row my-6 lg:my-24 lg:gap-28">
        <div class="flex-1 sm:m-6">
          <div class="project-img-hover overflow-hidden bg-zinc-400 text-white sm:rounded-xl sm:hard-box-shadow-left sm:shadow-blue-800 sm:hover:shadow-blue-700 drop-shadow-xl">
            <a href="https://julianmedwards.github.io/movie-db/" target="_blank">
              <h1 class="text-4xl py-6 px-6 font-bold">
                MOVIE <span class="whitespace-nowrap">DATABASE${linkIconSvg(
                    'inline h-6 w-6'
                )}</span>
              </h1>
              <img class="max-lg:hidden" src="./img/projects/movie-db-md.png" />
              <img class="lg:hidden" src="./img/projects/movie-db-sm.png" />
            </a>
          </div>
        </div>
        <div class="flex-1 m-6 mb-0 text-left lg:text-right rounded-md">
          <h4 class="text-xl font-medium text-balance mb-3">
            Using real data
          </h4>
          <div>
            <p class="my-2 text-balance">
              A classic content-centered web page featuring 3rd-party data and web dev fundamentals. Client side scripting with jQuery utilizing AJAX requests and the DOM API to deliver a smooth, dynamic user experience.
            </p>
          </div>
          <div>
            <h5 class="text-lg font-medium mt-3">Key Technologies and Concepts</h5>
            <ul class="max-lg:ml-8 max-lg:list-disc lg:mr-8 lg:list-disc-right">
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>3rd Party API Usage</li>
              <li>Promises and Callbacks</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="flex flex-col-reverse sm:flex-row my-6 lg:my-24 lg:gap-28">
        <div class="flex-1 m-6 mb-0 text-left rounded-md">
          <h4 class="text-xl font-medium text-balance">
            Putting CSS to the test
          </h4>
          <div>
            <p class="my-2 text-balance">
              The culmination of my learning in HTML and CSS, this is a recreation of the Jeep.com front page as of Spring 2022. While I later created the same page from scratch again using Bootstrap, this version uses only plain HTML and CSS.
            </p>
          </div>
          <div>
            <h5 class="text-lg font-medium mt-3">Key Technologies and Concepts</h5>
            <ul class="ml-8 list-disc">
              <li>CSS</li>
              <li>Responsive Layouts</li>
            </ul>
          </div>
        </div>
        <div class="flex-1 sm:m-6">
          <div class="project-img-hover overflow-hidden bg-zinc-900 text-white sm:rounded-xl sm:hard-box-shadow-right sm:shadow-yellow-500 sm:hover:shadow-yellow-400 drop-shadow-xl-left">
            <a href="https://julianmedwards.github.io/jeep-com-no-bs/" target="_blank">
              <h1 class="text-4xl py-6 px-6 font-bold">
                JEEP.COM <span class="whitespace-nowrap">RECREATION${linkIconSvg(
                    'inline h-6 w-6'
                )}</span>
              </h1>
              <img class="max-lg:hidden" src="./img/projects/jeep-com-md.png" />
              <img class="lg:hidden" src="./img/projects/jeep-com-sm.png" />
            </a>
          </div>
        </div>
      </section>
    </section>
    <section id="personal"  class="max-sm:text-left my-6 mx-6 md:mx-auto md:w-2/3">
      <h3 class="text-2xl mb-4 font-medium">
        A little more about me
      </h3>
      <p class="mb-4 text-balance">
        Software isn't the only thing I'm interested in. I love learning 
        languages (currently Dutch, previously Japanese and French), finding 
        and curating new music, cooking, reading and have a black belt in 7 
        Star Praying Mantis Kung Fu.
      </p>
      <p class="mb-4 text-balance">
        Video games have been a constant in my life as well. Some favorites include The Elder Scrolls III: Morrowind for its immersive world, Europa Universalis IV for its systemic complexity in gradual, long term campaigns and Dark Souls for its exploration and satisfying accumulation of skill and knowledge.
      </p>
      <p class="mb-4 text-balance">
        I also love to travel, and have independently planned and financed trips to Europe, Connecticut, Washington D.C. and New York since 2017. In my three European trips I've visited the Czech Republic and Poland, toured France and Croatia and spent plenty of quality time with my friends in the regional cities of the Netherlands - my favorite country.
      </p>
      <div class="mb-4 text-center">
        <img class="mx-auto sm:px-8 lg:hidden rounded-sm" src="./img/julian-croatia-squarer.jpg">
        <img class="mx-auto max-lg:hidden max-w-2xl rounded-sm" src="./img/julian-croatia-landscape.jpg">
        <small class="text-neutral-800">Poreč, Croatia near the <a class="link underline" href="https://en.wikipedia.org/wiki/Euphrasian_Basilica" target="_blank">Euphrasian Basilica</a></small>
      </div>
      <p class="mb-4 text-balance">
        I get the most satisfaction when I can use my knowledge to support others, and so am always looking for opportunities to help out, share ideas and teach. Sometimes that aid comes in the form of solitary diligence, preparing something great you can present to others.
      </p>
    </section>
    <section id="connect" class="max-sm:text-left my-6 mx-6 md:mx-auto md:w-2/3">
      <h3 class="text-2xl mb-4 font-medium">
        Reach out!
      </h3>
      <h5 class="text-lg mb-4 text-balance">
        Interested in my projects? Want to see some of the many others I've completed, or just chat?
      </h5>
      <h5 class="text-lg mb-4 text-balance">
        Connect with me on LinkedIn below, or send an email to 
        <a
          class="link underline break-words"
          href="mailto: julian.michael.edwards+dev@gmail.com"
          >julian.michael.edwards+dev@gmail.com
        </a>
      </h5>
      <h5 class="text-lg text-balance">
        I've also been a regular attendee of the 
        <a
          class="link underline"
          href="https://www.meetup.com/austin-code-mentorship/"
          target="_blank"
        >Austin Code Mentorship</a> monthly meetup since March, 2023. Come by 
        and you'll probably see me there!
      </h5>
    </section>
    <footer class="mt-12 pb-8 text-cyan-50 bg-cyan-500">
      <div class="py-8">
        <a
          class="inline-block m-6 link light underline drop-shadow-md"
          href="https://www.linkedin.com/in/julian-edwards/"
          target="_blank"
        >
          ${linkedinSvg('h-16 w-16')}
        </a>
        <a
          class="inline-block m-6 link light underline drop-shadow-md"
          href="https://github.com/julianmedwards"
          target="_blank"
        >
          ${githubSvg('h-16 w-16')}
        </a>
      </div>
      <h6 class="font-sm font-light">Built with Vite and Tailwind.</h6>
    </footer>
  </main>
`
