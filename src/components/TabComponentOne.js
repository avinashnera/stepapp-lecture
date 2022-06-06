import { TabButtonComponent } from './';

function TabComponentOne() {
    return (
        <div className="d-flex">
            <div className="d-flex flex-column justify-content-lg-between mr-2">
                <div className="mb-2 tab-flex-item-1">
                    <TabButtonComponent status="active" icon="user" />
                </div>
                <div className="mb-2 tab-flex-item-1">
                    <TabButtonComponent status="inactive" icon="envelope" />
                </div>
                <div className="mb-2 tab-flex-item-1">
                    <TabButtonComponent status="inactive" icon="user" />
                </div>
                <div className="mb-2 tab-flex-item-1">
                    <TabButtonComponent status="inactive" icon="star" />
                </div>
                <div className="tab-flex-item-1">
                    <TabButtonComponent status="inactive" icon="user" />
                </div>

            </div>
            <div className="border rounded p-2" style={{ 'width': '100%' }}>
                <h4>Notes</h4>
            </div>
        </div>
    )
}

export { TabComponentOne };