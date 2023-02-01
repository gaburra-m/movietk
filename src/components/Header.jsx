import React from "react";
import Logo from "./Logo";
import Search from "./Search";


export default function Header() {
  return (
    <header className="header">
      <section className="container gap spaceb">
        <Logo />
        <Search />
      </section>
    </header>
  );
}
