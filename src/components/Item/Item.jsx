import React, { useEffect, useState } from "react";

import styles from "./Item.module.css";
import Stars from "../Stars/Stars";

function Item({ rating }) {
  const defaultValue = [];
  const [products, setProducts] = useState(defaultValue);



  const removeElement = (id) => {
    setProducts(currentProducts => currentProducts.filter(product => product.id !== id));
  };


  const getApiData = async () => {
    const response = await fetch("https://dummyjson.com/products").then(
      (response) => response.json()
    );

    setProducts(response.products);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className={styles.app}>
      {products.map(
        (product) =>
        
            <div
              key={product.id}
              className={styles.outerBox}
              onDoubleClick={() => removeElement(product.id)}
            >
              <div className={styles.innerBox}>
                <div className={styles.productImg}>
                  <img
                    className={styles.thumbnail}
                    src={product.thumbnail}
                    alt={product.title}
                  ></img>
                </div>
                <div className={styles.productTop}>
                  <div className={styles.productTitle}>
                    Title: {product.title}
                  </div>
                  <div className={styles.productPrice}>
                    Price: {product.price}
                  </div>
                </div>

                <div className={styles.productRating}>
                  Rating: <Stars rating={product.rating} />
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
}

export default Item;
