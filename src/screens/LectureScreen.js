import { VideoPlayerComponent } from "../components/VideoPlayerComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import './css/LectureScreen.css';
import { TabButtonComponent, FeedbackComponent, TabComponentOne, TabComponentTwo, TabComponent, RatingTypeComponent, ProgressComponent } from '../components';


function LectureScreen() {
    return (
        <div className="container bg-light" style={{ height: '100vh' }}>
            <div className="row py-3" style={{ height: '100vh' }}>
                <div className="col-md-7 px-2 bg-light">
                    <div className="" style={{ height: '50%' }}>
                        {/* video player section */}
                        <div className="card" style={{ height: '95%' }}>
                            <div className="card-body">
                                <VideoPlayerComponent url="https://www.youtube.com/watch?v=TUxAZGt1pKw" />
                            </div>
                        </div>
                        <ProgressComponent total={5} completed={3} />
                    </div>


                    <div className="pt-3" style={{ height: '50%' }}>
                        {/* tab section */}
                        <div className="card" style={{ height: '100%' }}>
                            <div className="card-body p-2">
                                <div className="row" style={{ height: '100%' }}>
                                    <TabComponent initialActiveTab={1} tabPlacement="left" contents={[
                                        { iconName: 'user', title: 'Notes' },
                                        { iconName: 'envelope', title: 'Tab 2' },
                                        { iconName: 'star', title: 'Tab 3' },
                                        { iconName: 'user', title: ' Tab 4' },
                                        { iconName: 'envelope', title: 'Tab 5' }
                                    ]} />
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
                                    <TabComponent initialActiveTab={3} tabPlacement="top" title="Game Zone" contents={[
                                        { iconName: 'envelope', title: 'Marks' },
                                        { iconName: 'star', title: 'Tab 2a' },
                                        { iconName: 'star', title: 'Tab 3aa' },
                                        { iconName: 'user', title: ' Tab 4a' },
                                        { iconName: 'user', title: 'Tab 5a' },
                                        { iconName: 'user', title: 'Tab 6a' }
                                    ]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3" style={{ height: '35%' }}>
                        {/* rating section */}
                        <FeedbackComponent sectionTitle="Help us Improve">
                            <RatingTypeComponent title="Content Quality" star={4} />
                            <RatingTypeComponent title="Audio/Video Quality" star={3} />
                            <RatingTypeComponent title="Lecture Quality" star={5} />
                            <textarea type="textarea"
                                name="feedbackValue"
                                placeholder="Any other feedback"
                                style={{ height: '100%', width: '100%' }}
                                className="border rounded feedback-area p-1"
                            />
                        </FeedbackComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LectureScreen };