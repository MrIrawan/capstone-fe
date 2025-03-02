export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-lg">Repair Guides</h3>
            <ul className="space-y-2">
              <li>iPhone</li>
              <li>Mac</li>
              <li>Android</li>
              <li>PC</li>
              <li>Game Console</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Parts & Tools</h3>
            <ul className="space-y-2">
              <li>iPhone Parts</li>
              <li>Mac Parts</li>
              <li>Tool Kits</li>
              <li>Batteries</li>
              <li>Screens</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Warranty</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">About</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>© 2025 MarketSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};