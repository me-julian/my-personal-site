import './src/index.css'
import jeLogoSvg from './src/je-logo-svg'
import githubSvg from './src/github-svg'
import linkedinSvg from './src/linkedin-svg'

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
        <img src="/img/julianeportrait.jpg" class="rounded-full h-36 w-36 drop-shadow-lg">
        <svg class="absolute inline-block -right-3 -bottom-4 h-16 w-16 text-cyan-500 drop-shadow-lg">
          ${jeLogoSvg}
        </svg>
      </div>
      <div class="my-6">
        <h1 class="mb-4 text-5xl font-medium">Hi!</h1>
        <h2 class="text-2xl text-gray-700">
          I'm <span class="font-medium text-gray-800">Julian Edwards</span>, 
          a web developer in Austin, Texas.
        </h2>
      </div>
    </section>
    <section id="skills" class="my-6 mx-auto w-2/3">
      <h3 class="text-2xl mb-6">Let me tell you a little bit about myself.</h3>
      <h4 class="text-lg mb-3">
        Computers were central to many of my hobbies growing up
      </h4>
      <p class="mb-6 text-balance">
        Since I got my first computer in 2011 I've had many different experiences 
        and solved many problems with computers. Whether that's learning to setup 
        and troubleshoot video game mod installations, my first dual boot Ubuntu 
        system, and yes even messing with Ruby and Java.
      </p>
      <h4 class="text-lg mb-3">
        But the story didn't end there...
      </h4>
      <p class="mb-6 text-balance">
        A couple of years ago I began to pursue them professionally. With all my 
        experiences highlighting my love for learning, solving problems, tinkering 
        and creating, I decided to take the plunge and return to coding. I started 
        with Python, but suddenly was offered a unique opportunity...
      </p>
      <h4 class="text-lg mb-3">
        Enter Inventive Academy
      </h4>
      <p class="mb-6 text-balance">
        I was lucky enough to be put into contact with 
        <a class="link underline" href="https://learn.inventiveacademy.io/"
        >Inventive</a> who were looking for volunteers to trial run their full 
        stack web development course, now all-online courtesy of COVID-19.
      </p>
      <h3 class="text-2xl mb-6">Let's take a look at what I've learned</h3>
      <div class="flex justify-around gap-x-8 my-6 mx-6 p-6 bg-zinc-200 rounded-sm">
        <div class="flex-1 py-6 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg mb-3">Frontend</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript/Typescript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </div>
        <div class="flex-1 py-6 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg mb-3">Backend</h6>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="flex-1 py-6 bg-zinc-100 border-r border-b border-zinc-300 rounded-md shadow-sm">
          <h6 class="text-lg mb-3">Infrastructure</h6>
          <ul>
            <li>Docker</li>
            <li>Bash</li>
            <li>Github Actions</li>
            <li>Amazon Web Services</li>
          </ul>
        </div>
      </div>
      <p class="text-lg text-balance mb-6">
        I've greatly enjoyed getting to explore these and more technologies in my journey to becoming a professional web developer. I'm even more excited to put these into action building real products amongst a team.
      </p>
    </section>
    <section id="projects" class="max-w-screen-xl my-6 mx-auto">
      <h2 class="text-3xl mb-6 font-medium">So what's that really look like?</h2>
      <section class="flex justify-stretch mt-12 mb-24 gap-28">
        <div class="flex-1 h-96 p-6 bg-games-not-played-bg-0 text-games-not-played-light rounded-xl hard-box-shadow-left shadow-games-not-played-primary drop-shadow-xl">
          <h2 class="text-4xl font-bold">GAMES NOT PLAYED</h2>
        </div>
        <div class="flex-1 p-6 text-right rounded-md">
          <h3 class="text-xl font-medium text-balance mb-3">
            Building a maintainable and fully featured app
          </h3>
          <div>
            <p class="my-2 text-balance">
              With today's digital distribution and constant sales it's easy to end up with more games than you can play. I wanted to make a simple and focused app to help me decide what to play next.
            </p>
            <p class="my-2 text-balance">
              With Games Not Played users have access to an extensive 3rd party database of games. Using simple data and sorting features you can easily narrow down your choices.
            </p>
            <p class="my-2 text-balance">
              My primary focus was to create a well rounded app with consistent custom CSS styling, working user authentication, and proper web hosting. I also integrated VS Code development containers and a continuous delivery workflow with Github Actions and Amazon Web services.
            </p>
            <div>
              <h6 class="text-lg font-medium mt-3">Key Technologies and Concepts</h6>
              <ul class="mr-8 list-disc-right">
                <li>Typescript</li>
                <li>React</li>
                <li>User Authentication</li>
                <li>Continuous Delivery</li>
                <li>Cloud Infrastructure</li>
                <li>
                  <a href="https://github.com/julianmedwards/final-project-games-not-played#tech-stack" class="link">and more...</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="flex justify-stretch my-24 gap-28">
        <div class="flex-1 p-6 text-left rounded-md">
          <h3 class="text-xl font-medium text-balance mb-3">
          Handling complexity and edge cases
          </h3>
          <div>
            <p class="my-2 text-balance">
              An early assignment, I was tasked with building a simulation of cars in a parking lot by scratch. Using an object-oriented approach I created recursive algorithms to get cars to and from their spaces, generate necessary turn and parking animations and handle collision aversion in both standard and edge cases.
            </p>
          </div>
          <div>
            <h6 class="text-lg font-medium mt-3">Key Technologies and Concepts</h6>
            <ul class="ml-8 list-disc">
              <li>Recursion</li>
              <li>Object Oriented Programming</li>
              <li>State Machines</li>
              <li>
                <a
                  class="link underline"
                  href="https://en.wikipedia.org/wiki/Second-system_effect">
                    The Second System Effect
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 overflow-clip h-96 pt-6 bg-zinc-400 text-white rounded-xl hard-box-shadow-right shadow-orange-600 drop-shadow-xl">
          <h2 class="text-4xl pb-6 font-bold">PARKING LOT SIMULATION</h2>
          <div class="relative w-full h-full bg-parking-lot">
          <img src="/img/car-orange.png" class="rotate-180 absolute scale-90 left-5 top-5" />
          </div>
        </div>
      </section>
      <section class="flex justify-stretch my-24 gap-28">
        <div class="flex-1 h-96 p-6 bg-zinc-500 text-white rounded-xl hard-box-shadow-left shadow-blue-800 drop-shadow-xl">
          <h2 class="text-4xl font-bold">MOVIE DATABASE</h2>
        </div>
        <div class="flex-1 p-6 text-right rounded-md">
          <h3 class="text-xl font-medium text-balance mb-3">
            Using real data
          </h3>
          <div>
            <p class="my-2 text-balance">
              A classic content-centered web page featuring 3rd-party data and web dev fundamentals. Client side scripting with JQuery utilizing AJAX requests and the DOM API to deliver a smooth, dynamic user experience.
            </p>
          </div>
          <div>
            <h6 class="text-lg font-medium mt-3">Key Technologies and Concepts</h6>
            <ul class="mr-8 list-disc-right">
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>3rd Party API Usage</li>
              <li>Promises and Callbacks</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="flex justify-stretch my-24 gap-32">
      <div class="flex-1 h-96 p-6 text-left rounded-md">
        <h3 class="text-xl font-medium text-balance">
          Putting CSS to the test
        </h3>
        <div>
          <p class="my-2 text-balance">
            The culmination of my learning in HTML and CSS, this is a recreation of the Jeep.com front page as of Spring 2022. While I later created the same page from scratch again using Bootstrap, this version uses only plain HTML and CSS.
          </p>
        </div>
        <div>
          <h6 class="text-lg font-medium mt-3">Key Technologies and Concepts</h6>
          <ul class="ml-8 list-disc">
            <li>CSS</li>
            <li>Responsive Layouts</li>
          </ul>
        </div>
      </div>
        <div class="flex-1 h-96 p-6 bg-zinc-900 text-white rounded-xl hard-box-shadow-right shadow-yellow-500 drop-shadow-xl">
          <h2 class="text-4xl font-bold">JEEP.COM RECREATION</h2>
        </div>
      </section>
    </section>
    <section id="personal"  class="my-6 mx-auto w-2/3">
      <h4 class="text-2xl mb-4 font-medium">
        A little more about me
      </h4>
      <p class="mb-4 text-balance">
        Software isn't the only thing I'm interested in. I love learning 
        languages (currently Dutch, previously Japanese and French), finding 
        and curating new music, cooking, reading and have a black belt in 7 
        Star Praying Mantis Kung Fu.
      </p>
      <p class="mb-4 text-balance">
        Video games have been a constant in my life as well. I credit The Elder Scrolls III: Morrowind for my love of immersive worlds and exploration. There are few games that rival the systemic complexity and gradual, long-term building of Europa Universalis 4, which is my most played game by far. Dark Souls and Guilty Gear: Strive have their own satisfaction in the slow accumulation of skill and knowledge they engender, and the connection to martial arts helps too.
      </p>
      <p class="mb-4 text-balance">
        I get the most satisfaction when I can use my knowledge to support others, and so am always looking for opportunities to help out and teach. Of course, sometimes the best way to take a load off of others is pure, solitary diligence too.
      </p>
    </section>
    <section id="connect" class="my-6 mx-auto w-2/3">
      <h3 class="text-3xl mb-4 font-semibold">
        Reach out!
      </h3>
      <h4 class="text-xl mb-4 text-balance">
        Interested in my projects? Want to see some of the many others I've completed, or just chat?
      </h4>
      <h4 class="text-lg mb-4 text-balance">
        Connect with me on LinkedIn below, or send an email to 
        <a
          class="link underline"
          href="mailto: julian.michael.edwards+inquiries@gmail.com"
          >julian.michael.edwards+inquiries@gmail.com
        </a>
      </h4>
      <h4 class="text-lg text-balance">
        I've also been a regular attendee of the 
        <a
          class="link underline"
          href="(https://www.meetup.com/austin-code-mentorship/)"
        >Austin Code Mentorship</a> monthly meetup since March, 2023. Come by 
        and you'll probably see me there!
      </h4>
      <div class="my-8">
        <a class="inline-block m-6 link underline drop-shadow-md" href="https://www.linkedin.com/in/julian-edwards/">
          ${linkedinSvg('h-16 w-16')}
        </a>
        <a class="inline-block m-6 link underline drop-shadow-md" href="https://github.com/julianmedwards">
          ${githubSvg('h-16 w-16')}
        </a>
      </div>
    </section>
    <footer class="mt-12 mb-8">
      <p class="font-sm font-light">Built with Vite and Tailwind.</p>
    </footer>
  </main>
`
