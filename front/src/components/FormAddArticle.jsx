import React from 'react'
import axios from 'axios';

function FormAddArticle({ articles, setArticles }) {


    const handleAdd = (e) => {
        const title = document.getElementById('inputTitle').value;
        const theme = document.getElementById('inputTheme').value;

        const body = {
            title: title,
            theme: theme
        }

        try {
            axios.post('http://localhost:3001/articles/add', body)
            .then(res => {
                setArticles({ articles: [...articles.articles, res.data] });
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=''>
            <h1 className='font-bold text-3xl'>Ajouter un article</h1>

            <div className='flex flex-col w-full md:w-1/3 mb-4'>
                <input type="text" className='input input-bordered mt-4' id='inputTitle' placeholder='Titre' />
                <input type="text" className='input input-bordered mt-4' id='inputTheme' placeholder='Theme' />
                <button className='btn btn-success mt-4' onClick={(e) => handleAdd(e)}>Ajouter</button>
            </div>
        </div>
    )
}

export default FormAddArticle