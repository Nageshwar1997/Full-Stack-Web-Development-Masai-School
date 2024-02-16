import styles from "./Product.module.css";

function Product(product) {
  // console.log(product);
  const {
    title,
    rating,
    discountPercentage,
    thumbnail,
    description,
    price,
    images,
    category,
  } = product;
  // console.log(images[0]);

  function getMRP(price, discountPercentage) {
    let discount = (discountPercentage * price) / 100;
    return Math.ceil(price + discount);
  }
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.thumbnail} src={thumbnail} alt={title} />
        <div className={styles.images}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={title} />
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={`${styles.description}`}>{description}</p>
        <p>
          Price :
          <span className={styles.disabledPrice}>
            &#8377;
            {getMRP(price, discountPercentage)}
          </span>{" "}
          &#8377;{price}
        </p>
        <p>Discount : {discountPercentage}%</p>
        <p>
          Rating : {rating} <i className="fa-solid fa-star"></i>
        </p>
        <p>Category : {category}</p>
        <div className={styles.buttons}>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
