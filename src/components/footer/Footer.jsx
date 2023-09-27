import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <div>Copyright (c) 2023</div>
        <div className='footer_center'>|</div>
        <a href='mailto:Clarifionsupport@clarifion.com' className='mail'>Clarifionsupport@clarifion.com</a>
      </div>
      <div className='footer_right'>
        <img src='images/lock.png' alt='lock' className='footer_img' />
        <div>Secure 256-bit SSL encryption.</div>
      </div>
    </div>
  );
}
