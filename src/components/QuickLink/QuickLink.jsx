import React from 'react';
import "./QuickLink.css";

import { AiFillCaretDown } from "react-icons/ai";

function QuickLink() {
  return (
    <div id="portfolio_header-quicklink">
      <button id="portfolio_header-quicklink_box">
        <h3>See My Projects</h3>
        <AiFillCaretDown id="portfolio_header-quicklink_box_down" />
      </button>
    </div>
  )
}

export default QuickLink