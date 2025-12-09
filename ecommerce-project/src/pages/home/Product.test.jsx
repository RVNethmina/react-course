import { it, expect, describe, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import Product from './Product'

//Integration Testing - Product.jsx file need different other functions work like formatMoney() and loadCart()...
describe('Product Component', () => {
    //check if the component is displayed correctly => check name or image or price etc, is correct.
    //product component have some props we need add props in our test.
    //in our app loadCart() contacts the backend. In our test, we should not contact a real backend. So we mock the function.
    //Mock = create a fake version of this function. To create a mock function we need to import "vi".
    it('displays the product details correctly', () => {

        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        };

        //creates a fake(mock) function that doesn’t do anything
        const loadCart = vi.fn();

        render(<Product product={product} loadCart={loadCart}/>);

        //This searches the fake webpage for an element with a specific text
        // toBeInTheDocument = added by @testing-library/jest-dom. This is in the setupTests.js file.
        expect(
            screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument();

        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg');

        expect(
            screen.getByTestId('product-rating-stars-image')
        ).toHaveAttribute('src' , 'images/ratings/rating-45.png');

        expect(
            screen.getByText('87')
        ).toBeInTheDocument();
    });
});