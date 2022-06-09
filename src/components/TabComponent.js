import { TabButtonComponent } from './';
import { useState, useEffect } from 'react';
import './css/TabComponent.css';

function TabComponent(props) {
    const { title, tabPlacement, contents, initialActiveTab } = props;

    const [alignment, setAlignment] = useState('d-flex flex-column top-right-tab-flex');
    const [contentAlign, setContentAlign] = useState('d-flex justify-content-lg-between margin-bottom-2 top-right-tab-top-buttons-col');
    const [tabSize, setTabSize] = useState('tab-flex-item-2 bg-grey');
    const [contentStyle, setContentStyle] = useState({ 'height': '100%' });
    const [content, setContent] = useState('');
    const [activeTab, setActiveTab] = useState(0);

    function renderTitle() {
        if (title) {
            return <h6 className="">{title}</h6>
        }
    }

    function renderStyle() {
        if (tabPlacement == "left") {
            setAlignment('d-flex bottom-left-tab-flex');
            setContentAlign('d-flex flex-column justify-content-md-between margin-right-2 bottom-left-tab-left-buttons-col');
            setTabSize('tab-flex-item-1 bg-grey');
            setContentStyle({ 'width': '100%' });
        }
    }

    function activateTab(index) {
        // console.log(contents[index]);
        setActiveTab(index);
        setContent(contents[index].title)
    }

    useEffect(() => {
        renderStyle();
        activateTab(initialActiveTab - 1);
    }, [tabPlacement]);

    return (

        <div className={alignment}>
            {renderTitle()}
            <div className={contentAlign}>
                {contents.map((item, i) => {
                    if (activeTab == i) {
                        return (
                            <div key={i} className={tabSize}>
                                <TabButtonComponent status="active" icon={item.iconName} onClick={() => activateTab(i)} />
                            </div>
                        )
                    } else {
                        return (
                            <div key={i} className={tabSize}>
                                <TabButtonComponent status="inactive" icon={item.iconName} onClick={() => activateTab(i)} />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="border rounded padding-2" style={contentStyle}>
                <h4>{content}</h4>

            </div>
        </div>
    )
}

export { TabComponent };