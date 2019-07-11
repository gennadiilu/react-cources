import {
  compose,
  setDisplayName,
  withHandlers,
  //  renderComponent,
  setPropTypes,
  pure,
  //  branch,
  withState,
  withProps
} from 'recompose';
import PropTypes from 'prop-types';
import Product from './Product';
// import Product2 from './Product2';

export const enhance = compose(
  setDisplayName('ProductContainer'),
  withProps({ userType: 'vip' }),
  setPropTypes({
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
  }),
  withState('isRemoved', 'setIsRemoved', false),
  withHandlers({
    handleRemove: ({ id, onRemove, setIsRemoved }) => () => {
      setIsRemoved(true);
      onRemove(id);
    }
  }),
  pure
  // branch(({ userType }) => userType === 'vip', renderComponent(Product))
);

export default enhance(Product);
