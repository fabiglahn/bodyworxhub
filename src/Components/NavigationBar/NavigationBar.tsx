import styles from "./NavigationBar.module.css";
import OutdoorIcon from "./assets/outdoor";
import LocationsIcon from "./assets/locations";
import HomeIcon from "./assets/home";
import OnlineIcon from "./assets/online";
import ProfileIcon from "./assets/profile";

type NavigationBarProps = {
  activeLink?: "home" | "outdoor" | "locations" | "online" | "profile";
};

export default function NavigationBar({ activeLink }: NavigationBarProps) {
  return (
    <nav className={styles.navigationBar}>
      <a href="./home">
        <HomeIcon
          fill={
            activeLink === "home"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </a>
      <a href="./outdoor">
        <OutdoorIcon
          fill={
            activeLink === "outdoor"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </a>
      <LocationsIcon
        fill={
          activeLink === "locations"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <a href="./online">
        <OnlineIcon
          fill={
            activeLink === "online"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </a>
      <a href="./profile">
        <ProfileIcon
          fill={
            activeLink === "profile"
              ? "var(--color-primary-accent)"
              : "var(--color-text-main)"
          }
        />
      </a>
    </nav>
  );
}
