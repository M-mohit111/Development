import { useEffect, useState } from "react";

function Body() {
  const [profile, setProfile] = useState([]);
  const [count, setCount] = useState("");

  async function fetchprofile() {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchprofile();
  }, []);

  return (
    <div>
      <div className="search-container">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          className="input"
          placeholder="Search here..."
        />
        <button onClick={() => fetchprofile()}>Search Profile</button>
      </div>

      <div className="profile">
        {Array.isArray(profile) &&
          profile.map((value) => {
            return (
              <div key={value.id} className="cards">
                <img src={value.avatar_url} alt={`${value.login}'s avatar`} />
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Body;