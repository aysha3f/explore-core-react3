import Book from "./Book";
export default function Library({books}){
    return (
        <div>
           <h2>My National Centeral Library</h2> 
           <p>Book Collection: {books.length}</p>
           <p>address: </p>
           <ul>
         {
         books.map(book => <Book key={book.id} book ={book}></Book> )
            }
           </ul>
        </div>
    )
}