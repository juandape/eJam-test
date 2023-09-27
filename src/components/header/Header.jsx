import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_text'>
        <img src='../../public/Vector.png' alt='vector' className='header_img'/>
        <div>30-DAY SATISFACTION GUARANTEE</div>
      </div>

      <div className='header_text'>
        <img src='../../public/ph_truck-light.png' alt='truck' className='header_img'/>
        <div>Free delivery on orders over $40.00</div>
      </div>

      <div className='header_text'>
        <img src='../../public/mdi_cards-heart-outline.png' alt='heart' className='header_img'/>
        <div>50.000+ HAPPY CUSTOMERS</div>
      </div>

      <div className='header_text'>
      <img src='../../public/fluent_arrow-sync-checkmark-20-regular.png' alt='heart' className='header_img'/>
        <div>100% Money Back Guarantee</div>
      </div>
    </div>
  );
}
