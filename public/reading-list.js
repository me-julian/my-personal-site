'use strict'

function openReadingList() {
    const appWrapper = document.querySelector('#app')

    toggleReadingListVisibility()
}

function toggleReadingListVisibility() {
    document.querySelector('#reading-list').classList.toggle('hidden')
}
