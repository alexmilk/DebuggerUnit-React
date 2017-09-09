import React from "react";
import ReactDOM from "react-dom";

export default class TopNavbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar bg-primary" style="min-height:32px !important; top: 0 !important; border-radius: 0 !important;">
                    <div style="float: left">
                        <a className="dropbtn">Home</a>
                        <div className="dropdown">
                            <button className="dropbtn">Player Functions</button>
                            <div className="dropdown-content">
                                <a onClick="buildPath();cleanPreviousErrors();">Reload player</a>
                                <a href="#" id="getActiveSource" onClick="getActiveSource()">Download active flavor</a>
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
                    <div style="float: right; height: 25px; width: 600px; padding-right: 20px; padding-top: 2px">
                        <form className="form-inline pull-right">
                            <div className="form-group">
                                <input type="search" className="form-control input-sm" style="height: 19px !important;" id="searchInput" placeholder="Search VPaaS"/>
                            </div>
                            <button type="submit" className="btn btn-default btn-xs" style="height: 19px !important; margin-top: 2px" onClick="vpaasSearch()">Search</button>
                        </form>
                    </div>
                </nav>
            </div> 
    );
        }
        }

ReactDOM.render(<TopNavbar />, document.getElementById('topNavBar'));
