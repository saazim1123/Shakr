import React from 'react'
import { Icon } from 'semantic-ui-react'

const Landing = () => {
    return (
        <div>
            <div className="drink-icon">
                <Icon style={{ color: "red", fontSize: '300px' }} name="glass martini"></Icon>
            </div>
            <div className="title">
                SHAKR 
            </div>
            <div className ="subtitle">
                Cocktail-App
            </div>
            <div id="intro">
                Mix a drink, don't be so old fashioned
                <br></br>
            </div>
            <div className="dropdown">
                <span>Instructions</span>
                <div className="dropdown-content">
                    <p> Need to know which bourbon makes the perfect Manhattan? Interested in making your cocktail bar favorite at home?
                    <br></br><br></br>
                        The Shak-r is your definitive resource. Just select what drinks you have in your home and the Shak-r will reveal what cocktails you can create instanstly.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
export default Landing;