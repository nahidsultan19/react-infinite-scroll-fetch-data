const Product = ({ title, thumbnail, price }) => {
  return (
    <div>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>$ {price}</p>
    </div>
  );
};

export default Product;
