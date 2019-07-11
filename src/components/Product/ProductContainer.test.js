import React from 'react';
import { mount } from 'enzyme';
import { createSink } from 'recompose';

import { enhance } from './ProductContainer';

describe('Given the ProductContainer enhancer', () => {
  const testProps = {
    id: 1,
    name: 'Product 1',
    onRemove: jest.fn()
  };

  let providedProps;

  describe('when the enhancer is applied', () => {
    beforeEach(() => {
      const DummyContainer = enhance(
        createSink(props => {
          providedProps = props;
        })
      );

      mount(<DummyContainer {...testProps} />);
    });

    it('should pass provided properties', () => {
      expect(providedProps).toMatchObject(testProps);
    });

    describe('and the handleRemove is called', () => {
      beforeEach(() => {
        providedProps.handleRemove();
      });

      it('should call the onRemove handler', () => {
        expect(testProps.onRemove).toHaveBeenCalledWith(testProps.id);
      });

      it('should set isRemoved to true', () => {
        expect(providedProps.isRemoved).toBe(true);
      });
    });
  });
});
