const fs = require('fs')

const friends = ['Henry', 'Casey', 'Doug', 'Teddy', 'Kathleen', 'Kaitlyn', 'Dave', 'Liam']

const randomScore = _ => Math.floor(Math.random() * 5) + 1

const friendsSurveys = friends.map(friend => {
    return {
        name: friend,
        photo: 'https://publicdomainvectors.org/en/free-clipart/Long-haired-woman-smiling-vector-image/17572.html',
        scores: [...Array(10)].map(_ => randomScore())
    }
})

fs.writeFileSync('./app/data/friendsRandom.json', JSON.stringify(friendsSurveys, null, 4), 'utf8');