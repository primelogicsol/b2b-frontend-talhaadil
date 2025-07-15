interface ProductListProps {
  products: string[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-dark-card p-6 rounded-xl shadow-xl h-full flex flex-col">
      <h2 className="text-2xl font-bold text-light-text mb-6 text-center">Product Range</h2>
      <div className="grid grid-cols-1 gap-4 flex-grow overflow-y-auto custom-scrollbar">
        {products.map((product, index) => (
          <button
            key={index}
            className="w-full py-3 px-4 bg-dark-blue text-light-text rounded-lg text-lg font-medium
                           transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-accent-orange hover:text-white
                           focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-dark-card"
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  )
}
