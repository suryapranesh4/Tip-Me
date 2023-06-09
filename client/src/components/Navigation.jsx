import React from "react";
import "./styles.css";

export default function AppTitle({
  items,
  selectedItem,
  setSelectedItem,
  currentAccount,
}) {
  return (
    <div className="NavBar">
      {currentAccount ? (
        <div>
          {items.map((item, i) => {
            let { name, id, icon, iconSelected } = item;
            return (
              <div
                key={i}
                className={
                  selectedItem == id ? "eachItem selected" : "eachItem"
                }
                onClick={() => {
                  selectedItem != id ? setSelectedItem(id) : null;
                }}
              >
                <img
                  src={selectedItem == id ? iconSelected : icon}
                  alt="navIcon"
                  className="navIcon"
                  height={20}
                  width={20}
                />
                {name}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="eachItem selected">Home</div>
      )}
    </div>
  );
}
