import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
       
        <footer>
            <div style={{ backgroundColor: "#CC4E5C"}} >
                <div style={{ display:"flex",justifyContent:"space-between"}} >

                    <div style={{padding:10}} >
                        
                        <p style={{color:"black",fontSize:16 }}>
                            <address style={{fontFamily: "cursive",color:"black"}}>
                                <span style={{fontFamily: "cursive",color:"black"}}>Adresse:</span>
                               Residence le palais
                               Menzah 7 bis
                               2037 Ariena
                                <br />
                                <span style={{fontFamily: "cursive",color:"black"}}>Telephone:</span>
                                94304460
                                <br />
                                <span style={{fontFamily: "cursive",color:"black"}}>Email:</span>
                                <a style={{ color:"black" }} href="fadhlaoui.marwa@gmail.com">
                                    fadhlaoui.marwa@gmail.com
                                </a>
                            </address>
                        </p>
                       
                        <p  style={{fontFamily: "cursive",color:"black" }}>
                            © 2022. All rights reserved. <br />
                            Site développé par : Fadhlaoui Marwa{" "}
                        </p>
                    </div>

                    <div style={{padding:30}}>
                        <ul
                            
                            style={{ fontSize: "18px" }}
                        >
                            <ol>
                            <Link to={"/"}>   <a style={{ fontFamily: "cursive",color:"black" }} href="/">Accueil</a> </Link>
                            </ol>
                            <ol>
                            <Link to={"/apropos"}> <a style={{fontFamily: "cursive", color:"black" }} href="/about">About</a> </Link>
                            </ol>
                            
                            <ol>
                            <Link to={"/contacteznous"}>  <a style={{ fontFamily: "cursive",color:"black" }} href="/contacteznous">Nos contacts</a></Link>
                            </ol>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};
export default Footer;
    