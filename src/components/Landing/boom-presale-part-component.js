const BoomIntroducingPartComponent = (props) => {
    return (
        <div className="part">
            <div className="item-tag">
                <icon className='fas fa-flask title-icon'></icon>
                <span className="flask-number title-icon">{props.number}</span>
            </div>
            <div className="content">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default BoomIntroducingPartComponent;