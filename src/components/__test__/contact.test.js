import Contact from "../Contact";
import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page test cases",()=>{
    // it is an alias for test
    it("checking contact page has loaded",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading")
    
        //assertion
        expect(heading).toBeInTheDocument();
    })
    test("check if button is present in the component", ()=>{
        render(<Contact />)
        const button = screen.getByRole("button")
        //assertion
        expect(button).toBeInTheDocument();
    })
    test("check if button is present with name submit", ()=>{
        render(<Contact />)
    
        const button = screen.getByText("Submit")
        //assertion
        expect(button).toBeInTheDocument()
    })
    test("check placeholder",()=>{
        render(<Contact />)
        const input = screen.getByPlaceholderText("name")
        //assertion
        expect(input).toBeInTheDocument();
    })
    test("check al input boxes",()=>{
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length);
        //assertion
        expect(inputBoxes.length).toBe(2)
    })
})
