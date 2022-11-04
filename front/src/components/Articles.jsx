import React from 'react'
import Article from './Article'

function Articles({ articles,setArticles }) {

    const articleList = "articles" in articles ? articles.articles.map(article => {
        return (
            <Article article={article} key={article.id} setArticles={setArticles} articles={articles} />
        )
    }) : <p>No articles</p>


    return (
        <>
            <h1 className='text-3xl font-bold'>Les Articles</h1>
            <div className='grid grid-cols-3 gap-4'>
                {articleList}
            </div>
        </>

    )
}

export default Articles