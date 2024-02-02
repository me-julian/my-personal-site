'use strict'

let lastScrollPosition = 0

document.querySelector('#reading-list-modal').addEventListener('click', () => {
    toggleReadingListVisibility()
})

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
