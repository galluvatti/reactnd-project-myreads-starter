import React, {Component} from 'react'
import Book from "./Book";

class BookShelf extends Component {

    render() {
        const {books, title, onBookChangeShelf} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) =>  (
                                <li key={book.id}>
                                    <Book
                                        // authors={book.authors}
                                        // title={book.title}
                                        // coverURL={book.imageLinks.thumbnail}
                                        // shelf={book.shelf}
                                        // id={book.id}
                                        book = {book}
                                        onChangeShelf = {onBookChangeShelf}
                                    />
                                </li>)
                        )}
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookShelf