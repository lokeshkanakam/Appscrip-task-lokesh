import { Helmet } from 'react-helmet';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className='app'>
      <Helmet>
        <title>Appscrip task</title>
        <meta name="appsrcip" content="shopping application" />
      </Helmet>
      {/* mobile navbar */}
      <div>
      <nav className='mobile-navbar'>
        <div className='bars-logo'>
            <div className='bars'>
                <i className='fas fa-bars'></i>
            </div>
            <div className='logo'>
               <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.86164 16.7638C0.143608 18.3674 0.0478717 19.7796 0.0478717 20.3301C0.0478717 20.4737 0.167544 20.5694 0.287216 20.5694C0.981313 20.5215 3.03967 20.3061 4.85869 19.1812C5.1459 18.9897 5.43311 18.8222 5.67246 18.6307C8.85573 16.333 9.50196 12.8147 9.5977 11.9291C9.69343 11.8573 9.7413 11.8094 9.8131 11.7376H10.0285C10.1242 11.8094 10.1721 11.8573 10.2679 11.953C10.3397 12.7429 10.7944 15.591 13.4272 17.9845C13.499 18.0563 13.5947 18.0563 13.6905 18.0324C13.8102 17.9845 13.9298 17.9127 14.0734 17.8169C14.217 17.7451 14.217 17.5537 14.0974 17.4579C11.5124 15.1842 11.1534 12.0009 11.1295 11.8573C15.6531 12.5035 17.4721 15.8065 17.4721 15.7586C17.8072 16.2373 17.8551 16.4048 17.9508 16.5963C17.9508 16.5963 18.6449 17.7451 18.9082 19.3727C18.9321 19.5163 18.8124 19.6599 18.6449 19.636C17.9029 19.5163 17.2328 19.3009 16.7301 19.1094C16.6583 19.0855 16.5626 19.0855 16.5147 19.1333C16.3951 19.2291 16.2754 19.3248 16.1557 19.3966C16.0121 19.4923 16.0361 19.7317 16.2036 19.7796C17.0174 20.1386 18.238 20.4976 19.6501 20.5455C19.7938 20.5455 19.8895 20.4258 19.8895 20.3061C19.7698 17.6733 18.5013 15.7347 18.5013 15.7347C18.3577 15.4714 18.1662 15.2081 17.9508 14.9209C17.9508 14.9209 15.7249 11.5461 11.2731 10.9717C11.1534 10.9478 11.0816 10.852 11.0816 10.7563C11.0816 10.6366 11.0816 10.5409 11.0816 10.4691C11.0816 10.3973 11.2013 10.3494 11.2492 10.3255C14.5042 9.87073 16.5387 8.05172 17.4242 7.04647C17.4961 6.97467 17.496 6.855 17.4482 6.7832C17.3764 6.66353 17.3046 6.51992 17.2328 6.40025C17.161 6.25664 16.9695 6.25664 16.8498 6.37631C16.0121 7.40549 14.1931 9.03302 11.1295 9.46384C11.1534 9.2963 11.6082 5.41894 15.0069 3.14517C15.318 2.95369 15.6052 2.76222 15.8685 2.61861C15.8685 2.61861 17.0652 1.92452 18.6449 1.68517C18.7885 1.66124 18.9321 1.80484 18.9082 1.94845C18.7885 2.73829 18.5492 3.40845 18.3577 3.91107C18.3338 3.98288 18.3338 4.07861 18.3816 4.12648C18.4774 4.24615 18.5731 4.38976 18.6449 4.50943C18.7406 4.65304 18.98 4.6291 19.0518 4.46156C19.7459 2.88189 19.8416 1.4937 19.8416 0.943208C19.8416 0.799601 19.7219 0.703864 19.6023 0.703864C18.9082 0.751733 16.8498 0.967143 15.0308 2.09206C14.7197 2.28353 14.4085 2.47501 14.217 2.64255C11.0338 4.94025 10.3875 8.4586 10.2918 9.34417C10.1961 9.41597 10.1482 9.46385 10.0764 9.53565H9.86098C9.76524 9.46385 9.71737 9.41598 9.62163 9.32024C9.54983 8.53041 9.09507 5.70615 6.46229 3.28878C6.39048 3.21697 6.29475 3.21697 6.19901 3.26484C6.07934 3.33664 5.93574 3.40845 5.81606 3.48025C5.67246 3.55206 5.67246 3.74353 5.79213 3.83927C8.37704 6.11303 8.73606 9.29631 8.75999 9.43991C4.23639 8.81762 2.48918 5.56254 2.44131 5.51468C2.27377 5.2514 2.10623 4.98812 1.93869 4.67697C1.93869 4.67697 1.26852 3.55205 0.981312 1.90058C1.10098 1.78091 1.12492 1.75698 1.24459 1.63731C1.98656 1.75698 2.65672 1.97239 3.15934 2.16386C3.23115 2.1878 3.32688 2.1878 3.37475 2.11599C3.49442 2.02026 3.6141 1.92452 3.73377 1.85271C3.87737 1.75698 3.85344 1.51763 3.6859 1.44583C2.87213 1.08682 1.65147 0.7278 0.239344 0.679932C0.0957376 0.679932 0 0.799604 0 0.919275C0.119672 3.55206 1.3882 5.49074 1.3882 5.49074C1.53181 5.75402 1.72328 5.99336 1.93869 6.30451C1.93869 6.30451 4.16459 9.67926 8.61638 10.2537C8.73606 10.2776 8.80786 10.3734 8.80786 10.4691C8.80786 10.5648 8.80786 10.6606 8.80786 10.7324C8.80786 10.8281 8.71212 10.8999 8.66426 10.8999C5.40918 11.3307 3.37475 13.1737 2.48918 14.1789C2.44131 14.2507 2.41738 14.3225 2.44131 14.4183C2.48918 14.5619 2.58492 14.7055 2.65672 14.8491C2.72852 14.9927 2.92 14.9927 3.01574 14.873C3.85344 13.8678 5.67245 12.1924 8.75999 11.7615C8.73606 11.9291 8.2813 15.8065 4.88262 18.0802C4.76294 18.176 4.61934 18.2478 4.49967 18.3435C4.35607 18.4392 2.8482 19.2769 1.24459 19.5402C1.10099 19.5642 0.957377 19.4205 0.981312 19.2769C1.10098 18.4632 1.34033 17.7691 1.55574 17.2904C1.57967 17.2186 1.57967 17.1228 1.5318 17.075C1.43606 16.9553 1.34033 16.8117 1.26853 16.692C1.14886 16.5724 0.933443 16.5963 0.86164 16.7638ZM1.93869 16.5484C2.39344 17.1468 2.96787 17.6973 3.42262 18.1042C3.49443 18.176 3.61409 18.176 3.6859 18.1281C3.80557 18.0563 3.94918 17.9845 4.06885 17.9127C4.18852 17.8409 4.21246 17.6494 4.09278 17.5537C3.13541 16.7399 2.46525 15.7347 2.46525 15.7347C2.29771 15.4953 2.13016 15.2081 1.96262 14.8969C1.12492 13.2694 0.90951 11.7855 0.885576 10.7802C0.885576 10.3494 0.909507 9.94253 0.957376 9.58352C0.98131 9.51171 0.981312 9.46384 0.981312 9.46384C1.10098 8.55434 1.31639 7.81237 1.5318 7.28582C1.55573 7.21401 1.55574 7.11828 1.50787 7.07041C1.41213 6.97467 1.34033 6.83107 1.24459 6.71139C1.14885 6.56779 0.909507 6.59172 0.837704 6.75926C0.574426 7.42942 0.263278 8.33893 0.119672 9.46384C0.119672 9.46384 -0.454754 12.5274 1.43606 15.7107C1.57967 16.0458 1.77115 16.333 1.93869 16.5484ZM17.9269 4.7009C17.4721 4.10254 16.8977 3.55205 16.4429 3.14517C16.3711 3.07337 16.2754 3.07337 16.1797 3.12124C16.06 3.19304 15.9164 3.26484 15.7967 3.33665C15.677 3.40845 15.6531 3.59992 15.7728 3.69566C16.7301 4.50943 17.4003 5.51468 17.4003 5.51468C17.5679 5.73008 17.7354 6.0173 17.9029 6.35238C18.7406 7.97992 18.956 9.46385 18.98 10.4691C18.98 10.8999 18.956 11.3068 18.9082 11.6658C18.8842 11.7376 18.8842 11.7855 18.8842 11.7855C18.7646 12.7189 18.5492 13.4609 18.3338 13.9874C18.3098 14.0592 18.3098 14.155 18.3816 14.2268C18.4774 14.3465 18.5731 14.4661 18.6449 14.5858C18.7406 14.7294 18.98 14.7055 19.0518 14.5379C19.3151 13.8678 19.6262 12.9343 19.7698 11.8094C19.7698 11.8094 20.3442 8.74582 18.4534 5.56254C18.3098 5.2514 18.1183 4.96418 17.9269 4.7009ZM5.62458 2.66648C5.72032 2.61861 5.86393 2.52288 5.95966 2.47501C9.21474 0.94321 12.039 1.68518 13.3793 2.23567C13.4511 2.2596 13.5469 2.2596 13.5947 2.21173C13.7144 2.11599 13.8341 2.02026 13.9777 1.92452C14.1213 1.82878 14.0974 1.58944 13.9298 1.51763C12.0151 0.679932 10.0285 0.679932 9.90884 0.679932C9.76523 0.679932 7.08458 0.679929 4.81082 2.06812C4.54754 2.23566 4.30819 2.40321 4.04491 2.59468C4.04491 2.59468 3.27902 3.16911 2.56098 3.91107C2.48918 3.98288 2.48918 4.07861 2.53705 4.17435C2.60885 4.31795 2.68065 4.46156 2.75246 4.58123C2.82426 4.72484 3.01573 4.72484 3.11147 4.6291C3.54229 4.15042 4.14065 3.57599 4.83475 3.12124C5.09803 2.9537 5.36131 2.81009 5.62458 2.66648ZM15.7967 18.6546C15.7967 18.6546 16.5387 18.0802 17.2806 17.3383C17.3524 17.2665 17.3524 17.1707 17.3285 17.075C17.2567 16.9314 17.1849 16.8117 17.1131 16.6681C17.0413 16.5245 16.8498 16.5245 16.7541 16.6442C16.3472 17.0989 15.8924 17.5776 15.2223 18.0324C15.0069 18.1999 14.6 18.4632 14.241 18.6546C10.8423 20.4019 7.89836 19.612 6.51016 19.0615C6.43836 19.0376 6.34262 19.0376 6.29475 19.0855C6.17508 19.1812 6.03147 19.2769 5.9118 19.3487C5.76819 19.4445 5.79212 19.6838 5.95966 19.7556C7.87442 20.5933 9.86098 20.5933 9.98065 20.5933C10.1243 20.5933 12.8049 20.5933 15.0787 19.2051C15.2941 19.0137 15.5574 18.8461 15.7967 18.6546ZM9.93278 10.3973C10.0285 10.493 10.0764 10.5409 10.1721 10.6366C10.0764 10.7324 10.0285 10.7802 9.93278 10.852C9.8131 10.852 9.69343 10.7563 9.69343 10.6127C9.78917 10.5409 9.83704 10.493 9.93278 10.3973Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div className='logo-text'>
            <h1>LOGO</h1>
        </div>
        <div className='icons'>
        <svg width="84" height="20" viewBox="0 0 84 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58268 17.5003C13.9549 17.5003 17.4993 13.9559 17.4993 9.58366C17.4993 5.2114 13.9549 1.66699 9.58268 1.66699C5.21043 1.66699 1.66602 5.2114 1.66602 9.58366C1.66602 13.9559 5.21043 17.5003 9.58268 17.5003Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3327 18.3337L16.666 16.667" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M42.517 17.3423C42.2337 17.4423 41.767 17.4423 41.4837 17.3423C39.067 16.5173 33.667 13.0757 33.667 7.24232C33.667 4.66732 35.742 2.58398 38.3003 2.58398C39.817 2.58398 41.1587 3.31732 42.0003 4.45065C42.842 3.31732 44.192 2.58398 45.7003 2.58398C48.2587 2.58398 50.3337 4.66732 50.3337 7.24232C50.3337 13.0757 44.9337 16.5173 42.517 17.3423Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M70.9961 5.41699H76.9961C79.8295 5.41699 80.1128 6.74199 80.3045 8.35866L81.0545 14.6087C81.2961 16.6587 80.6628 18.3337 77.7461 18.3337H70.2544C67.3294 18.3337 66.6961 16.6587 66.9461 14.6087L67.6961 8.35866C67.8795 6.74199 68.1628 5.41699 70.9961 5.41699Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M70.6641 6.66699V3.75033C70.6641 2.50033 71.4974 1.66699 72.7474 1.66699H75.2474C76.4974 1.66699 77.3307 2.50033 77.3307 3.75033V6.66699" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M81.0057 14.1914H70.6641" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </nav>
      </div>
      {/* home shop container */}
      <header className='header'>
      <div className='home-shop-container'>
        <h2 className='home'>home</h2>
        <div className='vertical-line'></div>
        <h2 className='shop'>shop</h2>
      </div>
    </header>
    {/* desktop navbar */}
    <div className='desktop-navbar'>
      <nav className='navbar'>
        <img src='./Logo.png' alt="logo"/>
        <div className='logo-text'>
            <h1>LOGO</h1>
        </div>
        <img src='./Icons.png' alt="icons"/>
      </nav>
      <div className='nav-links-container'>
        <a href='./index.html' className='nav-link'>Shop</a>
        <a href='./index.html' className='nav-link'>Skills</a>
        <a href='./index.html' className='nav-link'>Stories</a>
        <a href='./index.html' className='nav-link'>about</a>
        <a href='./index.html' className='nav-link'>contact us</a>
      </div>
      <hr className='break'/>
    </div>
      {/* discover text */}
      <div className='text-container'>
          <div className='text-body'>
            <h1 className='heading'>discover our products</h1>
            <p className='description'>lorem ipsum dolor sit amet consectetur. Amet est poseere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
      </div>
      <div className='products-container'>
        <Products/>
      </div>
      {/* footer section for mobile*/}
      <div className='footer-section-mobile'>
        <p className='footer-headings'>be the first to know</p>
        <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
        <input type='email' placeholder='Enter your e-mail...' className='input'/>
        <button type='button' className='subscribe-btn'>subscribe</button>
        <hr className='break'/>
        <p className='footer-headings'>call us</p>
        <p className='footer-text'>+44 221133 5360 * customercare@mettamuse.com</p>
        <hr className='break'/>
        <p className='footer-headings'>Currency</p>
        <div className='currency-falg'>
          <img src='./Language.jpg' alt='flag' className='flag'/>
          <p className='footer-text'>* USD</p>
        </div>
        <hr className='break'/>
        <select className='drop-down'>
          <option className='options' selected>metta muse</option>
          <option className='options'>About Us</option>
          <option className='options'>Stories</option>
          <option className='options'>Artisans</option>
          <option className='options'>Boutique</option>
          <option className='options'>Contact Us</option>
          <option className='options'>EU Compliances Docs</option>
        </select>
        <hr className='break'/>
        <select className='drop-down'>
          <option className='options' selected>QUICK LINKS</option>
          <option className='options'>Order & Shipping</option>
          <option className='options'>Payment & Pricing</option>
          <option className='options'>Return & Refund</option>
          <option className='options'>FAQs</option>
          <option className='options'>Privacy Policy</option>
          <option className='options'>Terms & Conditions</option>
        </select>
        <hr className='break'/>
        <select className='drop-down'>
          <option className='options' selected>FOLLOW US</option>
          <option className='options'>
            <i className='fas fa-instagram'></i>
            <i className='fas fa-linkedin'></i>
          </option>
        </select>
        <hr className='break'/>
        <p className='footer-text'>metta muse  <span>  ACCEPTS</span></p>
        <img src="./Frame 136278.png" alt="paymet cards" className='payment-cards' />
        <p className='footer-text align-center' >Copyright @ 2023 mettamuse. All rights reserved.</p>
      </div>
      {/* footer section for desktop */}
      <div className='footer-section-desktop'>
        <div className='footer-top'>
          <div>
            <p className='footer-headings'>be the first to know</p>
            <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <input type='email' placeholder='Enter your e-mail...' className='input'/>
            <button type='button' className='subscribe-btn'>subscribe</button>
          </div>
          <div>
            <p className='footer-headings'>call us</p>
            <p className='footer-text'>+44 221133 5360 * customercare@mettamuse.com</p>
            <p className='footer-headings'>Currency</p>
            <div className='currency-falg'>
                <img src='./Language.jpg' alt='flag' className='flag'/>
                <p className='footer-text'>* USD</p>
            </div>
            <p className='footer-text'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        <hr className='break'/>
        <div className='footer-bottem'>
          <div>
            <h1 className='footer-bottom-headings'>metta muse</h1>
            <p className='footer-bottom-text'>about us</p>
            <p className='footer-bottom-text'>Stories</p>
            <p className='footer-bottom-text'>artisans</p>
            <p className='footer-bottom-text'>boutiques</p>
            <p className='footer-bottom-text'>contact us</p>
            <p className='footer-bottom-text'>eU compliances docs</p>
          </div>
          <div>
            <h1 className='footer-bottom-headings'>quick links</h1>
            <p className='footer-bottom-text'>order & shipping</p>
            <p className='footer-bottom-text'>join/login as a seller</p>
            <p className='footer-bottom-text'>payment & refunds</p>
            <p className='footer-bottom-text'>FAQs</p>
            <p className='footer-bottom-text'>privacy policy</p>
            <p className='footer-bottom-text'>terms & conditions</p>
          </div>
          <div>
            <h1 className='footer-bottom-headings'>follow us</h1>
            <img src="./Frame 28.png" alt="linkedin insta" className='social-media-icons'/>
            <p className='footer-headings'>metta muse<label> ACCEPTS</label></p>
            <img src="./Frame 136278.png" alt="paymet cards" className='payment-cards' />
          </div>
        </div>
      <p className='copy-rights'>Copyright @ 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
