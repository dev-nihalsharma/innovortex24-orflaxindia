import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-gray text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-primary">Orflax</h2>
          <p className="mb-2">B-42/15 Jhilmil Industrial Area, G.T.Road, Delhi 110 095</p>
          <p className="mb-2">Phone: +91 93134 93405 | +91 93136 66292 | +91 92051 93405</p>
          <p className="mb-2">Email: <a href="mailto:Connect@orflaxindia.com" className="text-blue-400">Connect@orflaxindia.com</a></p>
          <p className="mt-6">&copy; 2024 Orflax. All rights reserved.</p>
          <div className="mt-4 text-xl font-medium">
            <Link href="/contact" className="mr-4 hover:text-primary">Contact Us</Link>
            <Link href="/products" className="mr-4 hover:text-primary">Products</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
