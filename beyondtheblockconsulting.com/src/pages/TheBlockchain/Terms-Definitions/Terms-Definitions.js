/** main import(s)                                                      */
import React from 'react';

/** helper import(s)                                                    */
import Link from 'gatsby-link';
import definitionsImage from '../../../_img/DefinitionsImage.png';

/** component import(s)                                                 */
import BackgroundImage from '../../../components/Utilities/BackgroundImage';
import DefinitionSubheader from '../../../components/Subheaders/DefinitionSubheader';

/** style import(s)                                                     */
import './Terms-Definitions.scss';



const TermsDefinitionsPage = () => (
  <div>
    <BackgroundImage imgURL = {definitionsImage} height = "75vh"/>
    <DefinitionSubheader />
  </div>
);

export default TermsDefinitionsPage;
