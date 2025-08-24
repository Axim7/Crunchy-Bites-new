export default function Checkout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="flex flex-col max-w-md">
        <input type="text" placeholder="Full Name" className="mb-3 p-2 border rounded" />
        <input type="email" placeholder="Email" className="mb-3 p-2 border rounded" />
        <input type="text" placeholder="Address" className="mb-3 p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
  );
    }
