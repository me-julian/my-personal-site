'use strict'

let lastScrollPosition = 0

initCustomScrollbar()
resizeEndBuffers()

document.querySelector('#reading-list-modal').addEventListener('click', () => {
    toggleReadingListVisibility()
})
addEventListener('resize', resizeEndBuffers)
document
    .querySelector('#reading-list')
    .addEventListener('scroll', stopBookScroll)

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
        const progress = getScrollProgress(e.target)

        const bar = document.querySelector('#scrollbar')
        const dot = document.querySelector('#scrollbar-dot')

        dot.style.top = `${
            parseInt(bar.clientHeight - dot.clientHeight + 1) * (progress / 100)
        }px`
    })
}

function stopBookScroll() {
    // const bookMargin = 16 * 2
    // const bookHeight = 316 + bookMargin / 2
    // const wrapperBox = document
    //     .querySelector('#reading-list')
    //     .getBoundingClientRect()
    // const startBufferSize =
    //     (window.visualViewport.height * 0.9 - bookHeight) / 2 + 'px'
    // const progress = getScrollProgress(
    //     document.querySelector('#reading-list').children[1]
    // )
    // const books = document.querySelectorAll('.book')
    // books.forEach((book) => {
    //     const booksProgress =
    //         (wrapperBox.top - book.getBoundingClientRect().top) *
    //         (progress / 100)
    //     if (
    //         book.children[0]
    //             .getAttribute('src')
    //             .includes('img/books/mythical-man-month-5-6.jpg')
    //     ) {
    //         console.log(booksProgress)
    //     }
    // })
}

function resizeEndBuffers() {
    // Calculated, currently fixed height + y margins
    const BOOK_HEIGHT = 316 + 16 * 2
    const buffers = document.querySelectorAll('.reading-list-buffer')

    // Current height of scrollbar set up Tailwind
    for (let buffer of buffers) {
        buffer.style.height =
            (window.visualViewport.height * 0.9 - BOOK_HEIGHT) / 2 + 'px'
    }
}

function getScrollProgress(element) {
    return (
        (element.scrollTop / (element.scrollHeight - element.clientHeight)) *
        100
    )
}
