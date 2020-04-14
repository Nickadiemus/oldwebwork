/** main import(s)                                                      */
import React, {Component} from 'react';
import Sidebar from 'react-sidebar';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import logo from '../../_img/placeholderlogo.png';
import menuIcon from '../../_img/hamburger_menu.svg';
/** component import(s)                                                 */

/** style import(s)                                                     */
import './Navigation.scss';

class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.open,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  };

  onChangePage(open) {
    this.setState({ sidebarOpen: !open });
    console.log(this.state);
  };

  render() {
    var sidebarContent = <nav id="primary_nav_wrap">
    <p style = { {
      left: '0',
      right: '0',
      margin: 'auto',
      width: '200px',
    } }
      className = "text-center">
      Menu
    </p>
    <ul onClick = {this.onChangePage}>

      <li><Link to = "/">Home</Link></li>
      <li><Link to = "/About/About">About</Link></li>
      <li><Link to = "/Enterprise/Enterprise">Enterprise</Link></li>
      <li>
        <Link to = "/TheBlockchain/Blockchain">The Blockchain</Link>
      <ul>
        <li><Link to = "/TheBlockchain/Blockchain/BlockchainPersonal" >Blockchain Personal</Link></li>
        <li><Link to = "/TheBlockchain/Blockchain/BlockchainBusiness" >Blockchain Business</Link></li>
        <li><Link to = "/Questions" >FAQ</Link></li>
        <li><Link to = "/TheBlockchainTerms-Definitions/Terms-Definitions" >Terms</Link></li>
        {/* <li><Link to = "/Education/Education-Series/Education-Series" >Contact</Link></li> */}
      </ul>
    </li>
    </ul>
    </nav>

    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen,
    };

    return (

      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        className = "side-bar"

      >
        <a className = "navigation-menu" onClick = {this.onSetSidebarOpen}><img src = {menuIcon} /></a>
      </Sidebar>
    );
  }
};

export default Navigation;
