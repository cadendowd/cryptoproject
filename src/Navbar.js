import React from "react";

function Navbar () {
    return (
            <div style = {{backgroundColor: 'darkorange', height: '75px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', display: 'flex', justifyContent: 'space-between', verticalAlign: 'center'}}>
                <div style = {{padding: '2px', marginLeft: '30px'}}>
                    <h2 style = {{color: "white"}}>Caden's Chainalysis Interview Pt. 1</h2>
                </div>
                <div style = {{padding: '5px', marginRight: '30px', marginTop: '5px'}}>
                    <a href = "mailto:caden@dowd.org" style = {{textDecoration: 'none', color: 'white'}}>
                        <div style = {{backgroundColor: 'orange', height: '40px', width: '150px', borderRadius: '10%', boxShadow: '0 3px 10px rgb(0 0 0 / 0.05)', display: 'table'}}>
                            <div style = {{display: 'table-cell', verticalAlign: 'middle'}}>
                                <strong><p>Contact Me</p></strong>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    )
}

export default Navbar