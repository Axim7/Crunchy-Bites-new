export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Crunchy Bites</h1>
      <p className="text-lg text-gray-700">Welcome to your favorite online Nimco & Nuts store!</p>
      <a href="/products" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">Shop Now</a>
    </div>
  );
}
