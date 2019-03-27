let container = document.querySelector("#container")
let id = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"


function news () 
{
    fetch(id)
    .then (function(response)
    {
        return response.json()
    })
    .then (function(keys)
    {
        for(index = 0; index < keys.length; index++)
        {
         fetch(`https://hacker-news.firebaseio.com/v0/item/${keys[index]}.json?print=pretty`)
            .then(function (response) 
            {
                return response.json()    
            })
            .then(function(article)
            {
                container.insertAdjacentHTML('beforeend',
                `<li>
                <a href=“${article.url}“>${article.title}</a><br>
                By : ${article.by}<br>
                ${new Date(article.time)}<br>
                </li>`)
            })
        }
    })
}

news()

