import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import axios from "axios";
import HomePage from "./HomePage";

//mock the axios
vi.mock("axios");

describe("HomePage Component", () => {
  let loadCart;

  beforeEach(() => {
    //create a mock function
    loadCart = vi.fn();

    //This is called mock the implementation
    //In HomePage we load products at the begining using axios.get. It returns a response and Homepage is going to use this response to display the products. So we need to mock the implementation of the axios.get();, which means we are going to make axios.get do whatever we want.
    //Whenever we use axios.get(); we are going to run this fake function.
    //we give axios.get() urlPath.
    //In this fake function we should match what axios.get(); normally returns. In test axios.get(); returns an object with property data. Normally response is array of data.
    //Since axios.get() is a async function, we make this a async function too.
    axios.get.mockImplementation( async (urlPath) => {
      if (urlPath === "/api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            }
          ]
        };
      }
    });
  });

  it("displays products correctly", async () => {
    //Render the HomePage component into test file. HomePage requires 2 props cart and loadCart.
    //Homepage contains Header component, header has Link component. For <Link /> components to work, they need to be inside a Router. In main.jsx entire App.jsx is inside a router.<BrowserRouter />. Thats why link component work normally. So we need to do same in here by wrapping Homepage with <MemoryRouter />. This is designed for test purposes.
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />;
      </MemoryRouter>
    );
    // product-container => comes from Product.jsx
    // findAllByTestId does same as getAllByTestId, but it will wait until it finds this element. This is useful when our component need to load something and we need to wait for it to load because product-container contanes data that comes from async function( axios.get(); ).
    const productContainer = await screen.findAllByTestId('product-container');

    expect(productContainer.length).toBe(2);

    expect(
      within(productContainer[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument();

    expect(
      within(productContainer[1]).getByText('Intermediate Size Basketball')
    ).toBeInTheDocument();
    
  });
});
