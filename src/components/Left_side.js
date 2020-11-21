import React, { useState, useEffect } from "react";
import styles from "./Left.module.css";
const Left_side = (props) => {
  return (
    <div className={styles.container}>
      {props.port.length > 0 ||
      props.nicar.length > 0 ||
      props.mars.length > 0 ? (
        <React.Fragment>
          {props.port.length > 0 && (
            <div className={styles.sub_container}>
              <div className={styles.title}>Portugal</div>
              <ul className={styles.ul}>
                {props.port.map((item) => {
                  return (
                    <li className={styles.li}>
                      <div className={styles.value}>{item.value}</div>
                      <div
                        className={styles.delete}
                        onClick={() =>
                          props.deleteHandle(item.value, "portugal")
                        }
                      >
                        {" "}
                        X
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {props.nicar.length > 0 && (
            <div className={styles.sub_container}>
              {" "}
              <div className={styles.title}>Nicaragua</div>
              <ul className={styles.ul}>
                {props.nicar.map((item) => {
                  return (
                    <li className={styles.li}>
                      <div className={styles.value}>{item.value}</div>
                      <div
                        className={styles.delete}
                        onClick={() =>
                          props.deleteHandle(item.value, "nicaragua")
                        }
                      >
                        {" "}
                        X
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {props.mars.length > 0 && (
            <div className={styles.sub_container}>
              {" "}
              <div className={styles.title}>Marshall Islands</div>
              <ul className={styles.ul}>
                {props.mars.map((item) => {
                  return (
                    <li className={styles.li}>
                      <div className={styles.value}>{item.value}</div>
                      <div
                        className={styles.delete}
                        onClick={() =>
                          props.deleteHandle(item.value, "marshall")
                        }
                      >
                        {" "}
                        X
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className={styles.error}>No Value Selected</div>
      )}
    </div>
  );
};

export default Left_side;
