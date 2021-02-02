import { config } from "../config";

const products = {
  getProducts: async () => {
    const res = await fetch(
      `${config.url}/products?_quantity=100&_locale=en_US&_taxes=10&_categories_type=string`
    );
    return await res.json();
  },
};

export default products;
