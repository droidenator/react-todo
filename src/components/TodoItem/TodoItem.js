import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <span>
        <input
          type="checkbox"
          value="on"
          checked={props.item.isChecked}
          onChange={props.handler}
        />
      </span>
      <span>{props.item.label}</span>
    </div>
  );
}

export default TodoItem;
