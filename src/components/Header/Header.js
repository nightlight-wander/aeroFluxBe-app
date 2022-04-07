import React from 'react';
import { LogoHead } from './LogoHead/LogoHead';
import { CatLinksHead } from './CatLinksHead/CatLinksHead';
import { SearchHead } from './SearchHead/SearchHead';
import { ActionsHead } from './ActionsHead/ActionsHead';
import "../../styles/utils.css";
import "../../styles/reset.css";
import "../../styles/common.css";
import "./Header.css";

function Header({category,setCategory}) {
  return (
        <div className="header flex-vCenter">
            <LogoHead/>
            <CatLinksHead category={category} setCategory={setCategory}/>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
    <span></span>
</label>
            <SearchHead/>
            <ActionsHead/>
        </div>
  )
}

export {Header};