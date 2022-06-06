import { VideoPlayerComponent } from "../components/VideoPlayerComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import './css/LectureScreen.css';
import { TabButtonComponent, FeedbackComponent } from '../components';


function LectureScreen() {
    return (
        <div className="container bg-light" style={{ height: '100vh' }}>
            <div className="row py-3" style={{ height: '100vh' }}>
                <div className="col-md-7 px-2 bg-light">
                    <div className="" style={{ height: '45%' }}>
                        {/* video player section */}
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body">
                                <VideoPlayerComponent></VideoPlayerComponent>
                            </div>
                        </div>
                    </div>


                    <div className="pt-3" style={{ height: '55%' }}>
                        {/* tab section */}
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body p-2">
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="d-flex">
                                        <div className="d-flex flex-column justify-content-lg-between mr-2">
                                            {/* <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="active" icon="envelope"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="star"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="envelope"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent> */}
                                            <div className="mb-2 tab-flex-item-1">
                                                <TabButtonComponent status="active" icon="user" />
                                            </div>
                                            <div className="mb-2 tab-flex-item-1">
                                                <TabButtonComponent status="inactive" icon="envelope" />
                                            </div>
                                            <div className="mb-2 tab-flex-item-1">
                                                <TabButtonComponent status="inactive" icon="user" />
                                            </div>
                                            <div className="mb-2 tab-flex-item-1">
                                                <TabButtonComponent status="inactive" icon="star" />
                                            </div>
                                            <div className="tab-flex-item-1">
                                                <TabButtonComponent status="inactive" icon="user" />
                                            </div>

                                        </div>
                                        <div className="border rounded p-2" style={{ 'width': '100%' }}>
                                            <h4>Notes</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 px-2 bg-light">
                    <div className="" style={{ height: '65%' }}>
                        {/* tab section */}
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body p-2">
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="d-flex flex-column">
                                        <h6 className="">Game Zone</h6>
                                        {/* <div className="d-flex justify-content-lg-between mb-2">
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="active" icon="user"></TabButtonComponent>
                                        </div> */}
                                        <div className="d-flex justify-content-lg-between mb-2">
                                            {/* <TabButtonComponent status="inactive" icon="user"></TabButtonComponent>
                                            <TabButtonComponent status="active" icon="envelope"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="star"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="envelope"></TabButtonComponent>
                                            <TabButtonComponent status="inactive" icon="user"></TabButtonComponent> */}
                                            <div className="mr-2 tab-flex-item-2">
                                                <TabButtonComponent status="active" icon="user" />
                                            </div>
                                            <div className="mr-2 tab-flex-item-2">
                                                <TabButtonComponent status="inactive" icon="envelope" />
                                            </div>
                                            <div className="mr-2 tab-flex-item-2">
                                                <TabButtonComponent status="inactive" icon="user" />
                                            </div>
                                            <div className="mr-2 tab-flex-item-2">
                                                <TabButtonComponent status="inactive" icon="star" />
                                            </div>
                                            <div className="mr-2 tab-flex-item-2">
                                                <TabButtonComponent status="inactive" icon="user" />
                                            </div>
                                            <div className="tab-flex-item-1 tab-flex-item-2">
                                                <TabButtonComponent status="inactive" icon="user" />
                                            </div>
                                        </div>
                                        <div className="border rounded p-2" style={{ 'height': '100%' }}>
                                            <h4>Notes</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3" style={{ height: '35%' }}>
                        {/* rating section */}
                        <FeedbackComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LectureScreen };