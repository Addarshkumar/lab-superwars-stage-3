const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
players.map(function(e,index){
   const players={
    name:PLAYERS[index],
    image:`images/super-${index + 1}.png`,
    strength:getRandomStrength(),
    type:index%2==0?"hero":"villain"
   }
   console.log(players)
   detailedPlayers.push(players)
})

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 101);
}

// var type = ["hero", "villain"]
// const getRandomType = () => {
//     var ran = Math.floor(Math.random() * type.length);
//     return type[ran];
// }
// Build player template
const buildPlayers = (players, type) => {

const fragment = players.filter(player => player.type === type).map(player => `
    <div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
    </div>`
)
.join(''); 

return fragment; // Return the HTML fragment
}


// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}