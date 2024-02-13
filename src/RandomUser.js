import { Card } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import './RandomUser.css'

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="random-user-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card className="user-card">
          <div className="user-info">
            <img className="user-avatar" src={user.picture.large} alt="User" />
            <div className="user-details">
              <div className="user-name">
                {user.name.first} {user.name.last} 
              </div>
              <div className="user-gender">
                {user.gender}
              </div>
              <div className="user-phone">{user.phone}</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default RandomUser;
