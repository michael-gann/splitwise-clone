// import { useState, useEffect } from "react";

const DetailView = ({ txn }) => {
  // const [showMenu, setShowMenu] = useState(false);

  // const showDetail = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeDetail = () => {
  //     setShowMenu(false);
  //   };

  //   document.addEventListener("click", closeDetail);

  //   return () => document.removeEventListener("click", closeDetail);
  // }, [showMenu]);

  return (
    <>
      <div>RECEIPT DIV</div>
      <textarea></textarea>
      <div>COMMENT DIV</div>
    </>
  );
};

export default DetailView;
