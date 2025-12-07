import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cal-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: December 2, 2024
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="font-cal-sans text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to One. These Terms of Service ("Terms") govern your access to and use of the One mobile application ("App," "Service," "we," "us," or "our"). By downloading, installing, or using One, you agree to be bound by these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree to these Terms, do not use the App. Your continued use of One constitutes acceptance of any modifications to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You must be at least 13 years old (or 16 in the European Economic Area) to use One. By using the App, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You meet the minimum age requirement</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>All information you provide is accurate and current</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. License Grant</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.1 Limited License</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use One on your personal mobile device solely for your personal, non-commercial use.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.2 Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Copy, modify, or create derivative works of the App</li>
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Remove, alter, or obscure any proprietary notices</li>
                <li>Use the App for any commercial purpose without our consent</li>
                <li>Rent, lease, lend, sell, or redistribute the App</li>
                <li>Use the App in any unlawful manner or to violate any laws</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to access the App</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.1 Account Creation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Premium features require account creation. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain and update your information</li>
                <li>Keep your account credentials secure</li>
                <li>Notify us immediately of unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.2 Account Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Premium Subscriptions</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.1 Subscription Plans</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One offers premium features through the following subscription options:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly subscription</li>
                <li>Annual subscription</li>
                <li>Lifetime purchase (one-time payment)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.2 Billing and Payment</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Subscriptions are billed through Apple App Store or Google Play Store</li>
                <li>Payment is charged to your App Store or Google Play account</li>
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
                <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.3 Cancellation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may cancel your subscription at any time through your App Store or Google Play account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial periods.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.4 Refunds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Refund requests are subject to Apple App Store and Google Play Store refund policies. We do not directly process refunds. Contact Apple or Google for refund requests.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.5 Free Trial</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we offer a free trial, you will be charged the subscription fee after the trial period ends unless you cancel before the trial expires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Content</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.1 Your Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain all ownership rights to the content you create in One, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Habit names and descriptions</li>
                <li>Check-in records</li>
                <li>Journal entries</li>
                <li>Personal notes and data</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.2 License to Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using One, you grant us a limited license to store, process, and display your content solely for the purpose of providing and improving our services. We will not use your content for any other purpose without your consent.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.3 Content Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are solely responsible for your content. You agree not to create content that is illegal, harmful, threatening, abusive, or violates any laws or third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.1 Our Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One and all related materials, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Software code and architecture</li>
                <li>Design, graphics, and user interface</li>
                <li>Logos, trademarks, and branding</li>
                <li>Content, text, and documentation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.2 Feedback</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you provide feedback, suggestions, or ideas about One, you grant us a perpetual, worldwide, royalty-free license to use, modify, and incorporate such feedback without compensation or attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Prohibited Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Collect user information without consent</li>
                <li>Interfere with the App's operation</li>
                <li>Circumvent security measures</li>
                <li>Use the App for fraudulent purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.1 By You</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may stop using One at any time by deleting the App from your device and cancelling any active subscriptions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.2 By Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may suspend or terminate your access to One at any time, with or without notice, for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Harm to other users or our systems</li>
                <li>Extended period of inactivity</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.3 Effect of Termination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use One immediately ceases. You may export your data before termination. We are not obligated to retain your data after termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">10.1 "As Is" Basis</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ONE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or reliability</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">10.2 No Medical Advice</h3>
              <p className="text-muted-foreground leading-relaxed">
                One is a habit tracking tool and does not provide medical, health, or therapeutic advice. Consult qualified professionals for health-related decisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">10.3 Third-Party Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are not responsible for third-party services, including Apple App Store and Google Play Store, or any issues arising from their use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
                <li>Unauthorized access to your data</li>
                <li>Errors, mistakes, or inaccuracies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless One and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the App, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.1 Informal Resolution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before filing a claim, you agree to contact us at one.habit.tracker.app@gmail.com to attempt to resolve the dispute informally for at least 30 days.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.2 Arbitration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes not resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration shall take place in [Your Jurisdiction].
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">13.3 Class Action Waiver</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree to resolve disputes on an individual basis only. You waive any right to participate in class actions or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Posting the updated Terms in the App</li>
                <li>Sending an email notification (if applicable)</li>
                <li>Displaying an in-app notification</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of One after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and One regarding the use of the App and supersede all prior agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions, concerns, or notices regarding these Terms, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Email:</strong> one.habit.tracker.app@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> We aim to respond within 48 hours
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm leading-relaxed">
                By using One, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Terms;
