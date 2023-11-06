export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Seyahat Bavulunuza Bir şeyler Ekleyin</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Her şey Hazır Gidebilirsin "
          : ` 💼 Çantanda  ${numItems} ürün var ve sen ${numPacked} adet aldın (${percentage}%)`}
      </em>
    </footer>
  );
}
