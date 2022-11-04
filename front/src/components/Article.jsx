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


    const handleModalValue = (id) => {
        const modalContent = document.getElementById("modalContent");

        const article = articles.articles.find(article => article.id === id);

        //modify article
        modalContent.innerHTML = `
        <h1 class="font-bold text-xl">Modifier l'article</h1>
        <label class="label mt-4">Le Titre</label>
        <input type="input" id="inputTitleModify" class="input input-bordered " value="${article.title}" />
        <label class="label mt-2">Le Theme</label>
        <input type="input" id="inputThemeModify" class="input input-bordered " value="${article.theme}" />

        <input type="input" id="inputIdModify" class="input input-bordered " value="${article.id}"  hidden/>

                        `
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl scale-90">
            <figure><img src="https://placeimg.com/400/125/arch" alt="Shoes" /></figure>
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-lg">{article.title}!</h2>
                <p>Theme: {article.theme}</p>
            </div>
            <div className="card-actions p-4">
                <label htmlFor="my-modal-4" className="btn btn-warning btn-sm" onClick={(e) => handleModalValue(article.id)} >Modifier</label>
                <button className="btn btn-error btn-sm" onClick={(e) => handleDelete(article.id)}>Supprimer</button>
            </div>
        </div >

    )
}

export default Article