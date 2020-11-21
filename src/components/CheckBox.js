import React, { useState, useEffect } from "react";
import styles from "./Right.module.css";
const CheckBox = (props) => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <li className={styles.li}>
      <input
        key={props.value}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
        onChange={(e) => props.checkHandle(e, props.listname)}
        className={styles.input}
      />
      <div className={styles.value}>{props.value}</div>
    </li>
  );
};

export default CheckBox;
