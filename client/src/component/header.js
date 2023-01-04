import React from 'react'
import '../css/header.css'


const Header = () => {

    return (
        <div data-testid="header" >
            <div className='headerConteiner'>
                <div className='headerText'>
                    <h5>React Test APP</h5>
                </div>
            </div>
        </div>
    )
}
export default Header