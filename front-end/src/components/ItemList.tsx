import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";
import { Artist, Song } from "../types";

interface ItemListProps {
  title: string;
  items: number;
  itemsArray: (Artist | Song)[];
  path: string;
  idPath: string;
}

const ItemList: React.FC<ItemListProps> = ({ 
  title, 
  items, 
  itemsArray, 
  path, 
  idPath 
}) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : null}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;