import React from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Header({ search, handleChange, handleSubmit }) {
  return (
    <header className="header">
      <section className="container gap spaceb">
        <Logo />
        <Search
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </header>
  );
}
