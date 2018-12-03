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
    books: this.props.books,
    bookSelected: this.props.bookSelected
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books } = store.getState();
      this.setState({ books: books.books, bookSelected: books.bookSelected });
    });
    // TODO to implement the dispatch
    this.props.getBooks();
  }

  onSearch = value => {
    this.props.getBooks();
    this.props.searchBook(value);
  };

  addToCart = item => {
    this.props.addToCart(item);
  };

  addItem = itemId => {
    this.props.addItem(itemId);
  };

  removeItem = itemId => {
    this.props.removeItem(itemId);
  };

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
  books: state.books.books,
  bookSelected: state.books.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks()),
  searchBook: value => dispatch(bookActions.searchBook(value)),
  addToCart: item => dispatch(bookActions.addToCart(item)),
  addItem: itemId => dispatch(bookActions.addItem(itemId)),
  removeItem: itemId => dispatch(bookActions.removeItem(itemId))
});

App.propTypes = {
  getBooks: PropTypes.func,
  searchBook: PropTypes.func,
  addToCart: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
};

App.defaultProps = {
  books: [],
  bookSelected: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
