import React from 'react';
import classes from './Output.css';

const output = (props) => {
  return(
    <div className={classes.Output}>
      <div className={classes.Row}>
        <p>Name: </p>
        <p>{props.name}</p>
      </div>
      <div className={classes.Row}>
        <p>Email: </p>
        <p>{props.email}</p>
      </div>
      <div className={classes.Row}>
        <p>Phone: </p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default output;
