import { RatingStarComponent, RatingTypeComponent } from './';
import './css/FeedbackComponent.css';

function FeedbackComponent() {
    return (
        <div className="card p-2 feedback-card" style={{ height: '100%' }}>
            <div className="card-body p-0 pt-3">
                <div className="border rounded p-2 d-flex flex-column" style={{ height: '100%' }}>
                    <h6 className="feedback-title">Help us Improve</h6>
                    <RatingTypeComponent />

                    <div className="row mb-2">
                        <div className="col-md-5"><p className="feedback-type mb-1">Audio/Video Quality</p></div>
                        <div className="col-md-7">
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="false" />
                        </div>
                    </div>
                    <textarea type="textarea"
                        name="feedbackValue"
                        placeholder="Any other feedback"
                        style={{ height: '100%', width: '100%' }}
                        className="border rounded feedback-area p-1"
                    />

                </div>
            </div>
        </div>
    )
}

export { FeedbackComponent };