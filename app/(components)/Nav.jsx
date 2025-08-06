import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Styles } from "../styles/styles"; // Ensure this path is correct

const Nav = () => {
  return (
    <nav className="flex justify-content-center items-center p-4 gap-2">
      <div className={Styles.iconContainer}>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className={Styles.icon} />
        </Link>
      </div>
      <div className={Styles.iconContainer}>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className={Styles.icon} />
        </Link>
      </div>
      <div className={`absolute right-3.5`}>
        <p className={Styles.icon}>Demo Mode</p>
      </div>
    </nav>
  );
};

export default Nav;
