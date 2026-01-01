import { CardType, cards } from "./dataCard";
import PokemonCard, { type PokemonCardSettings } from "./pokemonCard";

type cardFilter = {
  filterType?: CardType;
};

type settings = {
  cardProps?: PokemonCardSettings;
  className?: string;
};

type PokemonCardListProps = cardFilter & settings;

export default function PokemonCardList({
  filterType,
  cardProps,
  className,
}: PokemonCardListProps) {
  const filteredCards = filterType
    ? cards.filter((c) => c.type === filterType)
    : cards;

  return (
    <div className={className}>
      {filteredCards.map((card) => (
        <PokemonCard
          key={card.key}
          src={card.src}
          alt={card.alt}
          {...cardProps}
        />
      ))}
    </div>
  );
}
