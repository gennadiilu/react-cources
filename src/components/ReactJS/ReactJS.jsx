import React from 'react';
import Button from '../Button';
import ToggleButton from '../ToggleButton';

const displayName = 'ReactJS';

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
      </div>
    </main>
  );
}

ReactJS.displayName = displayName;

export default ReactJS;
