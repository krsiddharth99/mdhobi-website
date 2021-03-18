import React,{useEffect} from 'react'
import AccountHeader from '../components/AccountHeader'
import Footer from '../components/Footer'

function CancellationAndRefund(props) {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

    return (
        <React.Fragment>
            <AccountHeader show={props.show} />
			<div className="container wrapper">
				<div className="text-center">
					<h2>Cancellation And Refund</h2>
				</div>

				<div className="terms-box">
					<h5 className="h5-xl">Use of Information </h5>
					<p>We use information to provide, analyze, administer, enhance and personalize our services and marketing efforts, to process your registration, your orders and your payments, and to communicate with you on these and other topics. For example, we use information to:</p>
					<ul className="terms-list" style={{ listStyleType: 'circle' }}>
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
			</div>

            <br />
			<br />
			<Footer />
        </React.Fragment>
    )
}

export default CancellationAndRefund
