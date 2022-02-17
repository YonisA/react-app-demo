//class is responsbile for showing the content as a card like items
//this class is wrapped around the gameItem content and uses the cardstyles css to stylize the content
//using property.children allows you to see the content of GameItem.
import cardStyles from "./CardStyles.module.css";
function Card(property) {
  return <div className={cardStyles.card}>{property.children}</div>;
}
export default Card;
