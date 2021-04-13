import * as React from "react"
import NavBar from '../components/navbar'
import {Button} from '../components/button'
import '../styles/owners.css'
import Image from '../components/Image'


const Owners = () => {
  return (
    <div>
        <NavBar/>
        <div className="owners-page">
            <div className="banner">
                <Image src='house2.jpg' className='background-photo'/>
                <div className="img-wrapper">
                   
                   <div className="owners-title">
                       <h1>For Owners</h1>
                       <p>We look after your property as if it were our own</p>
                   </div>
                   <div className="button-container">
                   <a href='https://www.renthq.net/landlord.aspx?co=Gilco+Property+Management'>
                       <Button
                           className='btns'
                           buttonStyle='btn--primary'
                           buttonSize='btn--wide'
                           >
                           Owners Portal
                       </Button>
                   </a>
                   </div>
               </div>
            </div>
                

                <div className="service-content">
                    <h1>Services</h1>
                    <hr/>
                    <div className="service-section" id='full-property-management'>
                        <h2 className='service-title'>Full property management</h2>
                        <h3 className='sub-header'>Fees:</h3>
                                <ul>
                                    <li>6% + GST on all rent collected</li>	
                                    <li>$45 + GST per inspection</li>
                                    <li>5% + GST of the cost of arranging and/or supervising maintenance, repairs or renovations</li>
                                    <li>$45 + GST / hour for in-house maintenance</li>
                                    <li>Letting service - 1 week's rent + GST (Capped at $750 + GST.)</li>	
                                </ul>
                                <h3 className='sub-header'>Includes:</h3>
                                <ul>
                                    <li>Rental appraisal</li>	
                                    <li>Marketing of the property</li>
                                    <li>Finding, vetting and placement of tenants</li>
                                    <li>Inspection - routine, initial and final</li>
                                    <li>Rent collection and management of rent arrears</li>
                                    <li>Monthly payments into your account</li>	
                                    <li>Yearly rent reviews</li>
                                    <li>Monitor compliance with current legislation</li>
                                    <li>End of financial year statements	</li>
                                    <li>Issuing of and following up on any notices sent to your tenant</li>
                                    <li>Proactive maintenance, planning and support</li>
                                    <li>Ending tenancy and settlement of Bond</li>
                                    <li>Mediation and Tribunal attendance</li>
                                    <li>Water rates payments and collection from tenants</li>			
                                </ul>
                    </div>

                    <div className="service-section" id='letting-service'>
                        <h2 className='service-title'>Letting Service - Casual</h2>
                        <h3 className='sub-header'>Fees:</h3>
                                <ul>
                                    <li>One Week's rent + GST (Capped at $750 + GST.)</li>	
                                </ul>
                                <h3 className='sub-header'>Includes:</h3>
                                <ul>
                                    <li>Rental appraisal</li>	
                                    <li>Initial inspection and photos</li>
                                    <li>Basic advertising on Trade me (extra for additional advertising)</li>
                                    <li>Open homes/viewings</li>	
                                    <li>Tenant selection including reference and credit checks</li>
                                    <li>Completion of tenancy agreement</li>
                                    <li>Lodgement of bond to Tenancy Services</li>				
                                </ul>
                    </div>

                    <div className="service-section" id='inspection-service'>
                        <h2 className='service-title'>Inspection Service - Casual</h2>
                        <h3 className='sub-header'>Fees:</h3>
                                <ul>
                                    <li>Routine inspection - $99.00 incl. GST</li>
                                    <li>Initial / Final inspection - $129.00 incl. GST</li>
                                </ul>	
                                <h3 className='sub-header'>Includes:</h3>
                                <ul>
                                    <li>Comprehensive inspection with photos</li>
                                </ul>
                    </div>

                    <div className="service-section" id='healthy-home-inspection'>
                        <h2 className='service-title'>Healthy Home Inspections</h2>
                        <h3 className='sub-header'>Fees:</h3>
                                <ul>
                                    <li>Inspection with written report, photos & fix list (if Failed)- $129.00 incl. GST</li>
                                    <li>Certification after issues are fixed - $70.00 incl. GST</li>
                                    <li>Inspection with written report, photos & certificate (if Passed) - $199.00 incl. GST</li>
                                </ul>	
                    </div>
                </div>

                <div className='owners-responsibilities'>
                            <h2>Landlord responsibilities</h2>
                            <h4>When renting out a property a landlord needs to:</h4>
                            <div className="responsibilities-list">
                                <ul>
                                    <li>make sure the property is in a reasonable condition.</li>
                                    <li>let the tenant have quiet enjoyment of the property.</li>
                                    <li>meet all relevant building, health and safety standards.</li>
                                    <li>handle any abandoned goods in the correct way.</li>
                                    <li>inform the tenant if the property is for sale.</li>
                                    <li>have an agent if they are out of New Zealand for more than 21 days.</li>
                                </ul>
                            </div>
                            <h4>They can't</h4>
                            <div className="responsibilities-list">
                                <ul>
                                    <li>seize the tenant’s goods for any reason.</li>
                                    <li>interfere with the supply of any services to the premises, unless it is necessary to avoid danger to a person or to allow repairs.</li>
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
  )
}

export default Owners