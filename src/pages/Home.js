import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지</p>
            <ul>
                <li>
                    <Link to='/about?detail=true&mode=1'>소개</Link>
                </li>
                <li>
                    <Link to='/profiles/velopert'>velopert의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/jeongeun'>jeongeun의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/yunsung'>yunsung의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/dongsiu'>dongsiu의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/void'>탈퇴한 사용자의 프로필</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;