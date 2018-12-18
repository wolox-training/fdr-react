import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bookSelectedPropType, booksPropType } from '@constants/propTypes';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import bookActions from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected, addItem, removeItem } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.props.searchBook} />
          {books && books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected && bookSelected.length ? (
          <ShoppingCart data={bookSelected} addItem={addItem} removeItem={removeItem} />
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
  searchBook: value => {
    dispatch(bookActions.getBooks());
    dispatch(bookActions.searchBook(value));
  },
  addToCart: item => dispatch(bookActions.addToCart(item)),
  addItem: itemId => dispatch(bookActions.addItem(itemId)),
  removeItem: itemId => dispatch(bookActions.removeItem(itemId))
});

App.propTypes = {
  getBooks: PropTypes.func,
  searchBook: PropTypes.func,
  addToCart: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  books: PropTypes.arrayOf(bookSelectedPropType),
  bookSelected: PropTypes.arrayOf(booksPropType)
};

App.defaultProps = {
  books: [],
  bookSelected: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
