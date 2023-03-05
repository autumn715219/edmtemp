import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

function Banner({ bannerList, height }) {
  const banner = useRef(null);

  useEffect(() => {
    new Swiper(banner.current, {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: false,
    });
  }, []);

  return (
    <div ref={banner} style={{ overflow: 'hidden', height: height ? `${height}px` : '150px' }}>
      <div className='swiper-wrapper'>
        {bannerList.map((item, index) => (
          <div key={index} className='swiper-slide'>
            <div
              style={{
                height: `${height}px` || '150px',
                background: `url(${item.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <a href={item.to} style={{ display: 'block', width: '100%', height: '100%' }}></a>
            </div>
          </div>
        ))}
      </div>
      <div className='swiper-pagination'></div>
    </div>
  );
}

export default Banner;
