const name = $('#name').val().trim();
const photo = $('#photo').val().trim();
const scores = $('#id1 .option').val().trim();

console.log('here i am', scores);

var scoresArray =[
    {
        "name": 'test',
        "photo": 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        "scores": [
            4,
            5,
            3,
            3,
            3,
            5,
            2,
            1,
            3,
            3
        ]
    }
];

module.exports  = scoresArray;