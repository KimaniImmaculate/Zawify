import { Link } from "react-router-dom";

function ItemCard({ item, onWishlist }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />

      <h3 className="item-name">{item.name}</h3>
      <p className="item-price">KES {item.price}</p>

      <div className="item-actions">
        <Link to={`/product/${item._id}`} className="btn-view">
          View
        </Link>

        <button className="btn-wishlist" onClick={() => onWishlist(item._id)}>
          ❤️
        </button>
      </div>
    </div>
  );
}

export default ItemCard;

