import { createContext, useState, useEffect } from "react";

import Card from "./components/UI/Card";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import UserInfosCard from "./components/UserInfosCard";

import "./App.css";

export const AppContext = createContext();

function App() {
  const [themeLight, setThemeLight] = useState(false);
  const [bodyLight, setBodyLight] = useState(false);

  const [user, setUser] = useState({});
  const [searchUser, setSearchUser] = useState("");
  const [noResult, setNoResult] = useState(false);

  const searchUsers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    // if error
    if (!response.ok) {
      setNoResult(true);
    }

    const data = await response.json();

    let date = new Date(data.created_at);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let finalDate =
      date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

    data.created_at = finalDate;

    setUser(data);
  };

  useEffect(() => {
    searchUsers("octocat");
  }, []);

  //
  const searchInputHandler = (e) => {
    setSearchUser(e.target.value);
  };

  //
  const searchUserHandler = () => {
    searchUsers(searchUser);
    setNoResult(false);
  };

  //
  const userData = {
    avatar: user.avatar_url,
    login: user.login,
    name: user.name,
    created: user.created_at,
    bio: user.bio,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    location: user.location,
    website: user.blog,
    twitter: user.twitter_username,
    company: user.company,
    url: user.html_url,
    isLight: themeLight,
  };

  // CONTEXT --->
  const appContext = {
    searchUser,
    themeLight,
    setThemeLight,
    bodyLight,
    setBodyLight,
    user,
    noResult,
    searchInputHandler,
    searchUserHandler,
    userData,
  };
  //

  return (
    <Card>
      <AppContext.Provider value={appContext}>
        <Navbar />
        <SearchInput />
        <UserInfosCard />
      </AppContext.Provider>
    </Card>
  );
}

export default App;
