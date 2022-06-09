import { TabButtonComponent } from './';

function TabComponentTwo() {
    return (
        <div className="d-flex flex-column">
            <h6 className="">Game Zone</h6>
            <div className="d-flex justify-content-lg-between mb-2">
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
            <div className="border rounded padding-2" style={{ 'height': '100%' }}>
                <h4>Notes</h4>
            </div>
        </div>
    )
}

export { TabComponentTwo };