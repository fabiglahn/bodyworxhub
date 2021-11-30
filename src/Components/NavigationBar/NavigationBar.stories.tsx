import NavigationBar from "./NavigationBar";

export default {
  component: NavigationBar,
  title: "Components/NavigationBar",
};

export const Home = () => <NavigationBar activeLink="home" />;
export const Outdoor = () => <NavigationBar activeLink="outdoor" />;
export const Locations = () => <NavigationBar activeLink="locations" />;
export const Online = () => <NavigationBar activeLink="online" />;
export const Profile = () => <NavigationBar activeLink="profile" />;
