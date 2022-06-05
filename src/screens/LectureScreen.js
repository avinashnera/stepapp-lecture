import { VideoPlayerComponent } from "../components/VideoPlayerComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import './css/LectureScreen.css';



function LectureScreen() {
    return (
        <div className="container p-4 bg-light">
            <div className="row">

                { /* left col */}
                <div className="col-md-7">

                    {/* video player section */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <VideoPlayerComponent></VideoPlayerComponent>
                        </div>
                    </div>

                    {/* tab section */}
                    <div className="card">
                        <div className="card-body p-2">
                            <div className="d-flex">
                                {/* tab buttons */}
                                <div className="d-flex flex-column mr-2">
                                    <div className="tab-button px-2 py-3 m-1 border rounded tab-active"><FontAwesomeIcon icon={faUser} size="xl" color="#FC8643" /></div>
                                    <div className="tab-button px-2 py-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button px-2 py-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button px-2 py-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button px-2 py-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                </div>

                                {/* tab view area */}
                                <div className="border rounded p-2 m-1" style={{ 'width': '100%' }}>
                                    <h4>Notes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                { /* right col */}
                <div className="col-md-5">

                    {/* tab section */}
                    <div className="card mb-4">
                        <div className="card-body p-2">
                            <div className="d-flex flex-column">
                                <h6 className="ml-1">Game Zone</h6>
                                {/* tab buttons */}
                                <div className="d-flex flex-row mb-2 justify-content-md-between">
                                    <div className="tab-button py-2 px-3 m-1 border rounded tab-active"><FontAwesomeIcon icon={faUser} size="xl" color="#FC8643" /></div>
                                    <div className="tab-button py-2 px-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button py-2 px-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button py-2 px-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button py-2 px-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                    <div className="tab-button py-2 px-3 m-1 border rounded"><FontAwesomeIcon icon={faUser} size="xl" color="#fff" /></div>
                                </div>

                                {/* tab view area */}
                                <div className="border rounded p-2 m-1" style={{ 'width': 'auto' }}>
                                    <h4>Notes</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* rating section */}
                    <div className="card feedback-card">
                        <div className="card-body p-2 pt-3">
                            <div className="border rounded m-1 p-2">
                                <h6 className="feedback-title">Help us Improve</h6>
                                <div className="row">
                                    <div className="col-md-5"><p className="feedback-type mb-1">Content Quality</p></div>
                                    <div className="col-md-7">
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#BBBBBB" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-5"><p className="feedback-type mb-1">Audio/Video Quality</p></div>
                                    <div className="col-md-7">
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#FFCF25" />
                                        <FontAwesomeIcon icon={faStar} color="#BBBBBB" />
                                    </div>
                                </div>
                                <div className="row"></div>
                                <div className="border rounded p-2" style={{ 'width': 'auto' }}>
                                    <p class="feedback-area">Any other feedback</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LectureScreen };