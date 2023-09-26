import './bodyInfo.css';

export default function BodyInfo() {
  return (
    <>
      <div className='container_body'>
        <div className='container_body_logos'>
          <img src='../../public/clarifionlogo.png' alt='logo' />
          <img src='../../public/mcafee.png' alt='mcafee' />
          <img src='../../public/norton-antivirus-logo.png' alt='norton' />
        </div>
        <div>
          <div>Wait ! your order in progress.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
        </div>
        <div className='container_body_steps'>
          <div className='container_body_steps_single'>
            <img src='../../public/greencheck.png' alt='check' className='img_steps'/>
            <div>Step 1 :</div>
            <div>Cart Review</div>
          </div>
          <div className='container_body_steps_single'>
            <img src='../../public/greencheck.png' alt='check' className='img_steps'/>
            <div>Step 2 :</div>
            <div>Checkout</div>
          </div>
          <div className='container_body_steps_single'>
            <img src='../../public/numberthree.png' alt='three' className='img_steps'/>
            <div>Step 3 :</div>
            <div>Special Offer</div>
          </div>
          <div className='container_body_steps_single'>
            <img src='../../public/numberfour.png' alt='four' className='img_steps'/>
            <div>Step 4 :</div>
            <div>Confirmation</div>
          </div>
        </div>
        <div>
          <div>
          <img src='../../public/bigclarifion.png' alt='clarifion_img' className='img_bigclarifion'/>
            <div>review</div>
          </div>
          <div>
            <div>
              <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
              only <span>$14 each</span> ($84.00 total!)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
