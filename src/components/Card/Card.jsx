import React from 'react'
import './Card.css'
import star from '../../assets/icon-star.svg'

const Card = () => {
    return (
        <div className='card-body'>
            <div className='card-container'>
                <div className='star-container'>
                    <img className='star-icon' src={star} alt="icone estrela" />
                </div>

                <div>
                    <h2 className='title'>
                        How did we do?
                    </h2>
                    <p className='paragraph'>
                        Please let us know how we did with your support
                        request. All feedback is appreciated to help us
                        improve or offering!
                    </p>
                </div>

                <div className='buttons-container'>
                    <button className='numeric-button'>1</button>
                    <button className='numeric-button'>2</button>
                    <button className='numeric-button'>3</button>
                    <button className='numeric-button'>4</button>
                    <button className='numeric-button'>5</button>
                </div>
                <div className='submit-container'>
                    <button className='submit-button'>SUBMIT</button>
                </div>

            </div>
        </div>
    )
}

export default Card