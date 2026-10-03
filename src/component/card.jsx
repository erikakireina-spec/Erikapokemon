export function CardComponent({ gambar, deskripsi, judul }) {
  return (
    <div className="max-w-sm  bg-gray-200 rounded-xl p-2.5">
      <img src={gambar} alt="Gambar" className="rounded-t-xl" />
      <div className="p-2">
        <h1 className="font-bold text-x1">{judul}</h1>
        <p className="text-lg text"> {deskripsi}</p>
      </div>
    </div>
  );
}
