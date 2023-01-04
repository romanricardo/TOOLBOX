import { render, screen, waitFor } from '@testing-library/react'
import Table from '../component/table';
import { BrowserRouter as Router } from 'react-router-dom';


describe('test the table component', function () {
  describe('values of header table', function () {
    it('should return header values', function () {
      render(
        <Router>
          <Table />
        </Router>)
      const table = screen.getByTestId('table')
      expect(table).toBeInTheDocument()
      expect(table).toHaveTextContent("File Name")
      expect(table).toHaveTextContent("Text")
      expect(table).toHaveTextContent("Number")
      expect(table).toHaveTextContent("Hex")
    });

  })

  describe('values of fileName', function () {

    it('should return the value of file name present in a row', async function () {

      let table = render(
        <Router>
          <Table />
        </Router>)

      await waitFor(() => {
        expect(table.baseElement).toHaveTextContent('test2.csv')
      });
    });
  })


});