


function handleClick(uri,request) {
    let url = "http://localhost:3000/" + uri;
    try {
        switch(request) {
            case 'GET':
                getData(url)
                .then((res) => { printData(res) })
                .catch((err) => { handleError(err); });
                break;
            case 'PUT':
                putData(url)
                .then((res) => { printData(res) })
                .catch((err) => { handleError(err); });
                break;
            case 'POST':
                postData(url)
                .then((res) => { printData(res) })
                .catch((err) => { handleError(err); });
                break;
            case 'DELETE':
                deleteData(url)
                .then((res) => { printData(res) })
                .catch((err) => { handleError(err); });
        }
       
    } catch (err) {
        handleError(err);
    }
}

function printData(data) {

    //code here
    try{
        let select = document.getElementById("articleSelect");
        let selectDelete = document.getElementById("articleSelectDelete");
        <div class='card w-96 bg-base-100 shadow-xl image-full'>
        <figure><img src='https://placeimg.com/400/225/arch' alt='Shoes' /></figure>
        <div class='card-body'>
          <h2 class='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class='card-actions justify-end'>
            <button class='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
        
        
          
        let articleLists = document.getElementById("articleLists");
        articleLists.innerHTML = "";


        
        for(let i = 0; i < data.articles.length; i++) {
            let option = document.createElement("option");
            option.text = data.articles[i].title;
            option.value = data.articles[i].id;
            select.add(option);
        }
        for(let i = 0; i < data.articles.length; i++) {
            let option = document.createElement("option");
            option.text = data.articles[i].title;
            option.value = data.articles[i].id;
            selectDelete.add(option);
        }
        document.getElementById("debugArticle").innerHTML = JSON.stringify(data);
        
    }catch(err){
        handleError(err);
    }

}

function handleError(err) {
    console.log(err);
    printData(err.message);
}

// Get data from API
function getData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
    });
}

function putData(url) {
    let title = document.getElementById("name").value;
    let articleSelect = document.getElementById("articleSelect").value;
    let body = {
        "id": articleSelect,        
        "title": title
    }

    return new Promise((resolve, reject) => {
        axios.put(url,body).then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
    });

}

function postData(url) {
    let title = document.getElementById("nameAdd").value;
    let theme = document.getElementById("themeAdd").value;
    
    let body = {
        "title": title,
        "theme": theme
    }

    return new Promise((resolve, reject) => {
        axios.post(url,body).then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
    });

}

function deleteData(url){
    let id = document.getElementById("articleSelectDelete").value;
    let body = {
        "id": id
    }
    
    return new Promise((resolve, reject) => {
        axios.delete(url,body).then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
        
    });
}