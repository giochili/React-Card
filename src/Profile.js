function Profile(props) {
    return (
        <div className="profile-container">
            <img
                className="avatar"
                src={props.avatar}
                alt="profile of avatar"
            ></img>
            <p className="profileTXT">
                {props.profileTXT}
                <strong className="strong">{props.strong}</strong>
            </p>
        </div>
    );
}

export default Profile;
