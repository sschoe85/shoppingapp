import React, { useState } from "react";
import PreviewCollection from "../components/PreviewCollection";
import SHOP_DATA from "../data";
function ShopPage(props) {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
