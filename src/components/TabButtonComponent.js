import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/TabButtonComponent.css';

function TabButtonComponent(props) {
    const { status, icon, onClick } = props;
    // console.log("icon value: ", icon);

    if (status == 'active') {
        return (
            //<div className="mb-2 tab-flex-item-1">
            <div className="tab-button align-items-center justify-content-md-center border rounded tab-active" onClick={onClick}>
                <FontAwesomeIcon icon={icon} color="#FC8643" style={{ width: '54%', height: '54%' }} />
            </div >
            //</div>
        )
    } else {
        return (
            // <div className="mb-2 tab-flex-item-1">
            <div className="tab-button align-items-center justify-content-md-center border rounded" onClick={onClick}>
                <FontAwesomeIcon icon={icon} color="#fff" style={{ width: '54%', height: '54%' }} />
            </div>
            //</div>
        )
    }
}

export { TabButtonComponent };