import React from "react";
import classes from "./Hero.module.css";
import womaneating from "../../public/assets/womaneating.jpg";
import Image from "next/image";
const Hero = () => {
  return (
   <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            what better than ameal with <br /> your loved ones{" "}
          </h2>
          <h5>
            we can help you with the expriance by providing you
            <br /> with amazing food. burgers, spaghetti,pizza.....
            <br /> You Can Get Everything Here
          </h5>
          <div className={classes.buttons}>
            <button className={classes.orderNow}>Order Now</button>
            <button className={classes.seeMore}>See More</button>
          </div>
          <div className={classes.disclaimer}>we close earlier monday</div>
        </div>
        <div className={classes.right}>
          <Image src={womaneating} alt="womaneating" />
        </div>
      </div>
      </div>
   
  );
};

export default Hero;
