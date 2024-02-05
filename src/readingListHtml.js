const books = [
    {
        title: 'The Mythical Man Month',
        image: 'mythical-man-month-1.jpg',
        readDate: 'November 2023',
    },
    {
        title: 'The Pragmatic Programmer',
        image: 'pragmatic-programmer-1.jpg',
        readDate: 'December 2023',
    },
    {
        title: 'Refactoring',
        image: 'refactoring-1.jpg',
        readDate: 'January 2023',
    },
    {
        title: 'The Design of Everday Things',
        image: 'the-design-of-everday-things-1.jpg',
        readDate: 'In Progress',
    },
]

export default /*html*/ `
    <div id="reading-list" class="h-dvh w-dvh overflow-y-scroll">
        <div id="scrollbar">
            <div id="scrollbar-dot"></div>
        </div>
        <div class="flex flex-col items-center my-[5dvh]">
            ${books.map((book) => buildBookImage(book)).join('')}
        </div>
    </div>
`

function buildBookImage(book) {
    return /*html*/ `
        <img class="book" src="img/books/${book.image}" />
    `
}

function buildBookDetails(book) {
    return /*html*/ `
        <h1>${book.title}</h1>
        <h2>${book.readDate}</h2>
    `
}
