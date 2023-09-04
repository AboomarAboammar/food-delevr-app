import React from "react";
import classes from "./NavBar.module.css";
import { AiOutlineLogout, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const NavBar = () => {
  const session =useSession()
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href="/" className={classes.left}>
          <h2>Delivery App</h2>
        </Link>
        <ul className={classes.center}>
          <li className={classes.listitem}>Home</li>
          <li className={classes.listitem}>About</li>
          <li className={classes.listitem}>Contact us</li>
          <li className={classes.listitem}>Featured</li>
        </ul>
        <div className={classes.right}>
          {session.status !=="authenticated"
          ?(
            <>
            <AiOutlineMail size={30} />
          <button onClick={()=>signIn()} className={classes.signin}>Signin</button>
            </>
          )
          :<>
          <div className={classes.logout} onClick={()=>signOut()}>
            Logout <AiOutlineLogout/>

          </div>
          <Link className={classes.addmeal} href="/addmeal">Addmeal</Link>
          </>
          }
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
