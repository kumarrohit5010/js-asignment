//. Write a JavaScript program to display the reading status (i.e. display book name, 
// author name and reading status) of the following books.
var library=[
    {
        author:"Bill Gates",
        title:"The Road Ahead",
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
      },
      {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
      }

];
function displayStatus(library)
{
    console.log(library)
    for(var i=0;i<library.length;i++)
        
        {
            var book=library[i];
            var bookinfo=" " + book.title+ "  written by   " + book.author +".";

        
        if(book.readingStatus)
            {
                console.log("you have already read , " + bookinfo );
            }
            else{
                console.log("you haven't read the , " + bookinfo );
            }
        }
    }
        
displayStatus(library); 