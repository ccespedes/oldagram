import posts from "./data.js"

let postEl = document.getElementById('post')

function renderPost() {
    postEl.innerHTML = ''
    return posts.map(post => buildElements(
        post.avatar,
        post.name,
        post.location,
        post.post,
        post.likes,
        post.username,
        post.comment
    ))
}

function buildElements(avatar, name, location, post, likes, username, comment) {
    const postContainer = document.createElement('div')
    postContainer.classList.add('post-container')
    const userBar = document.createElement('div')
    userBar.classList.add('user-bar')
    const userImg = document.createElement('img')
    userImg.classList.add('user-avatar')
    userImg.setAttribute('src', avatar)
    const userInfo = document.createElement('div')
    userInfo.classList.add('user-info')
    const userName = document.createElement('h3')
    userName.classList.add('user-name')
    userName.innerText = name
    const userLocation = document.createElement('p')
    userLocation.classList.add('user-location')
    userLocation.innerText = location
    const postImage = document.createElement('img')
    postImage.classList.add('post-image')
    postImage.setAttribute('src', post)
    const icons = document.createElement('div')
    icons.classList.add('icons')
    const heartIcon = document.createElement('img')
    heartIcon.classList.add('btn')
    heartIcon.setAttribute('src', 'images/icon-heart.png')
    heartIcon.addEventListener('click', () => {
        addLike(username)
    })
    const commentIcon = document.createElement('img')
    commentIcon.classList.add('btn')
    commentIcon.setAttribute('src', 'images/icon-comment.png')
    const dmIcon = document.createElement('img')
    dmIcon.classList.add('btn')
    dmIcon.setAttribute('src', 'images/icon-dm.png')
    const likesCount = document.createElement('div')
    likesCount.classList.add('bold-text')
    likesCount.classList.add('likes')
    likesCount.innerText = `${likes} likes`
    const commentEl = document.createElement('div')
    commentEl.classList.add('comment')
    commentEl.innerHTML = `<span class='bold-text'>${username}</span> ${comment}`

    postEl.appendChild(postContainer)
    postContainer.appendChild(userBar)
    userBar.appendChild(userImg)
    userBar.appendChild(userInfo)
    userInfo.appendChild(userName)
    userInfo.appendChild(userLocation)
    postContainer.appendChild(postImage)
    postContainer.appendChild(icons)
    icons.appendChild(heartIcon)
    icons.appendChild(commentIcon)
    icons.appendChild(dmIcon)
    postContainer.appendChild(likesCount)
    postContainer.appendChild(commentEl)
}

function addLike(user) {
    posts.map(post => post.username === user ? { ...post, like: post.likes++ } : null)
    console.log(posts)
    renderPost()
}

renderPost()
