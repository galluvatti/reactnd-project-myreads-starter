import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf.js'
import PropTypes from "prop-types";

class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const {books, onBookChangeShelf} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={books.filter((b) => b.shelf === "currentlyReading")}
                                   title={"Currently Reading"} onBookChangeShelf={onBookChangeShelf}/>
                        <BookShelf books={books.filter((b) => b.shelf === "wantToRead")}
                                   title={"Want to Read"} onBookChangeShelf={onBookChangeShelf}/>
                        <BookShelf books={books.filter((b) => b.shelf === "read")}
                                   title={"Read"}
                                   onBookChangeShelf={onBookChangeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList