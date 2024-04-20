import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Earn/productsCard.scss";

const ProductCard = ({ productItem }) => {
  return (
    <div className="productCard">
      <div className="productImgTitle">
        <div className="productImg">
          <img src={productItem?.productlogo} />
        </div>
        <div className="productTitle">
          {productItem?.producttitle}
        </div>
      </div>
      <div className="productPro">
        {productItem?.productpercent}
      </div>
      <div className="productDur">
        {productItem?.productduration}
      </div>
      <div className="productSym">
      <svg class="bn-svg row-overview__toggle-225AY" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg>
      </div>
    </div>
  );
};

export default ProductCard;
