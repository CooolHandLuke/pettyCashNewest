// Initially, the posts array is empty
let posts = [];

function handlePostClick(postId) {
    fetch(`/api/shoot/${postId}/images`)
        .then(response => response.json())
        .then(images => {
            const imagePosts = images.map(image => ({
                image,
                title: '', // Set title appropriately if available
            }));
            generateMasonryGrid(Math.min(4, imagePosts.length), imagePosts);
            backButton.style.display = 'block'; // Show back button

        })
        .catch(error => {
            console.error('Error fetching additional images:', error);
        });
}

backButton.addEventListener('click', () => {
    // On back button click, regenerate the main gallery and hide the back button
    if (window.innerWidth < 600) {
        generateMasonryGrid(1, posts);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
        generateMasonryGrid(2, posts);
    } else {
        generateMasonryGrid(4, posts);
    }
    backButton.style.display = 'none'; // Hide back button
});

// Fetch the posts array from the server
fetch('/api/posts')
    .then(response => response.json())
    .then(data => {
        // Update the posts array with the data from the server
        posts = data;

        console.log(posts);

        // Now that we have the posts, generate the initial masonry grid
        if (window.innerWidth < 600) {
            generateMasonryGrid(1, posts);
        } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
            generateMasonryGrid(2, posts);
        } else {
            generateMasonryGrid(4, posts);
        }
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });