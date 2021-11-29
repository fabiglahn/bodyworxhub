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
      <HomeIcon
        fill={
          activeLink === "home"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <OutdoorIcon
        fill={
          activeLink === "outdoor"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <LocationsIcon
        fill={
          activeLink === "locations"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <OnlineIcon
        fill={
          activeLink === "online"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
      <ProfileIcon
        fill={
          activeLink === "profile"
            ? "var(--color-primary-accent)"
            : "var(--color-text-main)"
        }
      />
    </nav>
  );
}
