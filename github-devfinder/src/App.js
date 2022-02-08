import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [theme, setTheme] = useState(false);
  const [value, setValue] = useState("");
  const [developer, setDeveloper] = useState(null);
  const [found, setFound] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchUser = useCallback(async (username) => {
    if (username.length === 0) return;
    setValue("");
    let url = `https://api.github.com/users/${username}`;
    try {
      let response = await fetch(url);
      let result = await response.json();
      setDeveloper({
        avatar: result.avatar_url,
        name: result.name,
        bio: result.bio,
        dateJ: result.created_at.split("T")[0],
        username: result.login,
        link: result.html_url,
        repos: result.public_repos,
        followers: result.followers,
        following: result.following,
        webSite: result.blog,
        location: result.location,
        twitter: result.twitter_username,
        work:result.company,
      });
      setLoading(true);
    } catch (err) {
      if (loading) {
        setFound(false);
        setTimeout(() => setFound(true), 1000);
      }
    }
  },[loading]);
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "false");
    } else {
      setTheme((prev) => {
        return localStorage.getItem("theme") === "true" ? true : false;
      });
    }
    searchUser("Islemmedjahdi");
  }, [searchUser]);
  const toggleTheme = () => {
    let newTheme = !theme;
    localStorage.setItem("theme", newTheme.toString());
    setTheme(newTheme);
  };
  return (
    <div className={`App ${!theme ? "" : "dark"}`}>
      <div className="min-h-screen p-4 flex flex-col items-center bg-gray-50 dark:bg-[#141d2f] transition duration-700">
        <Header
          reset={() => searchUser("IslemMedjahdi")}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Search
          found={found}
          value={value}
          setValue={setValue}
          search={searchUser}
        />
        <Main
          {...developer}
          loading={loading}
          retry={() => searchUser("IslemMedjahdi")}
        />
      </div>
    </div>
  );
}

export default App;
