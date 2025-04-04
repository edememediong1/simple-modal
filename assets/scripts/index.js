const btn = document.getElementById('btn')
const dialog = document.querySelector('dialog')
const closeBtn = document.querySelector('#cancel')

btn.addEventListener('click', () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', () => {
    dialog.close()
})