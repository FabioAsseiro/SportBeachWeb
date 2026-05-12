interface QuadraCardProps {
  name: string;
  image: string;
  location: string;
  onEnter: () => void;
}

export function QuadraCard({ name, image, location, onEnter }: QuadraCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl p-5 flex gap-5">
      <img src={image} className="w-32 h-32 rounded-2xl object-cover" />

      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold text-black">{name}</h2>
          <p className="text-sm text-gray-600">{location}</p>
        </div>

        <button
          onClick={onEnter}
          className="bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition"
        >
          Entrar na Quadra →
        </button>
      </div>
    </div>
  );
}