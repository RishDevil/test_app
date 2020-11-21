import React, { useState, useEffect } from "react";
import styles from "./Container.module.css";
import Left_side from "./Left_side";
import Right_side from "./Right_side";

const Container = () => {
  //////////////List1///////////////////////
  const [list1, setlist1] = useState([
    { value: "Aasiya Jayavant", isChecked: false },
    {
      value: "Luvleen Lawrence",
      isChecked: false,
    },
    { value: "Rey Mibourne", isChecked: false },
    { value: "Cayla Brister", isChecked: false },
  ]);
  /////////////////////////////list2

  const [list2, setlist2] = useState([
    { value: "Deveedass Nandi", isChecked: false },
    {
      value: "Obasey Chidy",
      isChecked: false,
    },
    { value: "Xenie Dolezeloova", isChecked: false },
    { value: "Ezequiel Dengra", isChecked: false },
  ]);
  //////////////////////////list 3

  const [list3, setlist3] = useState([
    { value: "Aron Almaraz", isChecked: false },
    {
      value: "Jelena Denisova",
      isChecked: false,
    },
  ]);

  ///////////////////////////////////////////////////////////////

  const [change, setchange] = useState(false);

  ///////////////////////////////////////////////displayList1
  const [displayList1, setdisplayList1] = useState([]);

  ///////////////////////////////////////////////displayList2
  const [displayList2, setdisplayList2] = useState([]);

  /////////////////////////////////////displayList3

  const [displayList3, setdisplayList3] = useState([]);

  ////////////////////////handle click on checkBox

  const checkHandle = (e, name) => {
    ////////////////////////////////////// list1

    if (name === "portugal") {
      const list = list1;

      list.map((item) => {
        if (item.value === e.target.value) {
          if (!item.isChecked) {
            const list = displayList1;
            list.push(item);
            setdisplayList1(list);
          } else {
            const list = displayList1;
            const newList = list.filter((val) => {
              return val.value != e.target.value;
            });
            console.log("change", newList);
            setdisplayList1(newList);
          }
          item.isChecked = !item.isChecked;

          setchange(!change);
        }
      });

      setlist1(list);
    }

    ////////////////////////////////////// list2

    if (name === "nicaragua") {
      const list = list2;

      list.map((item) => {
        if (item.value === e.target.value) {
          if (!item.isChecked) {
            const list = displayList2;
            list.push(item);
            setdisplayList2(list);
          } else {
            const list = displayList2;
            const newList = list.filter((val) => {
              return val.value != e.target.value;
            });
            console.log("change", newList);
            setdisplayList2(newList);
          }
          item.isChecked = !item.isChecked;

          setchange(!change);
        }
      });

      setlist2(list);
    }

    ////////////////////////////////////// list3

    if (name === "marchall") {
      const list = list3;

      list.map((item) => {
        if (item.value === e.target.value) {
          if (!item.isChecked) {
            const list = displayList3;
            list.push(item);
            setdisplayList3(list);
          } else {
            const list = displayList3;
            const newList = list.filter((val) => {
              return val.value != e.target.value;
            });
            console.log("change", newList);
            setdisplayList3(newList);
          }
          item.isChecked = !item.isChecked;

          setchange(!change);
        }
      });

      setlist3(list);
    }
  };

  ////////////////////////////////handle delete

  const deleteHandle = (value, name) => {
    ////////////////////////////////////// list1
    if (name === "nicaragua") {
      const list = list2;

      list.map((item) => {
        if (item.value === value) {
          const list = displayList2;
          const newList = list.filter((val) => {
            return val.value != value;
          });
          console.log("change", newList);
          setdisplayList2(newList);

          item.isChecked = !item.isChecked;
        }
        setlist2(list);
      });
    }
    ////////////////////////////////////// list2
    if (name === "portugal") {
      const list = list1;

      list.map((item) => {
        if (item.value === value) {
          const list = displayList1;
          const newList = list.filter((val) => {
            return val.value != value;
          });
          console.log("change", newList);
          setdisplayList1(newList);

          item.isChecked = !item.isChecked;
        }
        setlist1(list);
      });
    }
    ////////////////////////////////////// list3
    if (name === "marchall") {
      const list = list3;

      list.map((item) => {
        if (item.value === value) {
          const list = displayList3;
          const newList = list.filter((val) => {
            return val.value != value;
          });
          console.log("change", newList);
          setdisplayList3(newList);

          item.isChecked = !item.isChecked;
        }
        setlist3(list);
      });
    }
  };

  useEffect(() => {}, [change]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.rightHeader}>
          <div className={styles.home}>Home</div>
          <div className={styles.portfolio}>My Portfolio</div>
          <div className={styles.clients}>clients</div>
          <button className={styles.button}>Get in Touch</button>
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.LeftBody}>
          {" "}
          <Right_side
            port={list1}
            nicar={list2}
            mars={list3}
            checkHandle={checkHandle}
          />
        </div>
        <div className={styles.RigthBody}>
          <Left_side
            port={displayList1}
            nicar={displayList2}
            mars={displayList3}
            deleteHandle={deleteHandle}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
