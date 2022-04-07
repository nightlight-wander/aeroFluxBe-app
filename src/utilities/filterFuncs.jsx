

    export const sortProducts = (products, sortBy) => {
        if (sortBy === "PRICE_LOW_TO_HIGH") {
            return [...products].sort((a, b) => a["price"] - b["price"])
        }
        if (sortBy === "PRICE_HIGH_TO_LOW") {
            return [...products].sort((a, b) => b["price"] - a["price"])
        }
        return products;
    };

    export const filterByBrand = (sortedProducts, showSpecificBrand) => {
        if (showSpecificBrand === "ALL") {
            return sortedProducts;
        } else {
            return sortedProducts.filter(({ name }) => name.toUpperCase().includes(showSpecificBrand))
        }

    }

    export const filterByPrice = (filteredProducts, showPriceRange) => {
        switch (showPriceRange) {
            case "RANGE_1":
                return filteredProducts.filter(({ price }) => price >= 5000 && price <= 15000)
            case "RANGE_2":
                return filteredProducts.filter(({ price }) => price >= 15000 && price <= 30000)
            case "RANGE_3":
                return filteredProducts.filter(({ price }) => price >= 30000 && price <= 45000)
            case "RANGE_4":
                return filteredProducts.filter(({ price }) => price >= 45000)
            default:
                return filteredProducts;
        }
    }

    

