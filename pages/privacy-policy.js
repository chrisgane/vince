import React from "react";
import { motion } from "framer-motion";

const html = `
<div class="wpb_wrapper">
			<h3>Privacy policy</h3>
<p>This privacy policy (together with our Terms of Use at www.vince.co.uk/terms-of-use) sets out how VINCE Media Ltd (“we” or “us”) collects, uses and protects any information that you give us when you use this website.</p>
<p>For the purpose of the Data Protection Act 1998 the data controller is VINCE Media Ltd of 1st Floor, 40 Drury Lane, London WC2B 5RR.</p>
<p>We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy policy. We may change this policy from time to time by updating this page. You should check this frequently to ensure that you are happy with any changes. This policy is effective from 1/1/2018.</p>
<p>What we collect<br>
We may collect and process the following information about you:</p>
<p>-name and job title<br>
-contact information including email address<br>
-demographic information such as your role<br>
-other information provided by you when filling out forms on our website</p>
<h3>What we do with the information we gather</h3>
<p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
<h3>We may use the information to improve our products and services.</h3>
<p>We may periodically send emails about blog updates, events or other information that we think you may find interesting using the email address which you have provided.<br>
From time to time, we may also use your information to contact you for new business purposes unless you specifically request that we do not. We may contact you by email, phone, fax or mail.<br>
You can exercise your right for us not to do these things by contacting us at <span class="oe_textdirection">ku.oc.ecniv<span class="oe_displaynone">null</span>@ycavirp</span></p>
<p>We may also collect technical information, including without limitation, the Internet Protocol address used to connect your device to the interest and page interaction information.</p>
<h3>Disclosure of your information</h3>
<p>We may share your information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006.</p>
<p>We may disclose your personal information to third parties:</p>
<p>In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business assets.<br>
If we or substantially all of our assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.<br>
If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use at www.vince.co.uk/terms-of-use/ or terms and conditions of supply and other agreements; or to protect the rights, property, or safety of us, our clients, or others.</p>
<h3>Security</h3>
<p>We are committed to ensuring that your information is secure and we will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect from you online.</p>
<h3>Links to other websites</h3>
<p>Our website may contain links to other websites of interest. However, once you have followed these links to leave our site, you should note that we do not have any control over these other websites which will have their own privacy policies. Therefore, we cannot accept any responsibility or liability for the protection and privacy of any information that you provide whilst visiting such websites and such websites are not governed by this privacy policy. You should exercise caution and check the privacy policies applicable to the websites in question.</p>
<h3>Controlling your personal information</h3>
<p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
<p>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used for direct marketing purposes<br>
if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <span class="oe_textdirection">ku.oc.neves<span class="oe_displaynone">null</span>@strela</span><br>
We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.</p>
<p>You may request details of personal information that we hold about you under the Data Protection Act 1998. If you would like a copy of the information held on you please write to: VINCE, 2 Earls Road, Tunbridge Wells, Kent TN48EA. If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>
<h3>Contact</h3>
<p>Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to <span class="oe_textdirection">ku.oc.ecniv<span class="oe_displaynone">null</span>@ycavirp</span>.</p>
<h3>Cookie Policy</h3>
<p><strong>Cookies</strong><br>
Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
<p>&nbsp;</p>
<p>This policy explains how&nbsp;VINCE Media&nbsp;Ltd (“we” or “us”) uses cookies and how we may collect and process information about you through our website, [www.vince.co.uk] (the “Website”).</p>
<p>&nbsp;</p>
<p><strong>What are cookies?</strong></p>
<p>Cookies are small text files that are placed on your computer (or internet enabled device) by websites that you visit.</p>
<p>&nbsp;</p>
<p><strong>Why do we use cookies?</strong></p>
<p>We use cookies to collect information about the use of the Website and to distinguish you from other users in order to improve your experience when you browse the Website. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
<p>When you visit the Website we use analytics tools to measure the number of visitors, to see how visitors navigate the site and to see which resources they access. The data collected using analytics tools is all anonymous. This helps us to develop new content and to improve the way the Website works.</p>
<p>&nbsp;</p>
<p><strong>What cookies do we use?</strong><br>
Our Website uses two kinds of cookie. These are:</p>
<p>1. Strictly necessary cookies. These are cookies that are required for the operation of our website.</p>
<p>2. Analytical/performance cookies. They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it.</p>
<p>The table below explains the cookies used by us as at 01/01/18 We will update this information as and when we introduce new functionality to the site.</p>
<p>Cookie Name<br>
Cookie type/purpose<br>
Information collected<br>
Duration of cookie<br>
utma<br>
Google analytics<br>
Amount of visits, time, pervious visit, current visit<br>
Infinite length unless cleared by user<br>
utmb<br>
Google analytics<br>
Dwell time (how long you stay on the website – stamp of time when user enters site<br>
Infinite length unless cleared by user<br>
utmc<br>
Google analytics<br>
Dwell time (how long you stay on the website – stamp of time when user leaves site<br>
Infinite length unless cleared by user<br>
utmz<br>
Google analytics<br>
Where a visitor comes from (search engine, keyword search etc)<br>
Infinite length unless cleared by user<br>
BY USING OUR WEBSITE, YOU CONSENT TO THE RELEVANT COOKIES BEING SET ON YOUR DEVICE. You can refuse to accept cookies by activating the setting on your browser which allows you to refuse the setting of cookies. You should note however that by deleting or blocking cookies, the website may not function correctly and you may not be able to access certain areas.</p>
<p>To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visitwww.allaboutcookies.org.</p>
<p>The Website may also link through to third party websites which may use cookies which we have no control over. We therefore recommend that you check the relevant third party privacy policies for information about any cookies that they may use.</p>
		</div>`;

const About = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
        >
            <div className="w-full max-w-4xl mx-auto my-16">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </motion.div>
    );
};

export default About;
