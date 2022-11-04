import React from 'react'
import axios from 'axios';

function ModalModify({ articles, setArticles }) {

    const handleModification = (e) => {
        const inputTitleModify = document.getElementById("inputTitleModify").value;
        const inputThemeModify = document.getElementById("inputThemeModify").value;
        const id = document.getElementById("inputIdModify").value;
        const articleModify = {
            id: id,
            title: inputTitleModify,
            theme: inputThemeModify
        }

        axios.put(`http://localhost:3001/articles/modify/`, articleModify);

        //Update article from react the list
        console.log("Mon id", id)
        const newArticles = articles.articles.map(article => {
            if (article.id == id) {
                article.title = inputTitleModify;
                article.theme = inputThemeModify;
            }
            return article;
        });

        console.log(newArticles);
        setArticles({ articles: newArticles });

        //close modal
        document.getElementById('my-modal-4').checked = true;


    }

    return (
        <div>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex flex-col w-1/2" id='modalContent'>
                    </div>
                    <label htmlFor="my-modal-4" className="btn btn-warning btn-sm mt-4" onClick={handleModification}>Modifier</label>

                </label>
            </label></div>
    )
}

export default ModalModify