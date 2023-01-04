import { render, screen, waitFor } from '@testing-library/react'
import Buttons from '../component/buttons.js'
import { BrowserRouter as Router } from 'react-router-dom';


describe('test Buttons components', function () {

    it('should return Buttons values', function () {
        render(
            <Router>
                <Buttons />
            </Router>
        )
        const buttons = screen.getByTestId('buttons')
        expect(buttons).toBeInTheDocument()
        expect(buttons).toHaveTextContent("FILE: test2.csv")
        expect(buttons).toHaveTextContent("FILE: test3.csv")
        expect(buttons).toHaveTextContent("FILE: test6.csv")
        expect(buttons).toHaveTextContent("FILE: test9.csv")
        expect(buttons).toHaveTextContent("FILE: test15.csv")
        expect(buttons).toHaveTextContent("FILE: test18.csv")
        expect(buttons).toHaveTextContent("DELETE")
    });


});