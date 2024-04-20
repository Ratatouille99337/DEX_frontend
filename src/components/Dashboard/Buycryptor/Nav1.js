import React from "react";
import "../../../assets/css/Buycryptor/nav.scss";
import { Link, Redirect } from "react-router-dom";

const Nav1 = () => {
  return (
    <div className="container">
      <div className="bnav">
        <div className="nav">
          <div className="view">
            <Link to="/buycryptor1">
              <p>Buy & Sell</p>
            </Link>

            <Link to="/recurring1">
              <p>Recurring Buy</p>
            </Link>

            <Link to="/deposit1">
              <p>Deposit</p>
            </Link>

            <Link to="/withdraw1">
              <p>Withdraw</p>
            </Link>
          </div>
          <div className="action">
            <div className="p">
              <svg
                class="bn-svg text-[20px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>History</p>
            </div>
            <div className="p">
              <svg
                class="bn-svg text-[20px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Nav1;
