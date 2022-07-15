import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {

  const isLogin = props.isLogin;

  return (
    <div>
        <h1 className='home__title'>시큐어포인트 연구소</h1>
        <div className='home__subTitle'>
            {
              isLogin ?
                <div className='subTtitle__1'>어서오세요 시큐어 포인트 연구소 입니다.</div>
            : 
              <div className='subTtitle__2'>회원가입을 하시면 보다 좋은 서비스를 이용 하실 수 있습니다.</div>
            }
            {
              isLogin ?
                <div className='subTtitle__1'>어서오세요 시큐어 포인트 연구소 입니다.</div>
                :
                <div className='home__btn'>
                  <p className='home__btn__question'>회원가입을 하시겠습니까?</p>
                  <Link to='register'>회원가입</Link>
                </div>
            }
        </div>
    </div>
  )
}

export default Home