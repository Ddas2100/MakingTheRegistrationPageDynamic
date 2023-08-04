const posts = [];
function createPost(post) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);
            console.log(posts);
            res(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const lastActivityTime = new Date().getTime();
            res(lastActivityTime);
        }, 1000);
    });
}

Promise.all([
    createPost({ title: "Post Five", body: "This is Post Five" }),
    updateLastUserActivityTime().then((succ) =>
    console.log("Last Active Time:", succ)
    ),
]);