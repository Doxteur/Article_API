


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
        console.log(data);
        
        for(let i = 0; i < data.articles.length; i++) {
            let option = document.createElement("option");
            option.text = data.articles[i].title;
            option.value = data.articles[i].id;
            select.add(option);
        }

        
        console.log(data);
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
    let name = document.getElementById("name").value;
    let body = {
        "name": name
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
    let name = document.getElementById("nameAdd").value;
    let theme = document.getElementById("themeAdd").value;
    
    let body = {
        "name": name,
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
    return new Promise((resolve, reject) => {
        axios.delete(url).then((res) => {
            return resolve(res.data);
        }).catch((err) => {
            return reject(err);
        });
    });
}