// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
//
// let postsDiv = document.getElementsByClassName('posts')[0];
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const postItem of value) {
//             let postDiv = document.createElement('div');
//             postsDiv.classList.add('post')
//             let postIdDiv = document.createElement('div');
//             postIdDiv.innerText= `id - ${postItem.id}`
//             let postUserIdDiv = document.createElement('div');
//             postUserIdDiv.innerText= `user ID - ${postItem.userId}`
//             let postTitle = document.createElement('h2');
//             postTitle.innerText= postItem.title;
//             let postBody = document.createElement('div');
//             postBody.innerText= postItem.body
//
//
//             postDiv.append(postIdDiv, postUserIdDiv, postTitle, postBody)
//
//             postsDiv.appendChild(postDiv)
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentDiv = document.getElementsByClassName('comments')[0];
fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(value => {
    for (const commentItem of value) {
let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comment');
        let commentsIdDiv = document.createElement('div');
        commentsIdDiv.innerText= 'post id - ' + commentItem.postId;

        let commentsId = document.createElement('div');
        commentsId.innerText= 'id - ' + commentItem.id;

        let commentsName = document.createElement('div');
        commentsName.innerText= 'Name - ' + commentItem.name;

        let commentsEmail = document.createElement('div');
        commentsEmail.innerText= 'Email - ' + commentItem.email;



commentsDiv.append(commentsIdDiv, commentsId, commentsName, commentsEmail)
commentDiv.appendChild(commentsDiv)
    }
})