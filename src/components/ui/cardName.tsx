import { Avatar } from "./avatar";
import { Badge } from "./badge";

function cardName(name: string, esporte: string, nota: number, jogos: number, avatarUrl?: string) {
  return (
    <div className="flex items-center justify-between w-2xl gap-10 rounded-[35px] bg-white px-8 py-3 shadow-sm">
        <section className="flex items-center gap-4">
          <Avatar className="size-15 mr-6" src={avatarUrl} alt={name} />
          <div className="flex flex-col justify-center">
            <h2 className="text-black text-2xl">{name}</h2>
            <Badge variant={"outline"}>{esporte}</Badge>
          </div>
        </section>
        <div>
          <h2 className="text-black italic">⭐ {nota}</h2>
          <h3 className="text-muted-foreground">{jogos} Jogos</h3>
        </div>
    </div>
  );
}

export default cardName;