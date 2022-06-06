import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/TabButtonComponent.css';

function TabButtonComponent(props) {
    const { status, icon } = props;
    // console.log("icon value: ", icon);

    if (status == 'active') {
        return (
            <div className="tab-button align-items-center justify-content-md-center border rounded tab-active">
                <FontAwesomeIcon icon={icon} size="2x" color="#FC8643" />
            </div>

        )
    } else {
        return (
            <div className="tab-button align-items-center justify-content-md-center border rounded">
                <FontAwesomeIcon icon={icon} size="2x" color="#fff" />
            </div>
        )
    }

}

export { TabButtonComponent };