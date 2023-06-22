const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

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
        // console.log('click', username)
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
    // how do I add span and comment without innerHTML?
    // like this: <div class="comment"><span class="bold-text">vincey1853</span> just took mushrooms lol</div>

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
