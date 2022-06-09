import { RatingStarComponent, RatingTypeComponent } from './';
import './css/FeedbackComponent.css';

function FeedbackComponent(props) {
    const { children, sectionTitle } = props;
    return (
        <div className="card custom-card padding-2 feedback-card" style={{ height: '100%' }}>
            <div className="card-body p-0 padding-top-2">
                <div className="border rounded padding-2 d-flex flex-column" style={{ height: '100%' }}>
                    <h6 className="feedback-title">{sectionTitle}</h6>
                    {/* <RatingTypeComponent title="Content Quality" star={4} />
                    <RatingTypeComponent title="Audio/Video Quality" star={3} /> */}
                    {children}

                    {/* <div className="row mb-2">
                        <div className="col-md-5"><p className="feedback-type mb-1">Audio/Video Quality</p></div>
                        <div className="col-md-7">
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="true" />
                            <RatingStarComponent marked="false" />
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export { FeedbackComponent };