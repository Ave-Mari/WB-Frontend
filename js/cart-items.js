import cartData from "./cart-data";

const cartList = document.querySelector(".cart-items-list");

export const cartMap = (cartData) => {
  let mapCartItems = cartData.map((item) => {
    return `
        <li class="cart-item">
        <input type="checkbox" />
        <div class="item-wrapper">
            <div class="picture-wrapper">
                <img src="" alt="">
            </div>
            <div class="params-wrapper">
                <p class="title">${item.itemTitle}</p>
                <div class="color-and-size-wrapper">
                    <p class="color">Цвет: <span class="color-dynamic">${
                      item.color
                    }</span></p>
                    <p class="size">Размер: <span class="size-dynamic">${
                      item.size
                    }</span></p>
                </div>
                <p class="shop">${item.shop}</p>
                <p class="wb">${item.wb}</p>
            </div>
        </div>
        <div class="amount-and-price-wrapper">
            <div class="amount">
                <label class="amount-label">
                    <input type="button" value="-">
                    <span>${item.amount}</span>
                    <input type="button" value="+">                               
                </label>
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
