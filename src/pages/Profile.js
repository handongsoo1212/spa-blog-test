import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: '김민준',
        description: '이 페이지를 만드는 데 도움을 주신 분'
    },
    jeongeun: {
        name: '김정은',
        description: '북한의 "정치적인" 대통령'
    },
    yunsung: {
        name: '유연성',
        description: '연성운수 사장이다 이런말이에요'
    },
    dongsiu: {
        name: '한동수',
        description: '제작지이니까 숭배해야되는 사람 연성아 숭배해라(?)'
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    
    return(
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다</p>
            )}
        </div>
    )
}

export default Profile;