import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import PropTypes from "prop-types";

class SearchBooks extends Component {

    static propTypes = {
        booksOnShelves: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired
    }

    state = {
        booksSearchResult: []
    }

    updateQuery = (value) => {
        console.log(value)
        const {booksOnShelves} = this.props
        if (value) {
            BooksAPI.search(value).then((books) => {
                if (books && books.length > 0) {
                    console.log(books)
                    books = books.map((book) => {
                        const bookOnShelf = booksOnShelves.find(b => b.id === book.id);
                        book.shelf = bookOnShelf ? bookOnShelf.shelf : "none"
                        return book
                    })

                    this.setState({booksSearchResult: books})

                }
                else {
                    this.setState({booksSearchResult: []})
                }
            })
        }
        else {
            this.setState({booksSearchResult: []})
        }
    }

    render() {
        const {booksSearchResult} = this.state
        const {onBookChangeShelf} = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksSearchResult.map((b) => (
                            <li key={b.id}>
                                <Book book={b}
                                      onChangeShelf={onBookChangeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks