function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Our Product Management App</h1>
      <p>
        This application allows you to view, manage, and edit products with
        ease. Browse our extensive product catalog, edit details for existing
        products, and keep everything up-to-date in a few simple steps.
      </p>
      <p>Use the navigation links to get started:</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <strong>Get All Products</strong> - Browse through our complete
          product list.
        </li>
        <li>
          <strong>Edit Products</strong> - Make changes to product information
          quickly and easily.
        </li>
        <li>
          <strong>Add Products</strong> -Add new product quickly and easily.
        </li>
        <li>
          <strong>Delete Products</strong> - delete product quickly and easily.
        </li>
      </ul>
      <p>
        We’re here to help you manage your inventory efficiently. Enjoy
        exploring our app!
      </p>
    </div>
  );
}

export default Home;
