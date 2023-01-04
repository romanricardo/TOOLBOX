import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom'
import '../css/buttons.css'

function Buttons() {

    const [params, setParams] = useSearchParams()

    function addParamsFile2() {
        setParams({
            filename: "test2.csv"
        })
    }

    function addParamsFile3() {
        setParams({
            filename: "test3.csv"
        })
    }

    function addParamsFile6() {
        setParams({
            filename: "test6.csv"
        })
    }

    function addParamsFile9() {
        setParams({
            filename: "test9.csv"
        })
    }

    function addParamsFile15() {
        setParams({
            filename: "test15.csv"
        })
    }

    function addParamsFile18() {
        setParams({
            filename: "test18.csv"
        })
    }


    function deleteParams() {
        params.delete("filename")
        setParams(params)
    }

    return (
        <div data-testid="buttons">
            <div className='buttonsConteiner'>
                <Button variant="secondary" onClick={addParamsFile2}>FILE: test2.csv</Button>{' '}
                <Button variant="secondary" onClick={addParamsFile3}>FILE: test3.csv</Button>{' '}
                <Button variant="secondary" onClick={addParamsFile6}>FILE: test6.csv </Button>{' '}
                <Button variant="secondary" onClick={addParamsFile9}>FILE: test9.csv</Button>{' '}
                <Button variant="secondary" onClick={addParamsFile15}>FILE: test15.csv</Button>{' '}
                <Button variant="secondary" onClick={addParamsFile18}>FILE: test18.csv</Button>{' '}
                <Button variant="secondary" onClick={deleteParams}>DELETE</Button>{' '}
            </div>
        </div>
    );
}

export default Buttons;