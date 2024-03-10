// Global variable to hold all fetched posts
let globalPosts = [];
let topic = 'Kazakhstan';
let apiKey = 'https://newsapi.org/v2/everything?q=' + topic + '&from=2024-02-10&sortBy=publishedAt&apiKey=81afdc203c3a49cd87158df62b691774';



// Function to fetch all posts and render them
function fetchAllPosts() {
    setLoadingMessage('posts', 'Loading posts...');
    fetch(apiKey)
        .then(response => response.json())
        .then(data => {
            globalPosts = data.articles; // Store the articles in a global variable
            const postsContainer = document.getElementById('posts');
            postsContainer.innerHTML = ''; // Clear the loading message
            data.articles.forEach((article, index) => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `
                    <div class="post">
                        <div class="post-left">
                            <div class="box-horizontal">
                                <p class="text-bold">${article.author}</p>
                                <p> in </p>
                                <p class="text-bold">${topic}</p>
                                <p> • </p>
                                <p>${formatDate(article.publishedAt)}</p>
                            </div>
                            <h2>${article.title}</h2>
                            <p>${article.description}</p>
                            <div class="post-footer">
                                <div class="box-horizontal">
                                    <button onclick="redirectToPostDetail(${index})">Read More</button>
                                    <p> 12 min read </p>
                                    <p> • </p>
                                    <p> Selected for you </p>
                                </div>
                                <div class="box-horizontal">
                                    <div class="icon-box"></div>
                                    <div class="icon-box"></div>
                                    <div class="icon-box"></div>
                                </div>
                            </div>
                        </div>    
                        <div class="post-right">
                            <img class="post-img" src="${article.urlToImage}" alt="Article Image">
                        </div>
                    </div>
                `;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            handleError('posts', error);
        });
}

// Function to render a single post from localStorage
function fetchSinglePost() {
    const articleData = localStorage.getItem('selectedArticle');
    
    if (articleData) {
        const article = JSON.parse(articleData);
        const postContainer = document.getElementById('post');
        postContainer.innerHTML = `
            <p>${article.author}</p> 
            <p>${article.publishedAt}</p>    
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="Article Image" style="width:300px;height:auto;">
            <p>${article.content}</p>
        `;
    }
    localStorage.removeItem('selectedArticle');
}

function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
}

// Redirect function to go to single post page, adjusted to remove duplication
function redirectToPostDetail(index) {
    localStorage.setItem('selectedArticle', JSON.stringify(globalPosts[index]));
    window.location.href = `post.html`;
}

// Add a loading message or animation when fetching data
function setLoadingMessage(containerId, message) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<p>${message}</p>`;
}

// Enhanced error handling
function handleError(containerId, error) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<p>Error loading content: ${error.message}</p>`;
}
