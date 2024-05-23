import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

// suppose if there are multiple test cases for example 20, we can group the multiple test cases into a single block known 
// as describe

describe("contact us page test cases",()=>{
    //in place of test it can also be used. It is just a nomenclature
    test("should load contact us on to the page",()=>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("should load input name inside contact component", ()=>{
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        // assertion
        expect(inputName).toBeInTheDocument();
    })
    test("should load 2 input boxes on the contact component", ()=>{
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // assertion
        expect(inputBoxes.length).toBe(2);
    })
})
