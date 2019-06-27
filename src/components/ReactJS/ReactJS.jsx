import React from 'react';
import Button from '../Button';
import ToggleButton from '../ToggleButton';
import Product from '../Product';

const displayName = 'ReactJS';

const handleRemove = id => {
  // eslint-disable-next-line no-console
  console.log(id);
};

function ReactJS() {
  return (
    <main>
      <div>
        <div>
          <Button text="Button" value="button1" />
        </div>
        <div>
          <ToggleButton text="Toggle Button" value="button3" toggled />
        </div>
        <div>
          <Product name="Ball 1" id={1} onRemove={handleRemove} />
          <Product name="Ball 2" id={2} onRemove={handleRemove} />
          <Product name="Ball 3" id={3} onRemove={handleRemove} />
          <Product name="Ball 4" id={4} onRemove={handleRemove} />
        </div>
      </div>
    </main>
  );
}

ReactJS.displayName = displayName;

export default ReactJS;
