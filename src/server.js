const proffys = [
    {
        name : "Diego Fernandes",
        avatar : "https://image.flaticon.com/icons/svg/16/16480.svg",
        whatsapp : "47 99921-5733", 
        bio : "Entusiasta das melhores tecnologias de química avançada. <br> <br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject : "Química", 
        cost : "20", 
        weekday : [0], 
        time_from : [720], 
        time_to : [1200]
    },
    {
        name : "Mateus Konkol",
        avatar : "https://image.flaticon.com/icons/svg/16/16480.svg",
        whatsapp : "47 99921-5733", 
        bio : "Entusiasta das melhores tecnologias de química avançada. <br> <br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject : "Química", 
        cost : "50", 
        weekday : [1], 
        time_from : [720], 
        time_to : [6200]
    }
]
//return a response with HTML page
function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (rea, res) {
    return res.render("study.html", {proffys})
}

function pageGiveClasses (req, res) {
    return res.render("give-classes.html")
} 

//takes the module express to run our application
const express = require (`express`)
const server = express()
const nunjucks = require("nunjucks")

//Configure the template engine wich will turbinate our HTML
nunjucks.configure("src/views",
    {
        express: server,
        noCache: true,
    })

//server configuration - assuming that the folder public will become 
//the root folder to lookup for static files
server.use(express.static("public"))
//receive the method GET and return the HTML related, application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

