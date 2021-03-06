import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RatingStarComponent(props) {
    const { marked } = props;
    // console.log("marked: ", marked);

    if (marked == "true") {
        return <FontAwesomeIcon icon='star' size="sm" color="#FFCF25" />
    } else {
        // console.log("in false");
        return <FontAwesomeIcon icon='star' size="sm" color="#BBBBBB" />
    }

}

export { RatingStarComponent };