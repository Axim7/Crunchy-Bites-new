export default function Products() {
  const products = [
    { id: 1, name: "Spicy Nimco Mix", price: "Rs. 250" },
    { id: 2, name: "Roasted Almonds", price: "Rs. 600" },
    { id: 3, name: "Salted Cashews", price: "Rs. 750" },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id} className="mb-2 p-4 border rounded-lg shadow">
            <h2 className="text-xl">{p.name}</h2>
            <p className="text-gray-600">{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
