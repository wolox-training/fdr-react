import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from '@redux/store';
import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import bookActions from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
    // TODO to implement the dispatch
  }

  // TODO to implement the dispatch
  onSearch = value => {
    this.props.getBooks();
    this.props.searchBook(value);
  };

  // TODO to implement the dispatch
  addToCart = item => {};

  // TODO to implement the dispatch
  addItem = itemId => {};

  // TODO to implement the dispatch
  removeItem = itemId => {};

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks()),
  searchBook: value => dispatch(bookActions.searchBook(value))
});

App.propTypes = {
  getBooks: PropTypes.func,
  searchBook: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
