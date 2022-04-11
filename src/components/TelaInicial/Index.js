import React from "react";
import './TelaInicial.css';
import {Helmet} from "react-helmet";

class TelaInicial extends React.Component {
    render () {
    return(
            <div id="main-body">
            <section id="page-structure" className="ajax">
            <header className="eliza height-95 black back-block-green-bottom-right">
                <nav className="padded">
                <a href="http://nclud.com" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/141552/logo.svg" id="nclud-logo"/></a>
                </nav>
                <div className="header-text grid_row padded-horizontal">
                <h2 className="grid2">Revolutionary is our baseline. Different is our first step. And radical means we’re just getting started.</h2>
                <h1 className="grid3">We are nclud.</h1>
                </div>

                <div id="canvas">
                <img id="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/141552/header-home-fallback.jpg" data-fallback="https://s3-us-west-2.amazonaws.com/s.cdpn.io/141552/header-home-fallback.jpg"/>
                </div>
            </header>
                </section>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Teste</title>
                <script src="./glitch.js" type="text/babel" />
                </Helmet>
            </div>
    );
 }
}

export default TelaInicial;