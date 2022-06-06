import { RatingStarComponent } from './RatingStarComponent';

function RatingTypeComponent() {
    return (
        <div className="row">
            <div className="col-md-5"><p className="feedback-type mb-1">Content Quality</p></div>
            <div className="col-md-7">
                <RatingStarComponent marked="true" />
                <RatingStarComponent marked="true" />
                <RatingStarComponent marked="true" />
                <RatingStarComponent marked="true" />
                <RatingStarComponent marked="true" />
            </div>
        </div>
    )
}

export { RatingTypeComponent };