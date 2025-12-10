import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// because of vi.mock() this is fake version of axios.
import axios from "axios";
import Product from "./Product";

// we mock the entire axios package. This means that when we are testing, when we input from axios, we will get a fake version of axios instead. When we press add to cart button we use fake axios.
vi.mock("axios");

//Integration Testing - Product.jsx file need different other functions work like formatMoney() and loadCart()...
describe("Product Component", () => {
  //check if the component is displayed correctly => check name or image or price etc, is correct.
  //product component have some props we need add props in our test.
  //in our app loadCart() contacts the backend. In our test, we should not contact a real backend. So we mock the function.
  //Mock = create a fake version of this function. To create a mock function we need to import "vi".

  let product; 
  let loadCart;

  //we recreate shared variable like product , loadcart before each test to prevent bugs. Bugs can occur, when one function changes those shared variables and then another function use it with changes.
  beforeEach(() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    //creates a fake(mock) function that doesn’t do anything. We create mock function insted of requesting real data from the backend. In our test we should not contact a real backend.
    loadCart = vi.fn()
  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    //This searches the fake webpage for an element with a specific text
    // toBeInTheDocument = added by @testing-library/jest-dom. This is in the setupTests.js file.
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );

    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png"
    );

    expect(screen.getByText("87")).toBeInTheDocument();
  });

  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCart={loadCart} />);

    //setup user event
    const user = userEvent.setup();

    //get the add to cart button from the screen. WE need to give a "add-to-cart-button" to Add To Cart Button in Product.jsx file.
    const addToCartButton = screen.getByTestId("add-to-cart-button");

    //simulate a click event. This takes some time to process. That means this is a asynchronous code. It returns a promise. So use await infront of it. T use await it should be inside async function.
    await user.click(addToCartButton);

    //this is fake axios
    //we can check, when we click add, does our code runc axios.post and give these values.
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });

    expect(loadCart).toHaveBeenCalled();
  });

});
