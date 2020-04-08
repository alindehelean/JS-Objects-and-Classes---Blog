// post, comment, user

function Post(id, date, author, title, text){
    this.id = id;
    this.date = date;
    this.author = author;
    this.text = text;
    this.title = title;
    this.commentList = [];
};

Post.prototype.render = function(){
    const containerPost = document.createElement('div');
    containerPost.innerHTML =`
    <h1>${this.title}</h1>
    <p>${this.text}</p>
    `
    return containerPost;
}

Post.prototype.addComment = function (comment){
    this.commentList.push(comment);
}

function Comment(id, user, text){
    this.id = id;
    this.user = user;
    this.text = text;
};

const com1 = new Comment(1, "Andrei", "the best");
const com2 = new Comment(2, "Andra", "the worse");


const post1 = new Post(1, "alex", "12/03/2020","Titlu 1", "Buna, primul post!");
const post2 = new Post(2, "alin", "12/04/2020","Titlu 2", "Buna, second post!");

post1.addComment(com1);
post2.addComment(com2);

const listPost = [post1, post2];

for (let i = 0; i < listPost.length; i++) {
    const postNode = listPost[i].render();
    document.getElementById('listOfPost').appendChild(postNode);
    
};
