import React from "react";

function ChosenPro({ image, title, price, soni,product,id }) {
  // src/AddTask.js
  const chosenPro = () => {
    // const hold = product.find((item) => item.id === id);
    console.log(product)
// console.log(hold)
  };
  return (
    <div>
      <div className="bas_pro">
        <img width={"200px"} src={image} alt="" />
        <div className="right">
          <p> name:{title}</p>
          <p>price:{price}</p>
          <p>numb:{soni}</p>
          <p>all $:{parseInt(price * soni)} </p>
          <button onClick={chosenPro}>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default ChosenPro;
