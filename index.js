// Sample function to simulate updating the user's last activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedLastActivityTime = new Date();
        resolve(updatedLastActivityTime);
      }, 1000);
    });
  }
  
  // Sample function to simulate creating a post
  function createPost(postContent) {
    return new Promise((resolve) => {
      // Assume some post creation logic here
  
      // For simplicity, let's resolve the promise with a mock post object
      const post = {
        content: postContent,
        timestamp: new Date(),
      };
  
      resolve(post);
    });
  }
  
  // Sample function to simulate deleting a post
  function deletePost(post) {
    return new Promise((resolve) => {
      // Assume some post deletion logic here
  
      // For simplicity, let's resolve the promise with a success message
      resolve(`Post deleted: ${post.content}`);
    });
  }
  
  // Function to handle the entire process
  function handlePostCreation(postContent) {
    let createdPost, updatedLastActivityTime;
  
    // Create post and update last activity time in parallel
    Promise.all([
      createPost(postContent),
      updateLastUserActivityTime(),
    ]).then(([post, lastActivityTime]) => {
      createdPost = post;
      updatedLastActivityTime = lastActivityTime;
  
      // Log posts and last activity time
      console.log('All promises resolved. Posts and Last Activity Time:');
      console.log('Posts:', [createdPost]);
      console.log('Last Activity Time:', updatedLastActivityTime);
  
      // Delete the last post
      return deletePost(createdPost);
    }).then((deleteResult) => {
      // Log remaining posts after deletion
      console.log(deleteResult);
      console.log('Remaining Posts:', []);
    }).catch((error) => {
      console.error('Error:', error);
    });
  }
  
  // Example usage
  handlePostCreation('This is a new post');
  