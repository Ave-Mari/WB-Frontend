import cartData from "./cart-data";

const cartList = document.querySelector(".cart-items-list");

export const cartMap = (cartData) => {
  let mapCartItems = cartData.map((item) => {
    const discountPrice = Math.floor(
      item.price - (item.discount / 100) * item.price
    );
    return `
        <li class="cart-item">     
        <div class="item-wrapper">     
        <div class="checkbox-wrapper checkbox-cart">
                      <input type="checkbox" checked id=${item.class} />
                      <label for=${item.class}></label>                   
                    </div>
            <div class="picture-wrapper">
                <img class="item-picture" src=${item.picture} alt=${
      item.itemTitle
    }>
            </div>
            <div class="params-wrapper">
                <p class="title">${item.itemTitle}</p>
               ${
                 item.color || item.size
                   ? `
               <div class="color-and-size-wrapper">
${
  item.color
    ? `<p class="color">Цвет: <span class="color-dynamic">${item.color}</span></p>`
    : ""
}
  ${
    item.size
      ? `<p class="size">Размер: <span class="size-dynamic">${item.size}</span></p>`
      : ""
  }
    

</div>
               `
                   : ""
               }
                <p class="shop">${item.shop}</p>
                <p class="wb">${item.wb}</p>
            </div>
        </div>
        <div class="amount-and-price-wrapper">
            <div class="amount">                
                <div class="amount-buttons-wrapper"> 
                <button class="amount-button" id="btn-decrement">−</button>
                    <p class="amount-value">${item.amount}</p>
                <button class="amount-button" id="btn-increment">+</button>      
                </div>                    
                <p class="amount-text">Осталось <span class="amount-dynamic">2</span> шт.</p>
                <div class="icons-wrapper">
                <button class="button-with-icon"> 
                <img class="button-icon" src='../styles/cart/like.svg' alt="like">
                </button>
                <button class="button-with-icon"> 
                <img class="button-icon" src='../styles/cart/delete.svg' alt="delete">
                </button>
                </div>
            </div>
            <div class="price">
               <p class="price-discount-text ${
                 discountPrice.toString().length > 3 ? "s-text" : ""
               }">
                <span class="price-dynamic">
                ${(discountPrice * item.amount).toLocaleString()}
                </span> сом</p>
                <p class="price-original-text">
                <span class="price-dynamic">
                ${(item.price * item.amount).toLocaleString()}
                </span> сом</p>                
            </div>
        </div>
       
    </li>
        `;
  });
  mapCartItems = mapCartItems.join("");
  cartList.innerHTML = mapCartItems;
};

