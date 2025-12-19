const sizeVariants = {
  sm: "w-32 h-48",
  md: "w-48 h-72",
  lg: "w-64 h-96",
};

const scaleVariants = {
    scaleUp: "hover:scale-120 transform transition-transform duration-300"
};

const priceMode = {
    true: `hover:opacity-10 transition-opacity duration-300`,
};




export default function PokemonCard({src, alt, scale="null", size="md" , price=false}) {
    return(
        <div className= {`${sizeVariants[size]} ${scaleVariants[scale]} ${priceMode[price]}   m-2 overflow-hidden rounded-lg`}>
            <img
                src={src}
                alt={alt} 
                className="w-full h-full "
            />
            
        </div>

    )

}


// dojdzie cena i procenty