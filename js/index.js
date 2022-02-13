const input = document.querySelector('.input-search')
const image = document.querySelector('.user-img')
const h1name = document.querySelector('.h1-name')
const ptype = document.querySelector('.p-type')
const pbio = document.querySelector('.p-bio')
const pcreate = document.querySelector('.p-create')
const h1repos = document.querySelector('.h1-repos')
const h1followers = document.querySelector('.h1-followers')
const h1following = document.querySelector('.h1-following')
const pposition = document.querySelector('.p-postion1')
const plink = document.querySelector('.p-link1')
const ptwitter = document.querySelector('.p-twitter1')
const pschool = document.querySelector('.p-school1')

const userAction = async() => {

    var inputValue = input.value;
    console.log(inputValue)

    url = 'https://api.github.com/users/' + inputValue

    const response = await fetch(url)
    const myJson = await response.json()
    console.log(myJson)

    var element = [
        myJson.avatar_url,
        myJson.login,
        myJson.type,
        myJson.bio,
        myJson.created_at,
        myJson.public_repos,
        myJson.followers,
        myJson.following,
        myJson.location,
        myJson.blog,
        myJson.twitter_username,
        myJson.company,
    ]

    if(element[3] === null) {
        pbio.innerHTML = 'This profile has no bio'
    } else {
        pbio.innerHTML = element[3]
    }

    if(element[8] === null) {
        pposition.innerHTML = 'No position'
    } else {
        pposition.innerHTML = element[8]
    }

    if(element[9] === "") {
        plink.innerHTML = 'No link'
    } else {
        plink.innerHTML = element[9]
    }

    if(element[10] === null) {
        ptwitter.innerHTML = 'No twitter'
    } else {
        ptwitter.innerHTML = element[10]
    }

    if(element[11] === null) {
        pschool.innerHTML = 'No Company'
    } else {
        pschool.innerHTML = element[11]
    }

    image.src = element[0]
    h1name.innerHTML = element[1]
    ptype.innerHTML = element[2]
    pcreate.innerHTML = element[4]
    h1repos.innerHTML = element[5]
    h1followers.innerHTML = element[6]
    h1following.innerHTML = element[7]

    console.log(element)

}