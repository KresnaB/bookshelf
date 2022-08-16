import { createSignal } from "solid-js";
import { BookList } from "./component/BookList";
import { AddBook } from "./component/AddBook";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Bookshelf(props) {
  
  const [books, setBooks] = createSignal(initialBooks);

  return(
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()}/>
      <AddBook setBooks={setBooks}/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Bookshelf name="solid"/>
    </div>
  );
}

export default App;
