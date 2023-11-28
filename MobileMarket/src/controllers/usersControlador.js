const path = require("path");

const usersMetodos = {
    registro: (req, res) => { res.render("../views/users/registro") },
    login: (req, res) => { res.render("../views/users/login") },
}

module.exports = usersMetodos;