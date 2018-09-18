import React, {Component} from 'react'
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired
    }

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