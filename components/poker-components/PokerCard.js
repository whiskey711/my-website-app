import { nanoid } from "nanoid";

export default function PokerCard(props) {
  const path = props.ind == 0 ?
  "/poker/back.svg" :
  "/poker/" + props.card.rank + "_of_" + props.card.suit + ".svg";

  return (
    <div key={nanoid()} className="mr-2 my-3">
      <img 
        className="h-32 shadow-md"
        src={path} 
        alt="poker" />
    </div>
  );
}