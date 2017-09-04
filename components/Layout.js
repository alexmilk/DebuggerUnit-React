import React from "react";
import EmbedSection from "./EmbedSection";

export default class Layout extends React.Component {

    render() {
        function getActiveSource() {
            const playerSource = document.kPlayer_ifp_ifp.kPlayer_ifp;
            const currentSource = playerSource.getSource();
            window.open(currentSource.src, '_blank');
        }

        return (
            <div className="navbarTop">
                <div style={{float : 'left'}}>
                    <a className="dropbtn">Home</a>
                    <div className="dropdown">
                        <button className="dropbtn">Player Functions</button>
                        <div className="dropdown-content">
                            <a onClick="buildPath();cleanPreviousErrors();">Reload player</a>
                            <a href="#" id="getActiveSource" onClick={getActiveSource}>Download active flavor</a>
                            <a onClick="getActiveBitrate()">Get Current Bitrate (Chrome/Firefox Only)</a>
                            <a onClick="getYouboraAnalytics()">Track Youbora Analytics</a>
                            <a onClick="getGoogleAnalytics()">Track Google Analytics</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Video Debugging Tools</button>
                        <div className="dropdown-content">
                            <a href="#">Get video aspect ratio</a>
                            <a href="https://shaka-player-demo.appspot.com/demo/" target="_blank">Standalone Dash Shaka player</a>
                            <a href="https://video-dev.github.io/hls.js/demo/" target="_blank">Standalone HLS.JS player</a>
                            <a href="http://players.akamai.com/hds/" target="_blank">Standalone Akamai HDS player</a>
                            <a href="http://players.akamai.com/hls/" target="_blank">Standalone Akamai HLS player</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Ad Debugging Tools</button>
                        <div className="dropdown-content">
                            <a href="#" id="testOnVast" onClick="goToVast()">Test on Google VAST inspector</a>
                            <a href="https://i.loopme.me/html/vpaid/test-page.html" target="_blank">VPAID ad tester</a>
                            <a href="http://tagvalidator.videohub.tv/?adtag=&playerType=jwPlayer&playerSize=640x360&adtagType=&adChoicesOverlay=off" target="_blank">VideoHub ad tester</a>
                            <a href="https://video-dev.github.io/hls.js/demo/" target="_blank">Standalone HLS.JS player</a>
                            <a href="http://www.zedo.com/vastvalidator/" target="_blank">Zedo ad tester</a>
                            <a href="https://www.spotx.tv/tag-generator/" target="_blank">SPOTX Tag Generator</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Commands</button>
                        <div className="dropdown-content">
                            <a href="#" id="cleanMedia()">Unload video asset</a>
                            <a href="#" id="removeThumb">Remove Thumbnail</a>
                            <a href="#" id="removePlay">Remove play button</a>
                            <a href="#" id="hideControls">Hide controls bar</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}