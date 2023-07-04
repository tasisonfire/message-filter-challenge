import "./App.css";
import { useState } from "react";

//mock data
import userData from "./userData";

function App() {
  const [showData, setShowData] = useState(userData);
  const [dataFind, setDataFind] = useState([]);
  const [value, setValue] = useState("");

  const findData = (event) => {
    setValue(event.target.value);
    var query = event.target.value;
    // console.log(query);
    if (query.length > 0) {
      const array = showData.filter(
        (showData) =>
          showData.first_name.includes(query)
      );
      query = array;
      setDataFind([...query]);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header__box">
          <button className="profile__back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="14px"
              height="14px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#878787"
                d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
              ></path>
            </svg>
          </button>
          <span className="profile__name">Your Name</span>
          <span className="profile__location">Chiangmai, Thailand</span>
          <input
            type="text"
            placeholder="Search"
            className="profile__search"
            value={value}
            onChange={findData}
          />
        </div>
      </div>

      <div className="main">
        <div className="user__list">
          <ul>
            {showData.map((user) => {
              return (
                <li key={user.id}>
                  <div className="user__list__box">
                    <div className="user__list__box__image">
                      <img src={user.avatar} alt="" />
                    </div>
                    <div className="user__list__box__detail">
                      <div className="user__list__box__detail--name">
                        {user.first_name} {user.last_name}
                      </div>
                      <div className="user__list__box__detail--email">
                        {user.email}
                      </div>
                    </div>
                    <div className="user__list__box__contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1.5em"
                        height="1.5em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#c3c3c3"
                          d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2∏-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586L9.414 16H5V4h14v12z"
                        ></path>
                        <path fill="#c3c3c3" d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                      </svg>
                    </div>
                  </div>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <ul>
        {showData.map((user) => {
          return <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
        })}
      </ul> */}
    </div>
  );
}

export default App;
