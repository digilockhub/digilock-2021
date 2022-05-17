import React from 'react';
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";
import AccordionParent from '../ui/AccordionParent';

const GeneralFAQ = (props) => {

  const Faqs = useStaticQuery(graphql`
    query MyFAqQuery {
  allSupportGeneralFaqXlsxLockFunctionality {
  edges {
    node {
      id
        title
        content
    }
  }
}


allSupportGeneralFaqXlsxSetupProgramming {
  edges {
    node {
      id
        title
        content
    }
  }
}

allSupportGeneralFaqXlsxTroubleShooting {
  edges {
    node {
      id
        title
        content
    }
  }
}

allSupportGeneralFaqXlsxOrdersSupport {
  edges {
    node {
      id
        title
        content
    }
  }
}

}
  `);

  const accordionFunctionality = Faqs.allSupportGeneralFaqXlsxLockFunctionality.edges;

  return (
      <>
        <h2>
          {props.title}
        </h2>
        <AccordionParent title={'Lock Functionality'} items={accordionFunctionality}/>
      </>
  )


};

GeneralFAQ.propTypes = {
  title: PropTypes.string
};

export default GeneralFAQ;
