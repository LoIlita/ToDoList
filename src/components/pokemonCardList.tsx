import PokemonCard, { type PokemonCardProps } from "./pokemonCard";
import { cards } from "./dataCard";

type PokemonCardListProps = {
    cardProps ?: PokemonCardProps
    className?: string
}

export default function PokemonCardList({ cardProps, className }: PokemonCardListProps){
    return(
        <div className={className}>
            {cards.map((card) =>(
            <PokemonCard 
                key={card.id}
                src={card.src}
                alt={card.alt}
                {...cardProps}   
            />
            ))}
          
        </div>
    );
};