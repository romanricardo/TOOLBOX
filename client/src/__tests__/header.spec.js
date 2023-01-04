import { render, screen } from '@testing-library/react'
import Header from '../component/header.js';


describe('test the header component', function () {
    it('should return header title', function () {
        render(<Header />)
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
        expect(header).toHaveTextContent("React Test APP")
    });

})
