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
    // {
    //     title: 'The Art of Agile Development',
    //     image: '',
    //     readDate: 'In Progress',
    // },
]

export default /*html*/ `
    <div id="reading-list" class="h-dvh w-dvh overflow-y-scroll">
        <div id="scrollbar">
            <div id="scrollbar-dot"></div>
        </div>
        <div class="flex flex-col items-center my-[5dvh]">
            <div class="reading-list-buffer"></div>
            ${books.map((book) => buildBookImage(book)).join('')}
            <div class="reading-list-buffer"></div>
        </div>
    </div>
`

function buildBookImage(book) {
    return /*html*/ `
        <div class="book">
            <img src="img/books/${book.image}" />
        </div>
    `
}

function buildBookDetails(book) {
    return /*html*/ `
        <h1>${book.title}</h1>
        <h2>${book.readDate}</h2>
    `
}
