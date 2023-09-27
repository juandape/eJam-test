import './header.css';

export default function Header() {
  return (
    <div className='header-container'>
      <input type='radio' name='Carrusel' id='Slider1' />
      <input type='radio' name='Carrusel' id='Slider2' />
      <input type='radio' name='Carrusel' id='Slider3' />
      <input type='radio' name='Carrusel' id='Slider4' />
      <div className='header'>
        <div className='header_text'>
          <img src='images/Vector.png' alt='vector' className='header_img' />
          <div>30-DAY SATISFACTION GUARANTEE</div>
        </div>

        <div className='header_text'>
          <img
            src='images/ph_truck-light.png'
            alt='truck'
            className='header_img'
          />
          <div>Free delivery on orders over $40.00</div>
        </div>

        <div className='header_text'>
          <img
            src='images/mdi_cards-heart-outline.png'
            alt='heart'
            className='header_img'
          />
          <div>50.000+ HAPPY CUSTOMERS</div>
        </div>

        <div className='header_text'>
          <img
            src='images/fluent_arrow-sync-checkmark-20-regular.png'
            alt='heart'
            className='header_img'
          />
          <div>100% Money Back Guarantee</div>
        </div>
        <label htmlFor='Slider3' className='ArrowLeft Arrow1 arrows'>
          ❮
        </label>
        <label htmlFor='Slider1' className='ArrowLeft Arrow2 arrows'>
          ❮
        </label>
        <label htmlFor='Slider2' className='ArrowLeft Arrow3 arrows'>
          ❮
        </label>
        <label htmlFor='Slider4' className='ArrowLeft Arrow4 arrows'>
          ❮
        </label>

        <label htmlFor='Slider2' className='ArrowRight Arrow1 arrows'>
          ❯
        </label>
        <label htmlFor='Slider3' className='ArrowRight Arrow2 arrows'>
          ❯
        </label>
        <label htmlFor='Slider1' className='ArrowRight Arrow3 arrows'>
          ❯
        </label>
        <label htmlFor='Slider4' className='ArrowRight Arrow4 arrows'>
          ❯
        </label>
      </div>
    </div>
  );
}
