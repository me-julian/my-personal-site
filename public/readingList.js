'use strict'

let lastScrollPosition = 0

document.querySelector('#reading-list-modal').addEventListener('click', () => {
    toggleReadingListVisibility()
})
initCustomScrollbar()

function toggleReadingListVisibility() {
    const modalWrapper = document.querySelector('#reading-list-modal')

    if (modalWrapper.classList.contains('hidden')) {
        lastScrollPosition = window.scrollY
    }

    document.querySelector('main').classList.toggle('overflow-hidden')
    document.querySelector('main').classList.toggle('h-dvh')
    modalWrapper.classList.toggle('hidden')

    window.scroll(0, lastScrollPosition)
}

function initCustomScrollbar() {
    document.querySelector('#reading-list').addEventListener('scroll', (e) => {
        const progress =
            (e.target.scrollTop /
                (e.target.scrollHeight - e.target.clientHeight)) *
            100

        const bar = document.querySelector('#scrollbar')
        const dot = document.querySelector('#scrollbar-dot')

        dot.style.top = `${
            parseInt(bar.clientHeight - dot.clientHeight + 1) * (progress / 100)
        }px`
    })
}
