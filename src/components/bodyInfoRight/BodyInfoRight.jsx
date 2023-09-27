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
        <div>
          <div>
            <img src='../../public/smallclarifion.png' alt='smallclarifion' />
          </div>
          <div>
            <div>Clarifion Air Ionizer</div>
            <div>$180</div>
            <span>$84</span>
          </div>
          <div>
            <img src='../../public/Star.png' alt='star' />
            <img src='../../public/Star.png' alt='star' />
            <img src='../../public/Star.png' alt='star' />
            <img src='../../public/Star.png' alt='star' />
            <img src='../../public/Star.png' alt='star' />
          </div>
          <div>
            <input type='radio' checked />
            <label>12 left in Stock</label>
          </div>
          <div>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </div>
          
        </div>
      </div>
    </>
  );
}
