'use strict'

let lastScrollPosition = 0

initCustomScrollbar()

document.querySelector('#reading-list-modal').addEventListener('click', () => {
    toggleReadingListVisibility()
})
addEventListener('resize', resizeBooks)
addEventListener('resize', resizeEndBuffers)

document
    .querySelector('#reading-list')
    .addEventListener('scroll', stopBookScroll)

function resizeBooks() {
    if (
        document
            .querySelector('#reading-list-modal')
            .classList.contains('hidden')
    ) {
        return
    }

    resizeEndBuffers()

    // Set height of book wrappers so that when we freeze their images,
    // the height of the modal doesn't change for scrolling.
    getBooks().forEach((book) => {
        const width = book.wrapper.clientWidth
        const height = book.wrapper.clientHeight
        book.wrapper.style.height = height + 'px'
        book.wrapper.style.width = width + 'px'
    })
}

function toggleReadingListVisibility() {
    const modalWrapper = document.querySelector('#reading-list-modal')

    if (modalWrapper.classList.contains('hidden')) {
        lastScrollPosition = window.scrollY
    }

    document.querySelector('main').classList.toggle('overflow-hidden')
    document.querySelector('main').classList.toggle('h-dvh')
    modalWrapper.classList.toggle('hidden')

    window.scroll(0, lastScrollPosition)

    resizeEndBuffers()
    resizeBooks()
}

function initCustomScrollbar() {
    document.querySelector('#reading-list').addEventListener('scroll', (e) => {
        const progress = getScrollProgress()

        const bar = document.querySelector('#scrollbar')
        const dot = document.querySelector('#scrollbar-dot')

        dot.style.top = `${
            parseInt(bar.clientHeight - dot.clientHeight + 1) * (progress / 100)
        }px`
    })
}

function getBooks() {
    const books = []
    document
        .querySelectorAll('.book')
        .forEach((book) => books.push(getBook(book)))
    return books
}

function getBook(bookEl) {
    return {
        wrapper: bookEl,
        image: bookEl.querySelector('img'),
    }
}

function stopBookScroll() {
    const modalBox = document
        .querySelector('#reading-list')
        .getBoundingClientRect()

    getBooks().forEach((book) => {
        const bookImg = book.wrapper.children[0]

        const listTop = modalBox.height * 0.05
        const listBottom = modalBox.height * 0.95
        const listHeight = listBottom - listTop
        const bookMargin = 16
        const bookTop = book.wrapper.getBoundingClientRect().top + bookMargin

        const progress = ((bookTop - listBottom) / listHeight) * 100

        if (progress < -100) {
            bookImg.classList.add(['absolute'])

            bookImg.style.top = listTop + 'px'
        }
        if (progress >= -100) {
            book.image.classList.remove(['absolute'])
            book.image.style.top = null
        }
    })
}

function resizeEndBuffers() {
    const buffers = document.querySelectorAll('.reading-list-buffer')

    buffers.item(0).style.height = calcBufferHeight() + 'px'
    buffers.item(1).style.height = calcBufferHeight() + 'px'
}

function getScrollProgress() {
    const modal = document.querySelector('#reading-list')
    return (modal.scrollTop / (modal.scrollHeight - modal.clientHeight)) * 100
}

function calcBufferHeight() {
    // Calculated, currently fixed height
    const BOOK_HEIGHT = 316

    // Current height of scrollbar set by Tailwind
    const scrollbarHeight = window.visualViewport.height * 0.9
    return (scrollbarHeight - BOOK_HEIGHT) / 2 - 16
}
