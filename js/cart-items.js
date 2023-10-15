import cartData from "./cart-data";

const cartList = document.querySelector(".cart-items-list");

export const cartMap = (cartData) => {
  let mapCartItems = cartData.map((item) => {
    return `
        <li class="cart-item">     
        <div class="item-wrapper">
        <input type="checkbox" />
            <div class="picture-wrapper">
                <img class="item-picture" src=${item.picture} alt=${
      item.itemTitle
    }>
            </div>
            <div class="params-wrapper">
                <p class="title">${item.itemTitle}</p>
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
            </div>
            <div class="price">
                <p class="price-text"><span class="price-dynamic">
                ${item.price * item.amount}</span> сом</p>
            </div>
        </div>
       
    </li>
        `;
  });
  mapCartItems = mapCartItems.join("");
  cartList.innerHTML = mapCartItems;
};
