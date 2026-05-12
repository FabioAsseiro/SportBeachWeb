import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Badge } from "./badge";

interface CardNameProps {
  name: string;
  esporte: string;
  nota: number;
  jogos: number;
  avatarUrl?: string;
}

export function CardName({ name, esporte, nota, jogos, avatarUrl }: CardNameProps) {

  // Gera iniciais automaticamente
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="
      flex items-center justify-between 
      w-full rounded-2xl 
      bg-white 
      px-4 py-3 
      shadow-md 
      hover:shadow-lg 
      transition
    ">
      
      {/* ESQUERDA */}
      <section className="flex items-center gap-3">
        <Avatar className="size-14">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-black text-lg font-semibold leading-tight">{name}</h2>
          <Badge 
            variant="outline" 
            className="text-xs py-[2px] px-2 border-gray-300"
          >
            {esporte}
          </Badge>
        </div>
      </section>

      {/* DIREITA */}
      <div className="text-right">
        <p className="text-black text-base flex items-center justify-end gap-1">
          ⭐ <span className="font-medium">{nota}</span>
        </p>
        <p className="text-gray-500 text-sm mt-[2px]">{jogos} Jogos</p>
      </div>
    </div>
  );
}