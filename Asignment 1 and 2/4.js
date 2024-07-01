/*

3. You will create a function that simulates fetching user data from two different sources. The function should combine the results and return a single object with all the user information. You will use Promises to handle the asynchronous operations.
    
    Instructions
    
    1. **Create two mock data fetching functions:**
        - `fetchUserProfile(userId)`: This function simulates fetching a user profile.
        - `fetchUserPosts(userId)`: This function simulates fetching user posts.
    2. **Create a function `getUserData(userId)` that:**
        - Fetches the user profile and user posts using the above mock data fetching functions.
        - Combines the results into a single object.
        - Returns a Promise that resolves with the combined user data.
    3. **Handle errors gracefully.**

*/
// Mock data fetching functions
function fetchUserProfile(userId) 
{
    return new Promise((resolve, reject) => {
        // Simulating fetching user profile asynchronously
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
            } else {
                reject(new Error('User profile not found'));
            }
        }, 1000); // Simulating delay of 1 second
    });
}

function fetchUserPosts(userId) 
{
    return new Promise((resolve, reject) => {
        // Simulating fetching user posts asynchronously
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 1, title: 'First Post', content: 'This is the first post.' },
                    { id: 2, title: 'Second Post', content: 'This is the second post.' }
                ]);
            } else {
                reject(new Error('User posts not found'));
            }
        }, 1500); // Simulating delay of 1.5 seconds
    });
}

// Function to fetch user data
function getUserData(userId) 
{
    // Using Promise.all to fetch user profile and user posts concurrently
    return Promise.all([
        fetchUserProfile(userId),
        fetchUserPosts(userId)
    ]).then(([profile, posts]) => {
        // Combining the results into a single object
        return {
            profile: profile,
            posts: posts
        };
    }).catch(error => {
        // Handling errors gracefully
        console.error('Error fetching user data:', error.message);
        throw error; // rethrowing the error for further handling if needed
    });
}

// Example usage:
const userId = 1;
getUserData(userId)
    .then(userData => {
        console.log('User data:', userData);
    })
    .catch(error => {
        console.error('Error in example usage:', error.message);
    });
