import { nanoid } from "nanoid";

export default function PokerCard(props) {
  return (
    <div key={nanoid()} className="mr-2 my-3">
      <img 
        className="h-32"
        src={"/poker/" + props.card.rank + "_of_" + props.card.suit + ".svg"} 
        alt="poker" />
    </div>
  );
}