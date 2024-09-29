import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import evenimg from "../../assets/evenimages.jpg";
import logo from "../../assets/Asset 1.svg";

export const Home = () => {
  const [value, setValue] = useState(''); // Initialize state with an empty string
  const navigate = useNavigate();

  const handeljoin = useCallback((e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <div className="page">
        <div className="main">
          <div className="main-wrapper">
            <form>
              <div className="form-message"></div>
              <div className="form-body">
                <div className="text-center">
                  <img src={logo} alt="logo" />
                </div>
                <div className="form-message-body"> Welcome To Platform 👋</div>
                <input
                  value={value} // Controlled input
                  onChange={(e) => setValue(e.target.value)} // Update state on input change
                  type="text"
                  placeholder="Enter Meeting Id"
                />
                <button type="submit" onClick={handeljoin}>Enter Meeting</button>
              </div>
            </form>
          </div>
          <div className="main-footer">
            <hr />
            <div className="copyright">
              Copyright © 2021 All rights reserved | Created by VideocallConnect
            </div>
          </div>
        </div>

        <div className="pic">
          <img src={evenimg} alt="imgs" />
        </div>
      </div>
    </div>
  );
};
