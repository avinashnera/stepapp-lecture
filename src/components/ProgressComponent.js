import './css/ProgressComponent.css';

function createProgress(total, completed) {
    var progress = [];
    for (var i = 0; i < total; i++) {
        if (i < completed) {
            progress.push("true");
        } else {
            progress.push("false");
        }
    }
    return progress;
}

function ProgressComponent(props) {
    const { total, completed } = props;
    var progress = createProgress(total, completed);

    return (
        <div className="main-row justify-content-center">
            <div className="col-md-6">
                <div className="d-flex full-height">
                    {
                        progress.map((item, index) => {
                            // console.log("aksnfk", (item == 'true'));
                            return <div key={index} className={`bar ${(item == 'true') ? 'completed' : ''}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export { ProgressComponent };