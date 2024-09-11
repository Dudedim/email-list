import { useState } from "react";
import Email from "./Email";

function EmailList() {
  const emails = [
    //array of email objects
    {
      title: "account-alert",
      heading: "Recent changes to your Amazon.com account",
      content: `Hello, we believe that an unauthorized party may have accessed your account. Please review your recent activities and secure your account immediately. If you did not make these changes, contact customer support right away.`,
      date: "Sep 8",
      important: true,
    },
    {
      title: "daily.dev",
      heading: "Dudedim your personal update from daily.dev is ready",
      content: `For you Sep 4, 2024 Logo It's been 2 days since your last streak. You might want to check out the latest updates and continue your learning journey. Here are the highlights from the past few days, including new articles and insights tailored to your interests.`,
      date: "Sep 4",
      important: false,
    },
    {
      title: "newsletter-subscription",
      heading: "Welcome to the Weekly Newsletter!",
      content: `Hi there, thank you for subscribing to our weekly newsletter. We'll keep you updated with the latest news and special offers. Stay tuned for more exciting updates!`,
      date: "Sep 10",
      important: true,
    },
    {
      title: "order-confirmation",
      heading: "Your order has been confirmed!",
      content: `Hello, your recent order with order number #12345 has been successfully processed. You can track your shipment and view your order details in your account.`,
      date: "Sep 9",
      important: true,
    },
    {
      title: "password-reset",
      heading: "Reset your password",
      content: `We received a request to reset your password. Click the link below to create a new password. If you didn't request this change, you can ignore this email.`,
      date: "Sep 7",
      important: false,
    },
    {
      title: "promo-sale",
      heading: "Don't miss our exclusive sale!",
      content: `Get up to 50% off on all items in our summer collection! Limited time offer, shop now and enjoy exclusive discounts on your favorite products.`,
      date: "Sep 6",
      important: false,
    },
    {
      title: "new-feature",
      heading: "Introducing a new feature on our platform",
      content: `We’re excited to announce a new feature that will enhance your user experience. Check out our latest update in the app and let us know what you think!`,
      date: "Sep 5",
      important: false,
    },
    {
      title: "account-update",
      heading: "Your account settings have been updated",
      content: `We've made some changes to your account settings based on your preferences. If you didn't make these changes, please contact support immediately.`,
      date: "Sep 3",
      important: true,
    },
    {
      title: "event-invite",
      heading: "You're invited to our annual event!",
      content: `We’d like to invite you to our annual event happening on September 20th. Join us for a day filled with fun activities, guest speakers, and networking opportunities.`,
      date: "Sep 2",
      important: false,
    },
    {
      title: "feedback-request",
      heading: "We value your feedback!",
      content: `Your opinion matters to us! Please take a few minutes to provide your feedback on your recent experience with our service. Your input helps us improve.`,
      date: "Sep 1",
      important: true,
    },
    {
      title: "shipping-update",
      heading: "Your package is on the way!",
      content: `Good news! Your order has been shipped and is on its way to your destination. You can track your shipment using the tracking number provided.`,
      date: "Aug 31",
      important: false,
    },
    {
      title: "welcome",
      heading: "Welcome to our platform!",
      content: `Thank you for signing up! We’re thrilled to have you with us. Start exploring all the features we offer and make the most of your experience.`,
      date: "Aug 30",
      important: false,
    },
    {
      title: "billing-notice",
      heading: "Your billing statement is ready",
      content: `Your latest billing statement is now available. Please review it and make sure everything is correct. Contact our support team if you have any questions.`,
      date: "Aug 29",
      important: true,
    },
    {
      title: "reminder",
      heading: "Friendly reminder: Complete your profile",
      content: `We noticed that your profile is incomplete. Complete your profile to get the most personalized experience on our platform.`,
      date: "Aug 28",
      important: true,
    },
    {
      title: "security-alert",
      heading: "Suspicious login detected",
      content: `We detected a suspicious login attempt on your account. Please review the details and secure your account immediately if it wasn’t you.`,
      date: "Aug 27",
      important: false,
    },
    {
      title: "subscription-expiry",
      heading: "Your subscription is about to expire!",
      content: `Heads up! Your subscription is expiring soon. Renew now to continue enjoying uninterrupted access to our premium features.`,
      date: "Sep 11",
      important: false,
    },
    {
      title: "appointment-reminder",
      heading: "Reminder: Upcoming appointment",
      content: `This is a reminder for your upcoming appointment on September 15th. Please confirm your availability or reschedule if necessary.`,
      date: "Sep 10",
      important: false,
    },
    {
      title: "special-offer",
      heading: "Limited-time offer just for you!",
      content: `We’ve got a special offer exclusively for you! Save 30% on your next purchase. Hurry, this deal won’t last long!`,
      date: "Sep 9",
      important: false,
    },
    {
      title: "support-ticket",
      heading: "Your support ticket has been updated",
      content: `Good news! Your support ticket has been updated. Please log in to your account to view the details and resolution.`,
      date: "Sep 8",
      important: false,
    },
    {
      title: "service-outage",
      heading: "Scheduled service outage notification",
      content: `We will be performing scheduled maintenance on our servers from 2:00 AM to 4:00 AM on September 13th. During this time, some services may be unavailable.`,
      date: "Sep 7",
      important: true,
    },
  ];

  const [clickedEmail, setClickedEmail] = useState(null);

  const handleEmailClick = (index) => {
    if (clickedEmail === index) {
      setClickedEmail(null);
    } else {
      setClickedEmail(index);
    }
  };

  return (
    <div className="main-container">
      {emails.map((email, index) => (
        <Email
          key={index}
          title={email.title}
          heading={email.heading}
          content={email.content}
          date={email.date}
          important={email.important}
          isOpen={clickedEmail === index}
          onEmailClick={() => handleEmailClick(index)}
        />
      ))}
    </div>
  );
}

export default EmailList;
