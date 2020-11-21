import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import styles from "./Right.module.css";
const Right_side = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.country}>Portugal</div>
        <ul className={styles.ul}>
          {props.port.map((item) => {
            return (
              <CheckBox
                key={item.value}
                {...item}
                checkHandle={props.checkHandle}
                listname="portugal"
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.country}>Nicaragua</div>
        <ul className={styles.ul}>
          {props.nicar.map((item) => {
            return (
              <CheckBox
                key={item.value}
                {...item}
                checkHandle={props.checkHandle}
                listname="nicaragua"
              />
            );
          })}
        </ul>
      </div>

      <div className={styles.sub_container}>
        <div className={styles.country}>Marshall Islands</div>
        <ul className={styles.ul}>
          {props.mars.map((item) => {
            return (
              <CheckBox
                key={item.value}
                {...item}
                checkHandle={props.checkHandle}
                listname="marchall"
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Right_side;
