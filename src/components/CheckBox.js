import React, { useState, useEffect } from "react";
import styles from "./Right.module.css";
import Checkbox from "@material-ui/core/Checkbox";
const CheckBox = (props) => {
  console.log(props);
  useEffect(() => {}, []);
  return (
    <div className={styles.li}>
      <div className={styles.input_container}>
        {" "}
        <input
          key={props.value}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
          onChange={(e) => props.checkHandle(e, props.listname)}
          className={styles.input}
          inputProps={{ "aria-label": "purple checkbox" }}
        />
        <span className={styles.span}></span>
      </div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
};

export default CheckBox;
