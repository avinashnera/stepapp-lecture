import { RatingStarComponent } from './RatingStarComponent';


function createRating(star) {
    var rating = [];
    for (var i = 0; i < 5; i++) {
        if (i < star) {
            rating.push("true");
        } else {
            rating.push("false");
        }
    }
    // console.log("rating", star, rating);
    return rating;
}

function RatingTypeComponent(props) {
    const { title, star } = props;
    var rating = createRating(star);
    return (
        <div className="rating-type-row">
            <div className="col-md-5"><p className="feedback-type">{title}</p></div>
            <div className="col-md-7" style={{ height: 'auto' }}>
                {
                    rating.map((i, index) => {
                        // console.log(i);
                        return <RatingStarComponent key={index} marked={i} />
                    })
                }
            </div>
        </div>
    )
}

export { RatingTypeComponent };