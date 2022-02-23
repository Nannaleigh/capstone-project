const commentContainer = document.querySelector("#comment-container")
const form = document.querySelector('form')
// /api/comments

const commentCallback = ({ data : comments }) => displayComments(comments)
const errCallback = err => console.log(err)

const getAllComments = () => axios.get('http://localhost:6665/api/comments').then(commentCallback).catch(errCallback)
const createComment = body => axios.post('http://localhost:6665/api/comments', body).then(commentCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()
    let name = document.querySelector('#name')
    let comment = document.querySelector('#comment')

    let bodyObj = {
        name: name.value,
        input: comment.value
    }

    createComment(bodyObj)

    name.value = " "
    comment.value = " "
}

function createCommentCard(comment) {
    const commentCard = document.createElement('div')
    commentCard.classList.add('comment-card')

    commentCard.innerHTML = `
    <p class="comment">${comment.name} says: "${comment.comment}"</p>
    `

    commentContainer.appendChild (commentCard)
}

function displayComments(arr) {
    commentContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCommentCard(arr[i])
    }
}
form.addEventListener('submit', submitHandler)

getAllComments()