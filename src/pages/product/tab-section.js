import React from 'react';

const TabSection = () => {
    return (
        <section className="hero-tabs">
        <div className="container">
            <div className="hero-tabs-in">
                <div className="row">
                    <div className="col-md-3" data-aos="fade-right">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-PitchDeck-tab" data-toggle="pill" href="/v-pills-PitchDeck" role="tab" aria-controls="v-pills-PitchDeck" aria-selected="true">Pitch Deck</a>
                            <a className="nav-link" id="v-pills-KPIs-tab" data-toggle="pill" href="/v-pills-KPIs" role="tab" aria-controls="v-pills-KPIs" aria-selected="false">KPIs</a>
                            <a className="nav-link" id="v-pills-Forecast-tab" data-toggle="pill" href="/v-pills-Forecast" role="tab" aria-controls="v-pills-Forecast" aria-selected="false">Forecast</a>
                            <a className="nav-link" id="v-pills-Accounts-tab" data-toggle="pill" href="/v-pills-Accounts" role="tab" aria-controls="v-pills-Accounts" aria-selected="false">Accounts</a>
                            <a className="nav-link" id="v-pills-Scenarios-tab" data-toggle="pill" href="/v-pills-Scenarios" role="tab" aria-controls="v-pills-Scenarios" aria-selected="false">Scenarios</a>
                            <a className="nav-link" id="v-pills-Notes-tab" data-toggle="pill" href="/v-pills-Notes" role="tab" aria-controls="v-pills-Notes" aria-selected="false">Notes</a>
                            <a className="nav-link" id="v-pills-Updates-tab" data-toggle="pill" href="/v-pills-Updates" role="tab" aria-controls="v-pills-Updates" aria-selected="false">Updates</a>
                            <a className="nav-link" id="v-pills-CRM-tab" data-toggle="pill" href="/v-pills-CRM" role="tab" aria-controls="v-pills-CRM" aria-selected="false">CRM</a>
                            <a className="nav-link" id="v-pills-Diligence-tab" data-toggle="pill" href="/v-pills-Diligence" role="tab" aria-controls="v-pills-Diligence" aria-selected="false">Diligence</a>
                            <a className="nav-link" id="v-pills-Chart-tab" data-toggle="pill" href="/v-pills-Chart" role="tab" aria-controls="v-pills-Chart" aria-selected="false">Chart</a>
                            <a className="nav-link" id="v-pills-Checklist-tab" data-toggle="pill" href="/v-pills-Checklist" role="tab" aria-controls="v-pills-Checklist" aria-selected="false">Checklist</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-PitchDeck" role="tabpanel" aria-labelledby="v-pills-PitchDeck-tab">
                            <div className="tabs-content-block">
                                <div className="tabs-head" data-aos="fade-up">
                                    <h2>
                                        <img src="assets/images/pitch-icon.png" alt="pitch-icon"/>
                                        Pitch Deck
                                    </h2>
                                    <p>AIV provides a pre-built investor-ready pitch deck template for you to customize and start your fundraising journey.</p>
                                </div>
                                <ul className="tabs-element">
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Title</h4>
                                            <p>Use the title slide to gain investors attention and get a kick start into your pitch!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Problem</h4>
                                            <p>What is the problem your are trying to solve and is it really a problem worth solving?</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up"> 
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Solution</h4>
                                            <p>Show off how you solve the big problem you just described with your business.</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Product</h4>
                                            <p>You've got something to show? The product slide is the right slide to do it!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Market</h4>
                                            <p>Is the market big enough for huge growth? An important question you should answer!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Competition</h4>
                                            <p>There is no business without competition. Learn how to show it the right way.</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Traction</h4>
                                            <p>One thing that helps you to convince investors to love your startup is to show traction!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Business Model</h4>
                                            <p>What's the business model that drives your startup? We show ways to show it the right way!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Team</h4>
                                            <p>Investors invest in people. Impress them with your kick-ass team full of experience.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Milestones</h4>
                                            <p>Learn how to display all information regarding your next steps and developments.</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Title</h4>
                                            <p>Use the title slide to gain investors attention and get a kick start into your pitch!</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Financials</h4>
                                            <p>Learn how to design a compelling Financials Slide that leaves no questions open.</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Ask</h4>
                                            <p>How much money do you need for the next growth step and what are you going to do with it?</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="green-box"></div>
                                        <div className="element-content">
                                            <h4>Contact</h4>
                                            <p>The contact slide is the last thing the investor will see. Don't forget the CTA!</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="label-block" data-aos="fade-up">
                                    <h6 className="label">Available in:</h6>
                                    <div className="label-img"><img src="assets/images/microsoft-icon.png" alt="micro-soft-icon"/></div>
                                </div>
                                <section className="download-block" data-aos="fade-up">
                                    <div className="content-block">
                                        <h4>Start building your <span className="d-block">Financials KPIs today!</span></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    </div>
                                    <div className="banner-btn">
                                    <a href="/">Purchase Now <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                </section>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade" id="v-pills-KPIs" role="tabpanel" aria-labelledby="v-pills-KPIs-tab">KPIs</div>
                        <div className="tab-pane fade" id="v-pills-Forecast" role="tabpanel" aria-labelledby="v-pills-Forecast-tab">Forecast</div>
                        <div className="tab-pane fade" id="v-pills-Accounts" role="tabpanel" aria-labelledby="v-pills-Accounts-tab">Accounts</div>
                        <div className="tab-pane fade" id="v-pills-Scenarios" role="tabpanel" aria-labelledby="v-pills-Scenarios-tab">Scenarios</div>
                        <div className="tab-pane fade" id="v-pills-Notes" role="tabpanel" aria-labelledby="v-pills-Notes-tab">Notes</div>
                        <div className="tab-pane fade" id="v-pills-Updates" role="tabpanel" aria-labelledby="v-pills-Updates-tab">Updates</div>
                        <div className="tab-pane fade" id="v-pills-CRM" role="tabpanel" aria-labelledby="v-pills-CRM-tab">CRM</div>
                        <div className="tab-pane fade" id="v-pills-Diligence" role="tabpanel" aria-labelledby="v-pills-Diligence-tab">Diligence</div>
                        <div className="tab-pane fade" id="v-pills-Chart" role="tabpanel" aria-labelledby="v-pills-Chart-tab">Chart</div>
                        <div className="tab-pane fade" id="v-pills-Checklist" role="tabpanel" aria-labelledby="v-pills-Checklist-tab">Checklist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default TabSection;