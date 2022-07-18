import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';

const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Terms and Conditions')}
            description={t('Digilock has been the leader in electronic locking solutions for personal storage for over 40 years, and continues to develop innovative new products and technologies that improve the daily lives of our customers.')}
        />
        <div className="toc">
          <section className="hero">
            <div className="container">
              <h1>
                TERMS AND CONDITIONS OF SALE
              </h1>
              <p>
                ALL TRANSACTIONS ARE GOVERNED BY THESE TERMS AND CONDITIONS OF SALE FROM THE SECURITY PEOPLE, INC. DBA
                DIGILOCK (“Digilock”). ANY PROPOSAL THAT INCLUDES DIFFERENT OR ADDITIONAL TERMS THAT CONFLICT WITH OR
                VARY THESE TERMS ARE OBJECTED TO AND DISALLOWED. NOTWITHSTANDING THE FOREGOING, ANY SUCH
                COUNTERPROPOSALS BY BUYER SHALL NOT OPERATE AS A REJECTION OF THE CONTRACT OF SALE, BUT AS A REJECTION
                OF THE ADDITIONAL OR DIFFERENT TERM(S).
              </p>
              <ol>
                <li>
                  <span>Coverage.</span> These Terms and Conditions of Sale are directed to and cover sales of
                  Digilock’s electronic locking devices, lockers, and other physical goods (“Products”).
                </li>
                <li>
                  <span>Acceptance of Orders.</span> An order is deemed by Digilock to be an offer to purchase, which
                  Digilock may accept or reject in its sole discretion. Orders that do not conform to current Digilock
                  volume or pricing policies or contain terms which conflict with these Terms and Conditions shall be
                  considered rejected without further notice. In the event of a shortage of Products, Digilock reserves
                  the right to allocate available Products among customers in its own discretion. Any automatic or
                  computer-generated response to an order shall not be deemed acceptance of an order. Digilock’s
                  acceptance is subject to the Terms and Conditions of Sale stated herein.
                </li>
                <li>
                  <span>Credit.</span> Digilock may, but shall not be obligated to, grant credit terms to Buyer in which
                  case acceptance of any order is subject to final credit approval by Digilock. Digilock reserves the
                  right to cancel any sale if Digilock deems Buyer unable to pay for any products. Digilock reserves the
                  right, in its sole discretion and without prior notice, to deny, change or limit the amount or
                  duration of credit to be allowed Buyer, either generally or with respect to a particular purchase
                  order, and may require cash payments in advance or security satisfactory to Digilock.
                </li>
                <li>
                  <span>Shipment, Cost of Delivery, Taxes and Other Charges.</span> Unless otherwise specifically
                  agreed, all sales are FOB Digilock, Petaluma, California, and the title and risk of loss and damage of
                  such Product passes to Buyer upon delivery by Digilock to carrier. Buyer shall pay the costs of
                  delivery of the products. Unless expressly provided on any Quote, any estimated arrival or delivery
                  date is not a guaranteed delivery date. Buyer shall pay all sales, use, excise or similar taxes, or
                  other charges, which Digilock is required to pay, or to collect and remit, to any Government
                  (national, state or local) and which are imposed on or measured by the sale. All transactions pursuant
                  to this Agreement shall be considered taxable unless Buyer provides Digilock appropriate verification
                  of exemption.
                </li>
                <li>
                  <span>Payments.</span> Unless credit terms are agreed to as described in paragraph 2 above, payment
                  shall be made prior to shipment. Buyer agrees to pay a delinquency charge of 1.5% per month, but not
                  to exceed the maximum rate allowed by applicable law. Until the purchase price and all other sums due
                  to pursuant hereto are paid in full, Company retains a security interest in Product. Buyer shall
                  execute financing statement(s) on request and irrevocably authorizes Company to execute and file same.
                  Buyer shall have no right of set-off or withholding, and no deduction of any amounts due from Buyer to
                  Digilock shall be made without Digilock’s prior, express written approval.
                </li>
                <li>
                  <span>Inspection, Returns.</span> Buyer shall inspect the Products promptly upon receipt for
                  non-conformity (including but not limited to non-conformity for quantity, quality, and/or defects).
                  Failure by Buyer to provide Digilock with written notice of a claim within thirty (30) days from the
                  date of delivery or, in the case of non-delivery, from the date fixed for delivery, shall constitute a
                  waiver by Buyer of all claims with respect to such products. Returns require obtaining a Return
                  Merchandise Authorization number from Digilock and are subject to a minimum re-stocking charge of 25%
                  for unopened cases of product and must be received in original and unused condition. To the maximum
                  extent permitted under applicable law, Buyer is responsible for all shipping charges on returned items
                  and Buyer bears the risk of loss during shipment. IMPORTANT: SOME PRODUCTS, INCLUDING NON-STOCK ITEMS,
                  ARE DESIGNATED AS NON-RETURNABLE. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, DIGILOCK DOES
                  NOT OFFER REFUNDS ON ANY PRODUCTS DESIGNATED AS NON-RETURNABLE.
                </li>
                <li>
                  <span>Order Changes; Cancellations.</span> Changes or cancellations to an order must be in writing and
                  may result in additional charges for labor and/or materials. Changes may result in a delay in the
                  scheduled ship date. Additions to orders will be entered as separate stand-alone orders and must
                  qualify for all terms of sale, including discounts, on an individual basis. Orders for special or non-
                  standard items may not be canceled. Orders may not be changed within 30 days of the scheduled ship
                  date. Canceling an order before it has been shipped will incur a 10% cancellation fee before credit is
                  issued. Canceling an order after it has been shipped will follow Company’s return policy, and such
                  cancellation will be treated as a Return with all applicable fees. Orders which are refused at
                  delivery will result in assessment on Buyer of all of the related costs – including but not limited to
                  return freight, duties, restocking fees, and other miscellaneous costs.
                </li>
                <li>
                  <span>Limited Warranty; Disclaimer of Warranties.</span> Digilock warrants to the original purchaser
                  of Product (“Buyer”) manufactured by Digilock and purchased from Digilock or its authorized resellers,
                  to be free of defects in material and workmanship under normal use in accordance with Digilock’s
                  published documentation for two years from the original purchase date (“Limited Warranty”). If a
                  defect covered by this Limited Warranty arises and you return your Product in original packaging as
                  directed by Digilock during the Limited Warranty period, Digilock will elect in its sole discretion
                  and to the extent permitted by law to repair your Product, using new or refurbished parts, replace
                  your Product with a new or refurbished Product functionally at least equivalent to yours, or accept
                  the return of your Product in exchange for a refund of the purchase price you paid for your Product.
                  If Digilock repairs or replaces your Product, the repaired or replaced Product will continue to be
                  warranted for the remaining time of the original warranty period. Nothing in this Limited Warranty
                  will reduce or otherwise affect your statutory rights in relation to your Digilock Product. All
                  returned parts for which you have received a replacement will become the property of Digilock. Repair
                  or replacement may result in loss of data.
                  <br/><br/>
                  Unless failure has occurred due to a defect in materials or workmanship, this Limited Warranty also
                  does not apply to cosmetic damage or any consumable parts, such as batteries or protective coatings,
                  that due to their nature diminish over time. This Limited Warranty does not apply to damage caused by:
                  (1) normal wear and tear; (2) accidents; (3) misuse (including failure to follow product
                  documentation); (4) neglect; (5) disassembly; (6) alterations; (7) servicing other than by
                  Digilock-authorized technicians; and (8) external causes such as, but not limited to: liquid damage,
                  exposure to sharp objects, exposure to excessive force, anomalies in the electrical current supplied
                  to the Digilock product, and extreme thermal or environmental conditions.
                  <br/><br/>
                  THE LIMITED WARRANTY SET FORTH HEREIN IS THE ONLY WARRANTY MADE BY DIGILOCK IN CONNECTION WITH THE
                  PRODUCTS AND IS BUYER’S EXCLUSIVE REMEDY. DIGILOCK MAKES NO OTHER WARRANTIES OR REPRESENTATIONS TO
                  BUYER OR ANY OTHER PERSON OF ANY KIND, WHETHER EXPRESS OR IMPLIED, WITH RESPECT TO THE PRODUCTS, AND
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DIGILOCK EXPRESSLY DISCLAIMS ALL OTHER WARRANTIES,
                  WHETHER STAUTORY OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT THAT CANNOT BE DISCLAIMED ARE LIMITED IN
                  DURATION TO THE PERIOD OF THE EXPRESS LIMITED WARRANTY ABOVE. Some jurisdictions do not allow
                  limitations on how long an implied warranty lasts, so the above limitation may not apply to you.
                </li>
                <li>
                  <span>Limitation of Liability.</span> BUYER EXPRESSLY UNDERSTANDS AND AGREES THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DIGILOCK BE LIABLE TO BUYER FOR ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT, STATUTORY, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOST PROFITS, LOSS OF USE, LOSS OF TIME, INCONVENIENCE, LOSS BUSINESS OPPORTUNITIES, DAMAGE TO GOOD WILL OR REPUTATION, OR LOSS OF DATA, ARISING OUT OF, OR AS A RESULT OF, THE SALE, DELIVERY, SERVICING, USE OR LOSS OF THE PRODUCTS SOLD HEREUNDER, REGARDLESS OF WHETHER SUCH LIABILITY IS BASED ON BREACH OF CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR SUCH DAMAGES COULD HAVE BEEN REASONABLY FORESEEN. To the maximum extent permitted by applicable law, no claim by Buyer of any kind shall be greater in amount than the amount actually paid by Buyer in the preceding year for the Products in respect of which damages are claimed. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.
                </li>
                <li>
                  <span>Indemnity.</span> Buyer shall indemnify, hold harmless, and defend Digilock, its shareholders, directors, officers, and employees from and against all claims and suits by third parties for damages, injuries to persons (including death), property damages, losses, and expenses including court costs and reasonable attorney’s fees, arising out of, or resulting from (a) Buyer’s performance under this Agreement, and (b) allegations of negligent or intentional acts on the part of the Buyer, its officers, employees, agents, subcontractors, licensees, or invitees.
                </li>
                <li>
                  <span>Excuses for Non-Performance.</span> If the manufacture, transfer or receipt by either party of any products covered hereby is prevented, restricted or interfered with by reason of any event beyond the reasonable control of the party so affected, such party shall be excused from making or taking deliveries hereunder to the extent of such prevention, restriction or interference, and neither party shall be liable to the other for default or delay in performing, except with respect to Buyer’s payment obligations.
                </li>
                <li>
                  <span>Patents.</span> Digilock reserves the right to discontinue deliveries of any products, the manufacture, sale or use of which would, in Digilock’s opinion, infringe upon any U.S. patent, trademark or design now or hereinafter issued, registered, or existing and under which Digilock is not licensed.
                </li>
                <li>
                  <span>Seller’s Rights.</span> If Buyer should fail in any manner to fulfill the terms and conditions hereof, Digilock may defer further shipments until such default is cured. Remedies provided herein shall be in addition to, and not in lieu of, other remedies that may be available to Digilock. If for any reason, the quantities of the products covered hereby or of any materials used in the production of the products reasonably available to Digilock shall be less than Digilock total needs for its own use and for sale, Digilock may allocate its available supply of products among its existing or prospective purchasers and/or its own departments, divisions and affiliates in such manner Digilock deems proper in Digilock’s sole discretion, without thereby incurring liability on account of the method of allocation determined or its implementation or for failure to perform this Agreement.
                </li>
                <li>
                  <span>Compliance.</span> Buyer will comply with all applicable anti-bribery and anti- corruption laws, regulations, rules and requirements including the United States Foreign Corrupt Practices Act (“FCPA”), the laws, regulations, rules and requirements of Buyer’s country, and any other applicable laws, regulations, rules and requirements.
                </li>
                <li>
                  <span>Governing Law.</span> This Agreement shall be construed, and the respective rights and duties of Buyer and Digilock shall be determined, according to the laws of the State of California, without giving effect to its principles of conflicts of laws. The UN Convention on Contracts for the International Sale of Goods shall not apply to this Agreement.
                </li>
                <li>
                  <span>Dispute Resolution.</span> The parties shall attempt to resolve any disputes though good faith negotiations. If the Parties are unable to resolve their disputes within sixty (60) days after a notice of disputed is first received, any claims or legal actions by one party against the other arising under these Terms and Conditions of Sale Agreement and/or any sale and purchase of Products hereunder or any transaction contemplated hereby or concerning any rights under this Agreement shall be resolved by arbitration administered by the American Arbitration Association (“AAA”) under the Code of Procedure for Resolving Business-to-Business Disputes in effect when the claim is filed. Any arbitration shall take place in San Francisco County, California and shall be heard and decided by a single arbitrator. Any party may seek provisional injunctive relief in aid of arbitration from a court of appropriate jurisdiction.
                </li>
                <li>
                  <span>No Assignment.</span> These Terms and Conditions of Sale are not transferable by either party without the prior written consent of the other party, except that Digilock may assign this Agreement without Buyer’s consent if the assignment is to a to an affiliate or if the assignment is carried out as part of a merger, restructuring, or reorganization, or sale or transfer of all or substantially all of Digilock’s assets.
                </li>
                <li>
                  <span>Compliance with Laws; Export Laws.</span> Buyer and Digilock shall comply with all applicable international, national, state, regional and local laws and regulations with respect to their performance of this Agreement. Buyer agrees to adhere to all applicable US Export laws and regulations with respect to the products.
                </li>
                <li>
                  <span>Miscellaneous.</span> These Terms and Conditions of Sale are the sole and exclusive statement of the parties’ understanding and agreement with respect to the transactions contemplated by this sale, notwithstanding any other terms that might be contained in any purchase order or other document received from Buyer or submitted to Digilock. These Terms and Conditions of Sale constitute the entire agreement between the parties regarding the subject matter hereof and can only be modified or changed in writing and signed by authorized representatives of both parties. No waiver by Digilock of any of these Terms and Conditions of Sale or any breach hereof shall constitute or be deemed to be a waiver of any such term or any such breach in any other case. No waiver shall be deemed to occur as a result of the failure to enforce any term or condition of these Terms and Conditions of Sale. If any clause or portion hereof shall be held by a court of competent jurisdiction to be illegal, invalid, or unenforceable, the remaining clauses or portions shall remain in full force and effect. The paragraph headings are for convenience only and shall not be used in interpreting or construing these Terms and Conditions of Sale.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
