import Card from "./components/UI/Card";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import UserInfosCard from "./components/UserInfosCard";

import "./App.css";
import { useEffect, useState } from "react";

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

  return (
    <Card>
      <Navbar
        setBodyLight={setBodyLight}
        setThemeLight={setThemeLight}
        isLight={themeLight}
        bodyLight={bodyLight}
      />
      <SearchInput
        searchUser={searchUser}
        onEnterUser={searchInputHandler}
        searchUserHandler={searchUserHandler}
        noResult={noResult}
        isLight={themeLight}
      />
      <UserInfosCard
        avatar={user.avatar_url}
        login={user.login}
        name={user.name}
        created={user.created_at}
        bio={user.bio}
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
        location={user.location}
        website={user.blog}
        twitter={user.twitter_username}
        company={user.company}
        url={user.html_url}
        isLight={themeLight}
      />
    </Card>
  );
}

export default App;
