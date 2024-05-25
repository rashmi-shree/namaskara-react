import RestaurantCard from "../RestaurantCard"
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockData from "../mocks/resCardMock.json";

test("should render restaurant component", ()=>{
    render(<RestaurantCard resCard={MockData} />)
    const name = screen.getByText("Leon's burger")
    expect(name).toBeInTheDocument()
})