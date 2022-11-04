import React from 'react'
import axios from 'axios';

function Article({ article, articles, setArticles }) {
    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:3001/articles/${id}/`);
        }
        catch (error) {
            console.log(error);
        }

        //remove article from the list
        const newArticles = articles.articles.filter(article => article.id !== id);
        console.log(newArticles);
        //add newArticles to a array name articles
        setArticles({ articles: newArticles });
        // setArticles(newArticles);

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl scale-90">
            <figure><img src="https://placeimg.com/400/125/arch" alt="Shoes" /></figure>
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-lg">{article.title}!</h2>
                <p>Theme: {article.theme}</p>

            </div>
            <div className="card-actions p-4">
                <button className="btn btn-success btn-sm">Lire</button>
                <button className="btn btn-warning btn-sm">Modifier</button>
                <button className="btn btn-error btn-sm" onClick={(e) => handleDelete(article.id)}>Supprimer</button>
            </div>
        </div >

    )
}

export default Article