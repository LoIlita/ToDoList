import { useSearchParams } from "react-router-dom";
import { CardType } from "./dataCard";

export default function ParseCardType(): CardType | undefined {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  if (!typeParam) return undefined;

  if (Object.values(CardType).includes(typeParam as CardType))
    return typeParam as CardType;

  return undefined;
}
