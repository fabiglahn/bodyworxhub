import styles from "./NavigationBar.module.css";
import OutdoorIcon from "./assets/outdoor";
import LocationsIcon from "./assets/locations";
import HomeIcon from "./assets/home";
import OnlineIcon from "./assets/online";
import ProfileIcon from "./assets/profile";
import { Link } from "react-router-dom";

type NavigationBarProps = {
  activeLink?: "home" | "outdoor" | "locations" | "online" | "profile";
};

export default function NavigationBar({ activeLink }: NavigationBarProps) {
  return (
    <nav className={styles.navigationBar}>
      <Link to="/home">
        <HomeIcon
          fill={
            activeLink === "home"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </Link>
      <Link to="/outdoor">
        <OutdoorIcon
          fill={
            activeLink === "outdoor"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </Link>
      <LocationsIcon
        fill={
          activeLink === "locations"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <Link to="/online">
        <OnlineIcon
          fill={
            activeLink === "online"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </Link>
      <Link to="/profile">
        <ProfileIcon
          fill={
            activeLink === "profile"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </Link>
    </nav>
  );
}
