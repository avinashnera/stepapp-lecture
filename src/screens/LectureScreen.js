import { VideoPlayerComponent } from "../components/VideoPlayerComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import './css/LectureScreen.css';
import { TabButtonComponent, FeedbackComponent, TabComponentOne, TabComponentTwo, TabComponent, RatingTypeComponent, ProgressComponent } from '../components';


function LectureScreen() {
    return (
        <div className="bg-grey" style={{ height: (window.innerHeight - 30), width: '100%', marginTop: '15px' }}>
            <div className="main-container bg-grey"
                style={{
                    height: (window.innerHeight - 30),
                    width: ((window.innerHeight - 30) / 0.7),
                    // marginTop: '15px',
                    // marginBottom: '15px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                <div className="main-row no-gutter-x d-flex justify-content-between" style={{ height: (window.innerHeight - 30) }}>
                    <div className="col-left d-flex flex-column justify-content-between">

                        <div className="custom-card top-left-section bg-white">
                            <VideoPlayerComponent url="https://www.youtube.com/watch?v=TUxAZGt1pKw" />
                        </div>
                        <div class="center-left-section">
                            <ProgressComponent total={5} completed={3} />
                        </div>

                        <div className="custom-card padding-2 bottom-left-section bg-white">
                            <TabComponent initialActiveTab={1} tabPlacement="left" contents={[
                                { iconName: 'user', title: 'Notes' },
                                { iconName: 'envelope', title: 'Tab 2' },
                                { iconName: 'star', title: 'Tab 3' },
                                { iconName: 'user', title: ' Tab 4' },
                                { iconName: 'envelope', title: 'Tab 5' }
                            ]} />
                        </div>

                    </div>
                    <div className="col-right d-flex flex-column justify-content-between">

                        <div className="custom-card padding-2 top-right-section bg-white">
                            <TabComponent initialActiveTab={3} tabPlacement="top" title="Game Zone" contents={[
                                { iconName: 'envelope', title: 'Marks' },
                                { iconName: 'star', title: 'Tab 2a' },
                                { iconName: 'star', title: 'Tab 3aa' },
                                { iconName: 'user', title: ' Tab 4a' },
                                { iconName: 'user', title: 'Tab 5a' },
                                { iconName: 'user', title: 'Tab 6a' }
                            ]} />
                        </div>

                        <div className="custom-card bottom-right-section bg-white">
                            <FeedbackComponent sectionTitle="Help us Improve">
                                <RatingTypeComponent title="Content Quality" star={4} />
                                <RatingTypeComponent title="Audio/Video Quality" star={3} />
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
        </div>
    );
}

export { LectureScreen };