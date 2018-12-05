import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '@redux/store';
import { bookSelectedPropType } from '@constants/propTypes';
import shopingCartActions from '@redux/shoppingCart/actions';
import Button from '@components/Button';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends Component {
  state = {
    open: this.props.open
  };

  componentDidMount() {
    store.subscribe(() => {
      const { shoppingCart } = store.getState();
      this.setState({ open: shoppingCart.open });
    });
  }

  getOpen = () => {
    this.props.getOpen();
  };

  getOpen = () => {
    this.props.getClose();
  };

  toggleContent = () => {
    if (this.props.open) {
      this.props.getClose();
    } else {
      this.props.getOpen();
    }
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{data.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {data.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  open: state.shoppingCart.open
});

const mapDispatchToProps = dispatch => ({
  getOpen: () => dispatch(shopingCartActions.getOpen()),
  getClose: () => dispatch(shopingCartActions.getClose())
});

ShoppingCart.propTypes = {
  data: PropTypes.arrayOf(bookSelectedPropType).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  getOpen: PropTypes.func,
  getClose: PropTypes.func,
  open: PropTypes.bool
};

ShoppingCart.defaultProps = {
  open: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
