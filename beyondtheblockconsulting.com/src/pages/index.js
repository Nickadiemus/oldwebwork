/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import Particles from 'react-particles-js';
import Popup from "reactjs-popup";

/** component import(s)                                                 */
import IndexSubheader from '../components/Subheaders/IndexSubheader';
import Form from '../components/Form/Form';
/** style import(s)                                                     */



const IndexPage = () => (
    <div>
      <Particles
        className = "particles"
        params = {
          {
            particles: {
              number: {
                  value: 70
              },
              color: {
                  value: "#000000"
              },
              shape: {
                  type: "circle",
                  stroke: {
                      width: 1,
                      color: "#000000"
                  },
                  polygon: {
                      nb_sides: 1
                  },
                  image: {
                      src: "",
                      width: 100,
                      height: 100
                  },
              },
              line_linked: {
          				shadow: {
          					enable: true,
          					color: "#000000",
          				}
            	}
            }
          }
      }
    />
      <div className = "logo-wrapper">
        <div className = "logo">
          Beyond The Block Consulting
        </div>
      </div>
      <IndexSubheader
        header = "Blockchain Technology Made For You"
        subheader = "Bridging the gap between innovation and everyday life"
        content = "Emerging technology is intimidating. We’ll simplify your journey through blockchain-based tools like Bitcoin, Ethereum, and many more, so that you can accomplish your goals quick and effortlessly."
      />
      <div className = "subhead">
        <div className = "customContainer">
          <div className = "bar"></div>
          <h1 className = "name-block-h1">Contact Us</h1>
          {/* <Popup style = {{width: '1000px'}} trigger={<button>Trigger</button>} position="top left">
            {close => (
              <div>
                <a className="close" onClick={close}>
                  &times;
                </a>

              </div>
            )}
          </Popup> */}
          <Form />
        </div>
      </div>
      {/* <div>
        <a class="buy-with-crypto"
           href="https://commerce.coinbase.com/checkout/102d895a-c88f-42a0-be67-5af34bf8e462">
          <span>Buy with Crypto</span>
        </a>
        <script src="https://commerce.coinbase.com/v1/checkout.js">
        </script>
      </div> */}


    </div>
);

export default IndexPage;
