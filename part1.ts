// Part 1: Basic Arrays - Product Inventory Challenge:

type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    },
    changeColor: (product: Product, newColor: string) => void
}

const products: Product[] = [
    {
        name: "bag",
        price: 3000,
        inventory: {
            stock: 200,
            colorOptions: ["black", "yellow","blue","orange"]
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "red") {
                    product.price = product.price * 1.1;
                } else if (newColor === "green") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    },
    {
        name: "shirt",
        price: 1500,
        inventory: {
            stock: 100,
            colorOptions: ["red", "blue","white","purple",'black']
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "red") {
                    product.price = product.price * 1.1;
                } else if (newColor === "green") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    },
    {
        name: "watch",
        price: 5000,
        inventory: {
            stock: 50,
            colorOptions: ["red", "blue","silver","golden"]
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "red") {
                    product.price = product.price * 1.1;
                } else if (newColor === "blue") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    }
]

products.forEach(product => {
    console.log(`Product: ${product.name}`);
    console.log(`Initial Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    
    product.changeColor(product, "red");
    console.log(`Price after changing to red: ${product.price}`);
    
    product.changeColor(product, "blue");
    console.log(`Price after attempting to change to blue: ${product.price}`);
    
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    console.log('---');
});