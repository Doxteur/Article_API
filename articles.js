const json = require('./articles.json');


module.exports = (app) => {
    app.get('/articles', (req, res) => {
        res.send(json);
    });
    app.put('/articles/:id', (req, res) => {
        let id = req.params.id;
        let name = req.body.name;
        let article = json.articles.find((article) => {
            return article.id == id;
        });
        article.name = name;
        res.send(article);
    });

    app.post('/articles/add', (req, res) => {
        let name = req.body.name;
        let theme = req.body.theme;
        let id = json.articles.length + 1;
        let article = {
            id: id,
            name: name,
            theme: theme
        };
        json.articles.push(article);
        res.send(article);
    });

    app.delete('/articles/:id', (req, res) => {
        let id = req.params.id;
        let article = json.articles.find((article) => {
            return article.id == id;
        });
        json.articles.splice(json.articles.indexOf(article), 1);
        res.send(article);
    });
    
}