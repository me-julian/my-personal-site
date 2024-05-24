const books = [
    {
        title: 'The Mythical Man Month',
        image: 'mythical-man-month-5-6.jpg',
        readDate: 'November 2023',
    },
    {
        title: 'The Pragmatic Programmer',
        image: 'pragmatic-programmer-5-6.jpg',
        readDate: 'December 2023',
    },
    {
        title: 'Refactoring',
        image: 'refactoring-5-6.jpg',
        readDate: 'January 2024',
    },
    {
        title: 'The Design of Everday Things',
        image: 'the-design-of-everday-things-5-6.jpg',
        readDate: 'February 2024',
    },
    {
        title: 'The Art of Agile Development',
        image: 'art-of-agile-software-development-5-6.jpg',
        readDate: 'March 2024',
    },
    {
        title: 'A Philosophy of Software Design',
        image: 'philosophy-of-software-design-5-6.jpg',
        readDate: 'May 2024',
    },
    {
        title: 'Continuous Delivery',
        image: 'continuous-delivery-5-6.jpg',
        readDate: 'In Progress',
    },
]

export default /*html*/ `
    <div id="reading-list" class="h-dvh w-dvh overflow-y-scroll">
        <div id="scrollbar">
            <div id="scrollbar-dot"></div>
        </div>
        <div class="flex flex-col items-center my-[5dvh]">
            <div class="reading-list-buffer"></div>
            ${books.map((book, idx) => buildBookImage(book, idx)).join('')}
            <div class="reading-list-buffer"></div>
        </div>
    </div>
`

function buildBookImage(book, index) {
    return /*html*/ `
        <div class="book py-4" style="z-index:${index}">
            <img class="book-img rounded-md" src="img/books/${book.image}" />
        </div>
    `
}

function buildBookDetails(book) {
    return /*html*/ `
        <h1>${book.title}</h1>
        <h2>${book.readDate}</h2>
    `
}
