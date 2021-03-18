import React,{useEffect} from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'
import Tabs from '../components/Tabs'

function PrivacyPolicy(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
            <div className="container wrapper">
                <div className="text-center">
                    <h2>Privacy Policy</h2>
                    <p>Last Updated: October 17, 2019</p>
                </div>
            </div>

            <div className="container">
                <p>THIS PRIVACY POLICY IS MEANT TO HELP YOU UNDERSTAND WHAT INFORMATION WE COLLECT, WHY WE COLLECT IT, AND HOW WE CAN USE OF YOUR INFORMATION.</p>

                <div className="terms-box">
							<h5 className="h5-xl">Collection of Information</h5>
							<p>We receive and store information about you such as:</p>
							<ul className="terms-list">
								<li><span className="font-weight-bold">Information you provide to us :</span> We collect information you provide to us which includes:</li>
								<ul style={{listStyleType:'circle'}} className="terms-list">
									<li>Aenean quis purus auctor, _______ est non, dictum arcu. ___ in maximus ex. Integer ________ sem egetjusto maximus</li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
									<li>Morbi dui lectus, lobortis ___ amet felis nec, suscipit _________ sapien. Proin semper ultrices __, a sodales purus vehicula</li>
									<li>Nulla tincidunt volutpat tincidunt. ____________ habitant morbi tristique senectus __ netus et malesuada fames </li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
								</ul>
								
								<li className="mt-3"><span className="font-weight-bold">Information we collect automatically :</span> We collect information about you and your use of our service, your interactions with us and our advertising, as well as information regarding your computer or other device used to access our service (such as gaming systems, smart TVs, mobile devices, set top boxes, and other streaming media devices). This information includes:</li>
								<ul style={{listStyleType:'circle'}} className="terms-list">
									<li>Aenean quis purus auctor, _______ est non, dictum arcu. ___ in maximus ex. Integer ________ sem egetjusto maximus</li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
									<li>Morbi dui lectus, lobortis ___ amet felis nec, suscipit _________ sapien. Proin semper ultrices __, a sodales purus vehicula</li>
									<li>Nulla tincidunt volutpat tincidunt. ____________ habitant morbi tristique senectus __ netus et malesuada fames </li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
								</ul>
								
								<li className="mt-3"><span className="font-weight-bold">Information from partners :</span> We collect information from other companies with whom you have a relationship (“Partners”). These Partners might include (depending on what services you use): your TV or Internet service provider, or other streaming media device providers who make our service available on their device; mobile phone carriers or other companies who provide services to you and collect payment for the Netflix service for distribution to us; and voice assistant platform providers who enable interaction with our service via voice commands. The information Partners provide us varies depending on the nature of the Partner services, and may include:</li>
								<ul style={{listStyleType:'circle'}} className="terms-list">
									<li>Aenean quis purus auctor, _______ est non, dictum arcu. ___ in maximus ex. Integer ________ sem egetjusto maximus</li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
									<li>Morbi dui lectus, lobortis ___ amet felis nec, suscipit _________ sapien. Proin semper ultrices __, a sodales purus vehicula</li>
									<li>Nulla tincidunt volutpat tincidunt. ____________ habitant morbi tristique senectus __ netus et malesuada fames </li>
									<li>Donec dolor magna, suscipit __ magna dignissim, porttitor hendrerit ____. Nunc gravida ultrices felis eget ________. Praesent aliquet</li>
								</ul>
							</ul>
						</div>
						
					
						
						<div className="terms-box">
							<h5 className="h5-xl">Use of Information </h5>
							<p>We use information to provide, analyze, administer, enhance and personalize our services and marketing efforts, to process your registration, your orders and your payments, and to communicate with you on these and other topics. For example, we use information to:</p>
							<ul className="terms-list" style={{listStyleType:'circle'}}>
							<li>determine your general geographic location, provide localized content, provide you with customized and personalized viewing recommendations for movies and TV shows we think will be of interest to you, determine your Internet service provider, and help us quickly and efficiently respond to inquiries and requests;</li>
							<li>to coordinate with Partners on making the Netflix service available to members and providing information to non members about the availability of the Netflix service, based on the specific relationship you have with the Partner;</li>
							<li>prevent, detect and investigate potentially prohibited or illegal activities, including fraud, and to enforce our terms (such as determining free trial eligibility);</li>
							<li>analyze and understand our audience, improve our service (including our user interface experiences) and optimize content selection, recommendation algorithms and delivery;</li>
							<li>communicate with you concerning our service so that we can send you news about Netflix, details about new features and content available on Netflix, special offers, promotional announcements, consumer surveys, and to assist you with operational requests such as password reset requests. These communications may be by various methods, such as email, push notifications, text message, online messaging channels, and matched identifier communications (described below). Please see the "Your Choices" section of this Privacy Statement to learn how to set or change your communications preferences.</li>
							</ul>
						</div>
						

						<div className="terms-box">
							<h5 className="h5-xl">Access to Account and Profiles </h5>
							<p>For ease of access to your account, you can use the "Remember me on this device" function when you log in to the website. This function uses technology that enables us to provide direct account access and to help administer the Netflix service without requiring reentry of any password or other user identification when your browser revisits the service.</p>
							<p>To remove access to your Netflix account from your devices: (a) visit the "Account" section of our website, choose "Sign out of all devices," and follow the instructions to deactivate your devices (note, deactivation may not occur immediately) or (b) delete your Netflix settings from your device (steps vary by device and the option is not available on all devices). Where possible, users of public or shared devices should log out at the completion of each visit. If you sell or return a computer or Netflix ready device, you should log out and deactivate the device before doing so. If you do not maintain the security of your password or device, or fail to log out or deactivate your device, subsequent users may be able to access your account, including your personal information.</p>
							<p>If you share or otherwise allow others to have access to your account, they will be able to see your information (including in some cases personal information) such as your watch history, ratings, and account information (including your email address or other information in the "Account" area of our website). This remains true even if you use our profiles feature.</p>
							<p>Profiles allow users to have a distinct, personalized Netflix experience, built around the movies and shows of interest to them, as well as separate watch histories. Please note that profiles are available to everyone who uses your Netflix account, so that anyone with access to your Netflix account can navigate to and use, edit or delete profiles. You should explain this to others with access to your account, and if you do not wish them to use or change your profile, be sure to let them know. Profile users may be offered the opportunity to add an email address, phone number or other information to the profile and will be provided with notice of collection and use at the time such information is requested (the Profile Privacy Notice applies</p>
						</div>
						

						<div className="terms-box">
							<h5 className="h5-xl">Your Choices</h5>
							<p><span className="font-weight-bold">Email and Text Messages.</span>  If you no longer want to receive certain communications from us via email or text message, simply access the "Communications Settings" option in the "Account" section of our website and uncheck those items to unsubscribe. Alternatively, click the "unsubscribe" link in the email or reply STOP (or as otherwise instructed) to the text message. Please note that you cannot unsubscribe from service-related correspondence from us, such as messages relating to your account transactions.</p>
							
							<p><span className="font-weight-bold">Push Notifications. </span>  You can choose to receive mobile push notifications from Netflix. On some device operating systems, you will be automatically enrolled in the notifications. If you subsequently decide you no longer wish to receive these notifications, you can use your mobile device's settings functionality to turn them off.</p>
							
							<p><span className="font-weight-bold">Interest-Based Ads.</span>  Interest-based ads are online ads that are tailored to your likely interests based on your use of various apps and websites across the Internet. If you are using a browser, then cookies and web beacons can be used to collect information to help determine your likely interests. If you are using a mobile device, tablet, or streaming media device that includes a resettable device identifier, then that identifier can be used to help determine your likely interests. For your choices about interest-based ads from Netflix, please see the "Cookies and Internet Advertising" section (below).</p>
							
							<p><span className="font-weight-bold">Email and Text Messages.</span>  If you no longer want to receive certain communications from us via email or text message, simply access the "Communications Settings" option in the "Account" section of our website and uncheck those items to unsubscribe. Alternatively, click the "unsubscribe" link in the email or reply STOP (or as otherwise instructed) to the text message. Please note that you cannot unsubscribe from service-related correspondence from us, such as messages relating to your account transactions.</p>
						</div>
						
						<div className="terms-box">
							<h5 className="h5-xl">Your Information and Rights</h5>
							<p>You can request access to your personal information, or correct or update out-of-date or inaccurate personal information we hold about you.</p>
							<p>You can most easily do this by visiting the "Account" portion of our website, where you have the ability to access and update a broad range of information about your account, including your contact information, your Netflix payment information, and various related information about your account (such as the content you have viewed and rated). You must be signed in to access the "Account" section. You may also request that we delete personal information that we hold about you.</p>
							<p>To make requests, or if you have any other question regarding our privacy practices, please contact our Data Protection Officer/Privacy Office at privacy@netflix.com. We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. Please also see the "Your Choices" section of this Privacy Statement for additional choices regarding your information.</p>
							<p>We may reject requests that are unreasonable or not required by law, including those that would be extremely impractical, could require disproportionate technical effort, or could expose us to operational risks such as free trial fraud. We may retain information as required or permitted by applicable laws and regulations, including to honor your choices, for our billing or records purposes and to fulfill the purposes described in this Privacy Statement. We take reasonable measures to destroy or de-identify personal information in a secure manner when it is no longer required.</p>
						</div>
						
						<div className="terms-box">
							<h5 className="h5-xl">Security </h5>
							<p>We use reasonable administrative, logical, physical and managerial measures to safeguard your personal information against loss, theft and unauthorized access, use and modification. These measures are designed to provide a level of security appropriate to the risks of processing your personal information.</p>
						</div>
							
            </div>

            <br/>
            <br/>
            <Footer/>
        </React.Fragment>
    )
}

export default PrivacyPolicy
