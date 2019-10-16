console.log('Hallo World');


const containerObj = document.getElementById('container');

const Artikel = async() =>{
    const result = await fetch('http://localhost300/blog');
    const data = await result.json();
}

const showArticles = async () => {
    articles ="";
​
    linkObj[0].classList.add('active');
    linkObj[1].classList.remove('active');
​
    const result = await fetch('http://localhost:3000/blogposts');
    const blogposts = await result.json();
    console.log(blogposts);
​
    for (blogpost of blogposts) {
        let curdate = new Date(blogpost.date);
        let day = curdate.getDate(blogpost.date);
        let month = curdate.getMonth(blogpost.date)+1;
        let year = curdate.getFullYear(blogpost.date);
        let datum = `${day}.${month}.${year}`;
​
        articles +=
            `<div class="article">
            <span></span>
            <h2 >${blogpost.title}</h2>
            <h3>erstellt von "${blogpost.author} | erstellt am: ${datum}"</h3>
            <p>${blogpost.body}</p>
        </div>
        `;
    }
​
    containerObj.innerHTML = articles;
}
​
showArticles();
​
const showAddArticle = () => {
    linkObj[0].classList.remove('active');
    linkObj[1].classList.add('active');
    
​
    let addArticle = `
    <div id="addArticle">
        <input type="text" id="titleInput" placeholder="Hier Titel eingeben">            
        <input type="text" id="authorInput" placeholder="Hier Autor eintragen">          
        <textarea id="textInput" cols="30" rows="10" placeholder="Hier Text eintragen"></textarea>         
        <div id="addArticleBtn">
            <button>Artikel erstellen</button>
        </div>
    </div>`
    containerObj.innerHTML = addArticle;
​
    const addArticleBtnObj = document.getElementById('addArticleBtn');
​
    addArticleBtnObj.onclick = async () => {
        const titleInputObj = document.getElementById('titleInput');
        const authorInputObj = document.getElementById('authorInput');
        const bodyInputObj = document.getElementById('textInput');
​
        if(!(titleInputObj.value.length > 0 && bodyInputObj.value.length > 0)){
            alert('Titel und Text müssen vorhanden sein.');
            return;
        }
        const body = {
            title: titleInputObj.value,
            author: authorInputObj.value,
            body : bodyInputObj.value
        }
​
        try {
            const response = await fetch('http://localhost:3000/blogposts', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
            // falls http-antwort 200 oder 304 war 
            if (response.ok) {
                // 2. das objekt als json interpretieren -> wir bekommen ein objekt
                const responseJson = await response.json();
                // 3. als string darstellen
                showArticles();
            }
        } catch (e) {
            console.log('Error: ' + e);
        }
​
    }
}





