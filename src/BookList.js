import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf.js'
import * as BooksAPI from './BooksAPI.js'

class BookList extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            console.log(books)
            this.setState({books: books})
        })
    }

    onBookChangeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf)
        book.shelf = newShelf
        this.setState((prevState) => ({
            books: prevState.books.filter((b) => b.id !== book.id).concat(book)
        }))
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.state.books.filter((b) => b.shelf === "currentlyReading")}
                                   title={"Currently Reading"} onBookChangeShelf={this.onBookChangeShelf}/>
                        <BookShelf books={this.state.books.filter((b) => b.shelf === "wantToRead")}
                                   title={"Want to Read"} onBookChangeShelf={this.onBookChangeShelf}/>
                        <BookShelf books={this.state.books.filter((b) => b.shelf === "read")}
                                   title={"Read"}
                                   onBookChangeShelf={this.onBookChangeShelf}/>
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