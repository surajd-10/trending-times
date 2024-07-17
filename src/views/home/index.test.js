import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import axios from "axios";
import Home from "."

// jest.mock(axios);

// axios.get.mockResolvedValue({
//     data: {
//         results: [
//             { id: 1, title: 'Article 1', abstract: 'Article 1 abstract' },
//             { id: 2, title: 'Article 2', abstract: 'Article 2 abstract' },
//         ]
//     }
// });

describe("Home Page", ()=>{
    test("check if header present", ()=>{
        render(<Home/>);
        const element = screen.getByText("The NY Times");
        expect(element).toBeInTheDocument();
    })

    
    // test("renders articles list and article details",()=>{
    //     render(<Home/>);
    //     expect(screen.getByText("Article 1")).toBeInTheDocument();
    // })

})
