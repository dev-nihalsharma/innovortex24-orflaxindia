const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Data Cable",
      description: "Durable and reliable cables for industrial use.",
      image: "/images/pdt1.jpeg",
    },
    {
      id: 2,
      name: "Coaxial Cable",
      description: "Perfect for high-frequency signal transmission.",
      image: "/images/pdt2.webp",
    },
    {
      id: 3,
      name: "Fiber Optic Cable",
      description: "High-speed data transmission cables.",
      image: "/images/pdt3.jpeg",
    },
    {
      id: 4,
      name: "Power Cable",
      description: "Efficient power delivery for various applications.",
      image: "/images/pdt4.jpeg",
    },
  ];

  return (
    <section id="product" className="py-20 px-6 text-center bg-gray-100">
      <h2 className="text-5xl font-bold text-secondary">Our Products</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
        Explore our wide range of quality products designed to meet all your needs.
      </p>

      {/* Product grid */}
      <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
