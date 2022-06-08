import React from 'react';
import PropTypes from "prop-types";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {useStaticQuery, graphql} from "gatsby";
import AccordionParent from '../ui/AccordionParent';

const GeneralFAQ = (props) => {
  const {t} = useTranslation();
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
  const accordionProgramming = Faqs.allSupportGeneralFaqXlsxSetupProgramming.edges;
  const accordionTroubleshooting = Faqs.allSupportGeneralFaqXlsxTroubleShooting.edges;
  const accordionOrders = Faqs.allSupportGeneralFaqXlsxOrdersSupport.edges;

  console.log(accordionFunctionality);
  return (
      <>
        <h2>
          {props.title}
        </h2>
        <AccordionParent title={t('lock_functionality')} items={accordionFunctionality} />
        <AccordionParent title={t('initial_setup')} items={accordionProgramming}/>
        <AccordionParent title={t('troubleshooting')} items={accordionTroubleshooting}/>
        <AccordionParent title={t('orders_support')} items={accordionOrders}/>
      </>
  )


};

GeneralFAQ.propTypes = {
  title: PropTypes.string
};

export default GeneralFAQ;
