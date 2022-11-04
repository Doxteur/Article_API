const json = require('./articles.json');
const fs = require('fs');


module.exports = (app) => {
    app.get('/articles', (req, res) => {
        res.send(json);
    });
    app.put('/articles/modify', (req, res) => {
        let id = req.body.id;
        let title = req.body.title;
        
        let article = json.articles.find((article) => {
            return article.id == id;
        });
        article.title = title;
        res.send(article);
    });

    app.post('/articles/add', (req, res) => {
        let title = req.body.title;
        let theme = req.body.theme;
        let id = json.articles.length + 1;
        let article = {
            id: id,
            title: title,
            theme: theme
        };
        json.articles.push(article);
        fs.writeFile('./articles.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        
        res.send(article);
    });

    app.delete('/articles/:id', (req, res) => {
        let id = req.params.id;
        let article = json.articles.find((article) => {
            return article.id == id;
        });
        json.articles.splice(json.articles.indexOf(article), 1);
        fs.writeFile('./articles.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        res.send(article);
    });
    
}