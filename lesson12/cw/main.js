// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий
//     блок всі коментарі поточного поста


let postsDiv = document.getElementsByClassName('posts')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const postItem of value) {
            let postDiv = document.createElement('div');
            postDiv.innerText = `post id - ${postItem.id}  ${postItem.body}`;
            let button = document.createElement('button')
            button.innerText = 'show comments';
            button.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let commentsDiv = document.createElement('div')
                        commentsDiv.classList.add('post-comments')
                        for (const commentItem of value) {
                            let coment = document.createElement('div')
                            coment.innerText = commentItem.body;

                            commentsDiv.appendChild(coment)
                        }


                        postDiv.appendChild(commentsDiv)
                    })

            }

            postDiv.append(button)
            postsDiv.append(postDiv)

        }
    })
