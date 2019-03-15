let newsLst = document.getElementById("newslst")

let frontPage = news.articles.map(function (article) {

    return `<li class="bullet">
                <h1>${article.title}</h1>
                <h4>${article.author}</h4>
                <p>${article.description}</p>
                <a href=${article.url}>News Link</a>
                <img class="photo" src=${article['urlToImage']}>
                <p>Published at: ${article.publishedAt}</p>
            </li>`
})

newsLst.innerHTML = frontPage.join('');


// author
// title
// description
// url(hyperlink to go to the news)
// urlToImage(image associated with the news)
// publishedAt