import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cal-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: December 2, 2024
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to One ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience using our habit tracking application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using One, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Habit Data:</strong> The habits you create, including habit names, descriptions, and daily targets</li>
                <li><strong>Check-in Records:</strong> Your daily check-ins and completion status</li>
                <li><strong>Journal Entries:</strong> Optional micro-journal entries you write after check-ins</li>
                <li><strong>Account Information:</strong> Email address (for premium users only)</li>
                <li><strong>Settings and Preferences:</strong> Your app settings, theme choices, and notification preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers</li>
                <li><strong>Usage Data:</strong> App features used, time spent in app, interaction patterns</li>
                <li><strong>Analytics Data:</strong> Collected via Google Analytics for Firebase, including screen views, user engagement, and feature usage</li>
                <li><strong>Crash Reports:</strong> Collected via Firebase Crashlytics, including stack traces, device state, and crash logs to help us identify and fix bugs</li>
                <li><strong>Performance Data:</strong> App performance metrics, load times, and network requests</li>
                <li><strong>Local Storage:</strong> Data stored locally on your device using Hive database</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Information from Third Parties</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may receive information from Apple App Store or Google Play Store regarding your purchase transactions for premium subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Provide Services:</strong> To operate and maintain the One app and its features</li>
                <li><strong>Personalization:</strong> To customize your experience and provide personalized insights</li>
                <li><strong>Analytics:</strong> To generate habit statistics, trends, and progress visualizations</li>
                <li><strong>Notifications:</strong> To send you daily reminders and milestone celebrations</li>
                <li><strong>Improvement:</strong> To understand usage patterns and improve app functionality</li>
                <li><strong>Support:</strong> To respond to your inquiries and provide customer support</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.1 Local Storage</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All your habit data is stored locally on your device using encrypted Hive database. This data never leaves your device.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.2 Security Measures</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers with physical security</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.1 We Do Not Sell Your Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.2 Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in operating our app:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Google Analytics for Firebase:</strong> For usage analytics and user behavior insights (anonymized data)</li>
                <li><strong>Firebase Crashlytics:</strong> For crash reporting and app stability monitoring</li>
                <li><strong>Payment Processors:</strong> Apple App Store and Google Play Store for subscription management</li>
                <li><strong>Customer Support Tools:</strong> For responding to support inquiries</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These service providers are contractually obligated to protect your information and use it only for the purposes we specify. For more information about how Google processes data, visit <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">5.3 Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose your information if required by law, court order, or governmental authority, or to protect our rights, property, or safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and all associated data</li>
                <li><strong>Export:</strong> Download your data in CSV or JSON format (premium feature)</li>
                <li><strong>Opt-Out Analytics:</strong> Disable Google Analytics tracking in app settings</li>
                <li><strong>Opt-Out Crashlytics:</strong> Disable Firebase Crashlytics in app settings (note: this may limit our ability to fix bugs affecting you)</li>
                <li><strong>Notification Control:</strong> Manage notification preferences</li>
                <li><strong>Portability:</strong> Transfer your data to another service</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at one.habit.tracker.app@gmail.com or use the in-app settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                <li><strong>Deleted Accounts:</strong> Data permanently deleted within 30 days of account deletion</li>
                <li><strong>Analytics Data:</strong> Anonymized analytics retained for up to 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                One is not intended for children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at one.habit.tracker.app@gmail.com, and we will delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information (we do not sell data)</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. European Privacy Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the app and updating the "Effective Date" at the top. Your continued use of One after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Privacy;
