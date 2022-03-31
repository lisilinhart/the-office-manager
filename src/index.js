
function randomName() {
    const names = ['Dwight Schrute', 'Michael Scott', 'Pam Beesly', 'Jim Halpert']
    return names[Math.floor(Math.random() * names.length)];
}

module.exports = {
    randomName: randomName
}