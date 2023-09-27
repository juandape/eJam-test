import './bodyInfo.css';
import BodyInfoLeft from '../bodyInfoLeft/BodyInfoleft';
import BodyInfoRight from '../bodyInfoRight/BodyInfoRight';

export default function BodyInfo() {
  return (
    <>
      <div className='container_body'>
        <div className='container_body_logos'>
          <img src='images/clarifionlogo.png' alt='logo' className='img_logo' />
          <div className='container_body_logos_right'>
            <img src='images/mcafee.png' alt='mcafee' className='img_mcafee' />
            <img
              src='images/norton-antivirus-logo.png'
              alt='norton'
              className='img_norton'
            />
          </div>
        </div>
        <div>
          <div className='container_body_progress'>
            Wait ! your order in progress.
          </div>
          <div className='container_body_progress_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
        </div>
        <div className='container_body_steps'>
          <div className='container_body_steps_single'>
            <img
              src='images/greencheck.png'
              alt='check'
              className='img_steps'
            />
            <div className='steps_number'>Step 1 :</div>
            <div>Cart Review</div>
          </div>
          <div className='container_body_steps_single'>
            <img
              src='images/greencheck.png'
              alt='check'
              className='img_steps'
            />
            <div className='steps_number'>Step 2 :</div>
            <div>Checkout</div>
          </div>
          <div className='container_body_steps_single'>
            <img
              src='images/numberthree.png'
              alt='three'
              className='img_steps'
            />
            <div className='steps_number'>
              <strong>Step 3 :</strong>
            </div>
            <div>
              <strong>Special Offer</strong>
            </div>
          </div>
          <div className='container_body_steps_single'>
            <img src='images/numberfour.png' alt='four' className='img_steps' />
            <div className='steps_number'>Step 4 :</div>
            <div>Confirmation</div>
          </div>
        </div>
        <div className='container_body_fullinfo'>
          <div>
            <BodyInfoLeft />
          </div>
          <div>
            <BodyInfoRight />
          </div>
        </div>
      </div>
    </>
  );
}
