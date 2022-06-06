import { TabButtonComponent } from './';
import { useState, useEffect } from 'react';

function TabComponent(props) {
    const { title, tabPlacement, contents, initialActiveTab } = props;

    const [alignment, setAlignment] = useState('d-flex flex-column');
    const [contentAlign, setContentAlign] = useState('d-flex justify-content-lg-between mb-2');
    const [tabSize, setTabSize] = useState('mr-2 tab-flex-item-2');
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
            setAlignment('d-flex');
            setContentAlign('d-flex flex-column justify-content-lg-between mr-2');
            setTabSize('mb-2 tab-flex-item-1');
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
            <div className="border rounded p-2" style={contentStyle}>
                <h4>{content}</h4>

            </div>
        </div>
    )
}

export { TabComponent };