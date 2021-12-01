import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";
import Footer from "../components/Footer";
// import { Parallax } from "react-parallax";
import {
    ParallaxProvider,
    Parallax,
    ParallaxBanner,
} from "react-scroll-parallax";

const html = `
<div class="wpb_wrapper">
			<h2>Terms Of Use</h2>
<h5>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE</h5>
<p>&nbsp;</p>
<h3>Terms of website use</h3>
<p>These terms of use (together with the documents referred to in it) tells you the terms of use on which you may make use of our website http://www.vince.co.uk (“our site”), whether as a guest or a registered user. Use of our site includes accessing, browsing, or registering to use our site.</p>
<p>Please read these terms of use carefully before you start to use our site, as these will apply to your use of our site. We recommend that you print a copy of this for future reference.</p>
<p>By using our site, you confirm that you accept these terms of use and that you agree to comply with them.</p>
<p>If you do not agree to these terms of use, you must not use our site.</p>
<p>&nbsp;</p>
<h3>Other applicable terms</h3>
<p>These terms of use refer to the following additional terms, which also apply to your use of our site:</p>
<p>&nbsp;</p>
<p>Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.<br>
Our Cookie Policy, which sets out information about the cookies on our site.<br>
Information about us</p>
<p>&nbsp;</p>
<p>http://www.vince.co.uk is a site operated by VINCE Media Ltd (“we” or “us”). We are registered in England and Wales under company number 07708529 and have our registered office at 2 Earls Road, Tunbridge Wells, Kent TN48EA. Our main trading address is 1st Floor, 40 Drury Lane, London WC2B 5RR. Our VAT number is 118376701. We are a limited company.</p>
<h3>Changes to these terms</h3>
<p>We may revise these terms of use at any time by amending this page.</p>
<p>Please check this page from time to time to take notice of any changes we made, as they are binding on you.</p>
<h3></h3>
<h3>Changes to our site</h3>
<p>&nbsp;</p>
<p>We may update our site from time to time, and may change the content at any time. However, please note that any of the content on our site may be out of date at any given time, and we are under no obligation to update it.</p>
<p>We do not guarantee that our site, or any content on it, will be free from errors or omissions.</p>
<p>&nbsp;</p>
<h3>Accessing our site</h3>
<p>&nbsp;</p>
<p>Our site is made available free of charge.</p>
<p>We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. Access to our site is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our site without notice. We will not be liable to you if for any reason our site is unavailable at any time or for any period.</p>
<p>You are responsible for making all arrangements necessary for you to have access to our site.</p>
<p>You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
<p>&nbsp;</p>
<h3>Intellectual property rights</h3>
<p>&nbsp;</p>
<p>We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
<p>You may print off one copy, and may download extracts, of any page(s) from our site for your personal use and you may draw the attention of others within your organisation to content posted on our site.</p>
<p>You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
<p>Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged.</p>
<p>You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors.</p>
<p>If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
<p>&nbsp;</p>
<h3>No reliance on information</h3>
<p>&nbsp;</p>
<p>The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.</p>
<p>Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up-to-date.</p>
<h3></h3>
<h3>Limitation of our liability</h3>
<p>&nbsp;</p>
<p>Nothing in these terms of use excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.</p>
<p>To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our site or any content on it, whether express or implied.</p>
<p>We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:</p>
<p>use of, or inability to use, our site; or<br>
use of or reliance on any content displayed on our site.<br>
If you are a business user, please note that in particular, we will not be liable for:</p>
<p>loss of profits, sales, business, or revenue;<br>
business interruption;<br>
loss of anticipated savings;<br>
loss of business opportunity, goodwill or reputation; or<br>
any indirect or consequential loss or damage.<br>
Our site is for private and non-commercial use only. You agree not to use our site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</p>
<p>We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any content on it, or on any website linked to it.</p>
<p>We assume no responsibility for the content of websites linked on our site. Such links should not be interpreted as endorsement by us of those linked websites. We will not be liable for any loss or damage that may arise from your use of them.</p>
<p>&nbsp;</p>
<h3>Viruses</h3>
<p>&nbsp;</p>
<p>We do not guarantee that our site will be secure or free from bugs or viruses.</p>
<p>You are responsible for configuring your information technology, computer programmes and platform in order to access our site. You should use your own virus protection software.</p>
<p>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p>
<p>&nbsp;</p>
<h3>Third party links and resources in our site</h3>
<p>&nbsp;</p>
<p>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only.</p>
<p>We have no control over the contents of those sites or resources.</p>
<p>&nbsp;</p>
<h3>Applicable law</h3>
<p>&nbsp;</p>
<p>These terms of use, its subject matter and its formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
<p>&nbsp;</p>
<h3>Contact us</h3>
<p>&nbsp;</p>
<p>To contact us, please email <span class="oe_textdirection">ku.oc.ecniv<span class="oe_displaynone">null</span>@ycavirp</span></p>
<p>Thank you for visiting our site.</p>

		</div>`;
const About = ({ data }) => {
    const router = useRouter();
    // const { darkTheme } = useTheme();

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

            <Footer />
        </motion.div>
    );
};

export const getStaticProps = async (ctx) => {
    const res = await fetch(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/132",
    );
    const data = await res.json();
    console.log(data);
    return {
        props: {
            data,
        },
    };
};

export default About;
