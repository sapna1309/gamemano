import { gameCradItems } from "@/constants";
import { WithRatingGameCard } from "./WithRatingGameCard";

const RelatedGames = () => {
    return gameCradItems.map((item, index) => <WithRatingGameCard key={item.id} item={item} i={index} />
    )

}

export { RelatedGames };