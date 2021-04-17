import * as React from "react"
import NavBar from '../components/navbar'
import {Button} from '../components/button'
import '../styles/tenants.css'
import Image from '../components/Image'


const Tenants = () => {
  return (
    <div>
        <NavBar/>
        <div className="tenants-page">
            <div className="banner">
            <Image src='Akl bridge.jpg' className='background-photo'/>

            <div className="img-wrapper">
                    <div className="tenants-title">
                        <h1>For Tenants</h1>
                        <p>Making our property your home</p>
                    </div>
                    <div className="button-container">
                    
                    <a href='https://www.tpsportal.co.nz/tenancy_application/tps7822'>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--wide'
                            
                            >
                            Tenants Apply
                        </Button>
                    </a>

                    </div>
                </div>
            </div>
                

                <div className='tenants-page-container'>
                

                    <div className='tenants-responsibilities'>
                    <div className="tenants-portal-container">
                        <a href='https://www.RentHQ.net/Tenant.aspx?co=Gilco+Property+Management'>
                            <Button
                                className='btns'
                            buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                
                                >
                                Tenants Portal
                            </Button>
                        </a>
                    </div>
                    
                            <h2>Tenants responsibilities</h2>
                            <h4>Tenants must:</h4>
                            <div className="responsibilities-list">
                                <ul>
                                    <li>pay the rent on time.</li>
                                    <li>keep the property reasonably clean and tidy.</li>
                                    <li>let the landlord know about any damage or repairs straight away.</li>
                                    <li>pay for their own outgoings like, electricity, gas and internet.</li>
                                    <li>at the end of the tenancy, leave the property clean, tidy, and clear of rubbish and possessions.</li>
                                    <li>leave all keys with the landlord.</li>
                                    <li>leave all items that were supplied with the tenancy.</li>
                                </ul>
                            </div>
                            <h4>Tenants must not:</h4>
                            <div className="responsibilities-list">
                                <ul>
                                    <li>stop paying rent if the landlord hasn’t done repairs.</li>
                                    <li>damage the premises.</li>
                                    <li>disturb the neighbours or the landlord’s other tenants.</li>
                                    <li>make any alterations to the property without the landlord’s written consent.</li>
                                    <li>use the property for any unlawful purpose.</li>
                                    <li>have more than the maximum number of occupants listed in the tenancy agreement.</li>
                                </ul>
                            </div>
                            <h4>Both landlords and tenants are responsible for:</h4>
                            <div className="responsibilities-list">
                                <ul>
                                    <li>making sure the tenancy agreement is in writing.</li>
                                    <li>keeping their contact details up to date.</li>
                                    <li>not changing the locks without permission.</li>
                                </ul>
                            </div>
                            <p>See more at - <a href="https://www.tenancy.govt.nz/starting-a-tenancy/new-to-tenancy/key-rights-and-responsibilities/">Your rights and responsibilities » Tenancy Services</a></p>
                            </div>
                </div>					
        </div> 
    </div>
  )
}

export default Tenants