import { termsAndConditions, privacyPolicy } from "../../config/constant";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-8 px-4 sm:px-8 font-mono">
            {/* Terms Section */}
            <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{termsAndConditions.title}</h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 text-center max-w-3xl">
                {termsAndConditions.intro}
            </p>
            <section className="bg-card text-card-foreground w-full md:max-w-2xl rounded-lg shadow-lg overflow-hidden mb-8">
                {termsAndConditions.sections.map((section, index) => (
                    <div key={index}>
                        <div className="px-6 py-4">
                            <h2 className="font-semibold text-xl mb-2">{section.title}</h2>
                            <p className="text-secondary-foreground text-sm sm:text-base">
                                {section.content}
                            </p>
                        </div>
                        {index < termsAndConditions.sections.length - 1 && <hr className="border-t border-muted" />}
                    </div>
                ))}
            </section>

            {/* Privacy Policy Section */}
            <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{privacyPolicy.title}</h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 text-center max-w-3xl">
                {privacyPolicy.intro}
            </p>
            <section className="bg-card text-card-foreground w-full md:max-w-2xl rounded-lg shadow-lg overflow-hidden">
                {privacyPolicy.sections.map((section, index) => (
                    <div key={index}>
                        <div className="px-6 py-4">
                            <h2 className="font-semibold text-xl mb-2">{section.title}</h2>
                            <p className="text-secondary-foreground text-sm sm:text-base">
                                {section.content}
                            </p>
                        </div>
                        {index < privacyPolicy.sections.length - 1 && <hr className="border-t border-muted" />}
                    </div>
                ))}
            </section>

            <footer className="mt-8 text-xs text-muted-foreground text-center">
                &copy; 2023 Your Company Name. All rights reserved.
            </footer>
        </div>
    );
}
