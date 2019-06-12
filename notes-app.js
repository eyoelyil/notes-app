let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

const now = moment([2019, 0, 29])
console.log(now.fromNow())
//now.add(1, 'year').subtract(20, 'days')
//console.log(now.format('MMMM Do, YYYY'))
// November 3rd, 2003
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())

const birthDay = moment()
birthDay.year(1991).month(0).date(6)
console.log(birthDay.format('MMM D, YYYY'))


