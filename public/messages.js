var date = new Date()
var currentDay = date.getDay()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


const messages = [
    {
        title: "Bos",
        description: 'Click on Add note button up👆😃 to add a new note',
        username: "Blaze",
        date: days[currentDay] + ' ' + date.toLocaleTimeString()
    },
    // {
    //     title: "Hello World!",
    //     description: 'aaa',
    //     username: "Charles",
    //     date: 'new Date()'
    // }
];

module.exports = messages;