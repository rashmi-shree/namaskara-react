import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
// import {Provider} from "react-redux";
test("should load header component",()=>{
    render(
        // <Provider>
            <Header /> 
        // </Provider>
    )
    // multiple buttons and check for login button
    const loginBtn = screen.getByRole("button",{name:"Login"})
    expect(loginBtn).toBeInTheDocument()
})
test("should change login to logout on click", ()=>{
    render(<Header />)
    const login = screen.getByRole("button",{name:"Login"});
    fireEvent.click(login)
    const logout = screen.getByRole("button",{name:"Logout"});
    //assertion
    expect(logout).toBeInTheDocument()
 })