import './bodyInfoLeft.css';

export default function BodyInfoLeft() {
  return (
    <>
      <div className='bodyInfoLeft_container'>
        <div>
          <img
            src='../../public/bigclarifion.png'
            alt='clarifion_img'
            className='img_bigclarifion'
          />
        </div>
        <div className='bodyInfoLeft_customer_container'>
          <div className='bodyInfoLeft_customer_name'>
            <div>
              <img
                src='../../public/avatar.png'
                alt='avatar'
                className='avatar'
              />
            </div>
            <div>
              <div className='bodyInfoLeft_stars'>
                <img src='../../public/Star.png' alt='star' />
                <img src='../../public/Star.png' alt='star' />
                <img src='../../public/Star.png' alt='star' />
                <img src='../../public/Star.png' alt='star' />
                <img src='../../public/Star.png' alt='star' />
              </div>
              <div className='bodyInfoLeft_customer_container-info'>
                <div>Ken T.</div>
                <img
                  src='../../public/verify.png'
                  alt='verify'
                  className='verify-icon'
                />
                <div className='verified'>Verified Customer</div>
              </div>
            </div>
          </div>
          <div>
            <p className='review-text'>
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
