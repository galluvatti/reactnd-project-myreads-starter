import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks.js'
import BookList from './BookList.js'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            if (books && books.length > 0)
                this.setState({books: books})
            else this.setState({books: []})
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
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchBooks
                        booksOnShelves={this.state.books}
                        onBookChangeShelf={this.onBookChangeShelf}
                    />)}/>
                <Route exact path="/" render={() => (
                    <BookList
                        books={this.state.books}
                        onBookChangeShelf={this.onBookChangeShelf}
                    />)}/>
            </div>
        )
    }

}

export default BooksApp
