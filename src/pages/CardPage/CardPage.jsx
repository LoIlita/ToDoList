import {cards} from "../../components/dataCard"
import PokemonCard from "../../components/pokemonCard"

export default function CardsPage() {
    return(
        <div>

            <div className=" flex flex-col items-center justify-center p-10   ">
                <div className="border-2 border-violet-300 rounded-3xl flex  mb-10   ">
                {cards.map((card) => (
                  <PokemonCard
                        key ={card.id}
                        src={card.src}
                        alt={card.alt}
                        type={card.type}
                        size= "sm"
                    />
                    ))}
                </div>

                <button
                    className="text-white font-semibold border border-violet-300 bg-violet-400/30 hover:bg-violet-400/50 rounded-lg px-4 py-2"
                >
                    OTWÓRZ

                </button>

                <div className="rounded-3xl grid grid-cols-5 gap-2 m-10   ">
                    {cards.map((card) => (
                    <PokemonCard
                          key ={card.id}
                         src={card.src}
                         alt={card.alt}
                         type={card.type}
                         size= "md"
                         price= {true}
                        
                    />
                    ))}
                </div>

            </div>
        </div>

    )
}