var contain = document.getElementById("cardDiv");

function getNews1() {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d586322bee564725b8478f959136b5d6')
    .then(res => res.json())
    .then(data => {
       content(data);
        
    })
    .catch(function(err){
        console.log(err);
    })
}
getNews1();
function getNews2() {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2021-12-04&to=2021-12-04&sortBy=popularity&apiKey=d586322bee564725b8478f959136b5d6')
    .then(res => res.json())
    .then(data => {
        content(data);  
    })
    .catch(function(err){
        console.log(err);
    })
}
getNews2();
function getNews3() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d586322bee564725b8478f959136b5d6')
    .then(res => res.json())
    .then(data => {
       content(data);
        
    })
    .catch(function(err){
        console.log(err);
    })
}
getNews3();
function getNews4() {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d586322bee564725b8478f959136b5d6')
    .then(res => res.json())
    .then(data => {
       content(data);
        
    })
    .catch(function(err){
        console.log(err);
    })
}
getNews4();
const content = (data)=>{
    for(var index in data.articles) {
        contain.innerHTML += `
                
                    <div class="col-md-4">
                        <div class="card col-mb-4 m-3 box-shadow">
                        <div class="card-img-top">
                            <img src="${data.articles[index].urlToImage}" class="card-img-top"
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">${data.articles[index].title}</h6>
                            <span>${data.articles[index].author}</span></br>
                            <span>${data.articles[index].publishedAt}</span>
                            <p class="card-text">${data.articles[index].description}</p>
                        </div>
                        </div>
                    </div>`
    }
}

















