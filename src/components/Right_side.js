import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import styles from "./Right.module.css";
const Right_side = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.country}>Portugal</div>
        <div className={styles.ul}>
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
        </div>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.country}>Nicaragua</div>
        <div className={styles.ul}>
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
        </div>
      </div>

      <div className={styles.sub_container}>
        <div className={styles.country}>Marshall Islands</div>
        <div className={styles.ul}>
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
        </div>
      </div>
    </div>
  );
};

export default Right_side;
