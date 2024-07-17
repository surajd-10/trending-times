import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import Home from "."

test("check if header present", ()=>{
    render(<Home/>);
    const element = screen.getByText("The NY Times");
    expect(element).toBeInTheDocument();
})