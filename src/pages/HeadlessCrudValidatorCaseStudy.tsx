import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, TrendingUp, Zap, Shield, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeadlessCrudValidatorCaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                <div className="container-custom relative z-10">
                    <motion.button
                        onClick={() => navigate("/")}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Portfolio
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                            Case Study
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                            Building a Headless CRUD Validator for Microservices
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            How we reduced test execution time by 97% and eliminated UI-based testing bottlenecks in our CI/CD pipeline
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-card/50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: "Execution Time", value: "45s → 1.2s", icon: Zap },
                            { label: "Performance Gain", value: "97%", icon: TrendingUp },
                            { label: "Reliability", value: "100%", icon: CheckCircle },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="text-center p-6 rounded-xl bg-background border border-border"
                            >
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        {/* The Problem */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">The Problem</h2>
                            <div className="bg-card/50 border-l-4 border-destructive p-6 rounded-r-lg mb-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    In our CI/CD pipeline, waiting for the UI to load just to test backend logic was causing significant bottlenecks.
                                    We needed a way to validate the "Booking Engine" core logic (Create, Read, Update, Delete) instantly,
                                    without spinning up a heavy browser session.
                                </p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Traditional UI-based testing was taking <strong className="text-foreground">45 seconds per test cycle</strong>,
                                with frequent flakiness due to UI rendering lag, network delays, and browser inconsistencies. This was unacceptable
                                for a modern CI/CD pipeline that demanded speed and reliability.
                            </p>
                        </div>

                        {/* The Solution */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">The Solution</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                I architected a lightweight Python CRUD Bot that acts as a headless client, directly interfacing with the
                                microservices API layer.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Stateful Execution",
                                        description: "Handles dynamic authentication (Token generation) and passes session headers automatically"
                                    },
                                    {
                                        icon: CheckCircle,
                                        title: "Schema Validation",
                                        description: "Instead of just checking for '200 OK', it extracts the dynamic Booking ID and performs deep verification of the JSON payload"
                                    },
                                    {
                                        icon: Trash2,
                                        title: "Self-Cleaning",
                                        description: "Implements a 'Teardown' phase that deletes test data after validation, ensuring staging never gets cluttered"
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="bg-card border border-border rounded-lg p-6"
                                    >
                                        <feature.icon className="w-10 h-10 text-primary mb-4" />
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Implementation */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Technical Implementation</h2>

                            <h3 className="text-xl font-semibold text-foreground mb-3">Architecture</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                The validator follows a three-phase approach:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                                <li><strong className="text-foreground">Setup Phase:</strong> Authenticates with the API and generates session tokens</li>
                                <li><strong className="text-foreground">Execution Phase:</strong> Performs CRUD operations and validates responses</li>
                                <li><strong className="text-foreground">Teardown Phase:</strong> Cleans up test data to maintain environment hygiene</li>
                            </ol>

                            <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                                <li>Dynamic token management with automatic refresh</li>
                                <li>Deep JSON schema validation using custom validators</li>
                                <li>Comprehensive error handling and logging</li>
                                <li>Parallel test execution support</li>
                                <li>Integration with CI/CD pipelines (Jenkins, GitHub Actions)</li>
                            </ul>

                            <div className="bg-card border border-border rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "requests", "JSON", "REST API", "CI/CD", "pytest"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* The Impact */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">The Impact</h2>
                            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-3">Speed</h3>
                                        <p className="text-muted-foreground">
                                            Reduced test execution time from <strong className="text-foreground">45s (UI-based)</strong> to
                                            <strong className="text-primary"> 1.2s (API-based)</strong> — a <strong className="text-primary">97% improvement</strong>.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-3">Reliability</h3>
                                        <p className="text-muted-foreground">
                                            Eliminated flakiness caused by UI rendering lag, achieving <strong className="text-primary">100% test stability</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                This solution transformed our testing strategy, enabling faster feedback loops and more confident deployments.
                                The team can now run comprehensive API validation in seconds rather than minutes, dramatically improving developer productivity.
                            </p>
                        </div>

                        {/* Lessons Learned */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Lessons Learned</h2>
                            <ul className="space-y-4">
                                {[
                                    "Not every test needs a UI — headless validation is often faster and more reliable",
                                    "Proper teardown is crucial for maintaining clean test environments",
                                    "Deep schema validation catches more bugs than simple status code checks",
                                    "Stateful session management is essential for realistic API testing"
                                ].map((lesson, index) => (
                                    <li key={index} className="flex gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{lesson}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-card border border-border rounded-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-foreground mb-4">Interested in this approach?</h3>
                            <p className="text-muted-foreground mb-6">
                                Let's discuss how headless validation can improve your testing strategy.
                            </p>
                            <motion.a
                                href="mailto:galagaliprashanth@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HeadlessCrudValidatorCaseStudy;
