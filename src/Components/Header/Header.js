import React from "react";
import styles from "./Header.module.css";

export default () => (
  <header>
    <ul className={styles.navList}>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV Shows</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
