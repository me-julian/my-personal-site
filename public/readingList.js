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

    const books = document.querySelectorAll('.book')

    books.forEach((book) => {
        const img = book.children[0]
        const width = book.clientWidth
        const height = book.clientHeight
        console.log(width)
        console.log(height)
        img.style.width = width + 'px'
        book.style.width = width + 'px'
        book.style.height = height + 'px'
        img.style.height = height + 'px'
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
    const bookMargin = 16
    const bookTop = bookEl.getBoundingClientRect().top - bookMargin * 2

    return {
        element: bookEl,
        bookTop,
    }
}

function stopBookScroll() {
    const wrapper = document.querySelector('#reading-list').children[1]
    const modalBox = document
        .querySelector('#reading-list')
        .getBoundingClientRect()
    const wrapperBox = wrapper.getBoundingClientRect()

    const bufferHeight = calcBufferHeight()

    getBooks().forEach((book) => {
        const listTop = modalBox.height * 0.05
        const listBottom = modalBox.height * 0.95
        const listHeight = listBottom - listTop
        const bookMargin = 16
        const bookTop =
            book.element.getBoundingClientRect().top - bookMargin * 2

        const progress = ((bookTop - listHeight) / listHeight) * 100
        if (
            book.element.children[0].getAttribute('src').includes('refactoring')
        ) {
            console.log(progress)
        }

        if (progress < -100) {
            book.element.children[0].classList.add(['absolute'])
            book.element.children[0].style.top = listTop + 'px'
        }
        if (progress >= -100) {
            book.element.children[0].classList.remove(['absolute'])
            book.element.children[0].style.top = undefined
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
