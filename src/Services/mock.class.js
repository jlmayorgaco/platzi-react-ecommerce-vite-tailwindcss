import { MOCK_CATEGORIES } from '../Mocks/categories.mock';
import { MOCK_PRODUCTS } from '../Mocks/products.mock';
import { InterfaceAPI } from "./api.interface";

export class MockAPI extends InterfaceAPI {
  constructor() {
    super();
    this.$db = null;

    const request = window.indexedDB.open("MOCK_DB_STORE", 1);
    request.onerror = (event) => this.onerror(event);
    request.onsuccess = (event) => this.onsuccess(event);
    request.onupgradeneeded = (event) => this.onupgradeneeded(event);
  }

  async init(){
    return new Promise((resolve, reject) => {
      setTimeout(( ) => resolve(), 500);
    })

  }

  onsuccess($event){
    this.$db = $event.target.result;
  }

  onerror($event){
    console.log(' on error ')
  }

  onupgradeneeded(event) {
    this.$db = event.target.result;

    // Check if the 'categories' and 'products' object stores are empty
    const categoriesStore = this.$db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
    const productsStore = this.$db.createObjectStore('products', { keyPath: 'id', autoIncrement: true });

    const checkCategoriesRequest = categoriesStore.openCursor();
    const checkProductsRequest = productsStore.openCursor();

    checkCategoriesRequest.onsuccess = (event) => {
      if (!event.target.result) {
        // 'categories' store is empty, seed categories
        MOCK_CATEGORIES.forEach((category) => {
          categoriesStore.add(category);
        });
      }
    };

    checkProductsRequest.onsuccess = (event) => {
      if (!event.target.result) {
        // 'products' store is empty, seed products
        MOCK_PRODUCTS.forEach((product) => {
          productsStore.add(product);
        });
      }
    };
  }
  
  async getAllProducts() {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction(['products'], 'readonly');
      const productsStore = transaction.objectStore('products');
      const getAllRequest = productsStore.getAll();
      getAllRequest.onsuccess = (event) => {
        const allProducts = event.target.result;
        resolve(allProducts);
      };
      getAllRequest.onerror = () => {
        reject(new Error('Failed to retrieve paginated products.'));
      };
    });
  }
  async addProduct(product) {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction(['products'], 'readwrite');
      const productStore = transaction.objectStore('products');
      const request = productStore.add(product);
      transaction.oncomplete = () => {
        resolve();
      };
      transaction.onerror = () => {
        reject(new Error('Failed to add product to the database.'));
      };
      request.onerror = (event) => {
        reject(new Error(`Error adding product to the database: ${event.target.error}`));
      };
    });
  }
  async getProductById(productId) {
    const product = await new Promise((resolve, reject) => {
        const transaction = this.$db.transaction(['products'], 'readonly');
        const productStore = transaction.objectStore('products');
        const request = productStore.get(productId);
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = () => {
          reject(new Error(`Failed to get record with ID ${id} from ${storeName} store.`));
        };
    });
    return product;
  }
  async getProductsByCategoryId(categoryId) {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction(['products'], 'readonly');
      const productStore = transaction.objectStore('products');
      const index = productStore.index('categories');
      const request = index.getAll(categoryId);
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = () => {
        reject(new Error(`Failed to get products for category with ID ${categoryId}.`));
      };
    });
  }
  async editProductById(productId, updatedProduct) {
    await new Promise((resolve, reject) => {
        const transaction = this.$db.transaction(['products'], 'readwrite');
        const productStore = transaction.objectStore('products');
        const request = productStore.put(updatedProduct, productId);
        request.onsuccess = () => {
            resolve();
        };
        request.onerror = () => {
          reject(new Error(`Failed to edit record with ID ${id} from ${storeName} store.`));
        };
      });
  }
  async deleteById(storeName, id) {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.delete(id);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error(`Failed to delete record with ID ${id} from ${storeName} store.`));
      };
    });
  }
  async getCategoryById(categoryId) {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction(['categories'], 'readonly');
      const categoriesStore = transaction.objectStore('categories');
      const getRequest = categoriesStore.get(categoryId);
      getRequest.onsuccess = (event) => {
        const category = event.target.result;
        resolve(category);
      };
      getRequest.onerror = () => {
        reject(new Error(`Failed to get category with ID ${categoryId}.`));
      };
    });
  }
  async getAllCategories() {
    return new Promise((resolve, reject) => {
      const transaction = this.$db.transaction(['categories'], 'readonly');
      const categoriesStore = transaction.objectStore('categories');
      const getAllRequest = categoriesStore.getAll();
      getAllRequest.onsuccess = (event) => {
        const allCategories = event.target.result;
        resolve(allCategories);
      };
      getAllRequest.onerror = () => {
        reject(new Error('Failed to retrieve all categories.'));
      };
    });
  }


}
