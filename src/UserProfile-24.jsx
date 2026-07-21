import style from './css/UserProfile-24.module.css'

function UserProfile() {
    return (
        <div>
            {/* <h1 className={style.heading}>User Profile</h1> */}
            <div className={style.card}>
                <img className={style.img} src="https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1785222000&v=beta&t=Q_jEtRwx58zI5mltdzBCjQA3uAXwHX01T2VHyLneqAs" alt="" />
                <div className={style.textwrap}>
                    <h4>Vivek Patel</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile