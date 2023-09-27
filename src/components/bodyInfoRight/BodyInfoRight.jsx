import './bodyInfoRight.css';

export default function BodyInfoRight() {
  return (
    <>
      <div>
        <div className='bodyInfoRight_uppertext'>
          <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
          only
          <span> $14 each</span> ($84.00 total!)
        </div>
        <div className='container_ionizer'>
          <div>
            <img src='../../public/smallclarifion.png' alt='smallclarifion' className='img_smallclarifion'/>
          </div>
          <div className='ionizer_description'>
          <div className='ionizer-price'>
            <div>Clarifion Air Ionizer</div>
            <div className='price_low'>$180</div>
            <span>$84</span>
          </div>
          <div className='ionizer_stars'>
            <img src='../../public/Star.png' alt='star' className='img_ion_stars'/>
            <img src='../../public/Star.png' alt='star' className='img_ion_stars'/>
            <img src='../../public/Star.png' alt='star' className='img_ion_stars'/>
            <img src='../../public/Star.png' alt='star' className='img_ion_stars'/>
            <img src='../../public/Star.png' alt='star' className='img_ion_stars'/>
          </div>
          <div className='stock'>
            <input type='radio' checked className='radio'/>
            <label>12 left in Stock</label>
          </div>
          <div className='ionizer_text'>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
            </div>
            </div>
        </div>
        <div>
          <div className='container_tick'>
            <img
              src='../../public/tick-circle.png'
              alt='tick'
              className='img_tick'
            />
            <p>
              Negative Ion Technology may <strong>help with allergens</strong>
            </p>
          </div>
          <div className='container_tick'>
            <img
              src='../../public/tick-circle.png'
              alt='tick'
              className='img_tick'
            />
            <p>
              Designed for <strong>air rejuvenation</strong>
            </p>
          </div>
          <div className='container_tick'>
            <img
              src='../../public/tick-circle.png'
              alt='tick'
              className='img_tick'
            />
            <p>
              <strong>Perfect for every room</strong> in all types of places.
            </p>
          </div>
          <div className='container_discount'>
            <img
              src='../../public/percentage.png'
              alt='percentage'
              className='img_percentage'
            />
            <p>
              Save <span>53%</span> and get <span>6 extra Clarifision</span> for
              only <span>$14 Each.</span>
            </p>
          </div>
          <div className='claim'>
            <strong>Yes - Claim my discount -&gt;</strong>
          </div>
          <div className='shipping'>
            <p>Free Shipping</p>
            <p className='stick'>|</p>
            <img
              src='../../public/lock-black.png'
              alt='lock'
              className='img_lock-black'
            />
            <p>Secure 256-bit SSL encryption.</p>
            <p className='stick'>|</p>
            <img
              src='../../public/cards.png'
              alt='cards'
              className='img_cards'
            />
          </div>
          <div className='dismiss'>No thanks, I don’t want this.</div>
          <div className='satisfaction'>
            <img
              src='../../public/satisfaction.png'
              alt='lock'
              className='img_satisfaction'
            />
            <p>
              If you are not completely thrilled with your Clarifion - We have a{' '}
              <strong>30 day satisfaction guarantee</strong>. Please refer to
              our return policy at the bottom of the page for more details.
              Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
