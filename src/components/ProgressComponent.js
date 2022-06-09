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
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="d-flex justify-content-center padding-2">
                    {
                        progress.map((item, index) => {
                            // console.log("aksnfk", (item == 'true'));
                            return <div key={index} className={`m-1 bar ${(item == 'true') ? 'completed' : ''}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export { ProgressComponent };