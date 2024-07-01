/*
Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/

function invokeAfterDelay(callback) 
{
    setTimeout(callback, 2000); // 2000 milliseconds = 2 seconds
}

// Example usage:
function myCallback() 
{
    console.log('Callback function invoked after 2 seconds');
}

invokeAfterDelay(myCallback);
