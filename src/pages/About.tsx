import Layout from "@/components/layout/Layout";
import PremiumHero from "@/components/common/PremiumHero";
import InteractiveCard from "@/components/common/InteractiveCard";
import ScrollProgress from "@/components/common/ScrollProgress";
import FloatingCTA from "@/components/common/FloatingCTA";
import TeamCarousel from "@/components/lightswind/team-carousel";
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "@/components/lightswind/3d-scroll-trigger";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const About = () => {
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const valuesInView = useInView(valuesRef, { amount: 0.2, once: true });

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { amount: 0.3, once: true });

  const values = [
    {
      title: "No Shortcuts",
      description: "We believe in doing things right the first time, with meticulous attention to detail and complete regulatory compliance."
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We provide personalized service and dedicated support throughout every process."
    },
    {
      title: "Results-Driven",
      description: "With a proven track record of successful applications and satisfied clients, we deliver measurable outcomes."
    },
    {
      title: "Professional Excellence",
      description: "Our team of experts brings years of experience and deep knowledge of regulatory frameworks."
    }
  ];

  const stats = [
    { value: "1000+", label: "Successful Applications", description: "Across all service categories" },
    { value: "15+", label: "Years of Experience", description: "In government and regulatory services" },
    { value: "100%", label: "Compliance Rate", description: "Zero rejected applications due to errors" }
  ];

  const teamMembers = [
    {
      id: "1",
      name: "Asgar Shamim Ahmed Shaikh",
      role: "Founder & CEO",
      image: "/WhatsApp Image 2025-09-30 at 10.14.43 PM.jpeg",
      bio: "With over 15 years of experience in government services and regulatory compliance, Asgar leads our team with a vision of simplifying complex bureaucratic processes."
    },
    {
      id: "2",
      name: "Faizan Ansari",
      role: "Manager",
      image: "/WhatsApp Image 2025-10-01 at 1.08.26 AM.jpeg",
      bio: "Faizan brings extensive experience in operations management and client relations, ensuring smooth execution of all our services with attention to detail and customer satisfaction."
    },
    {
      id: "3", 
      name: "Priya Sharma",
      role: "Legal Advisor",
      image: "/api/placeholder/400/500",
      bio: "Specialized in real estate law and regulatory compliance, Priya ensures all our applications meet the highest legal standards."
    },
    {
      id: "4",
      name: "Rajesh Kumar",
      role: "Government Relations Manager",
      image: "/api/placeholder/400/500", 
      bio: "With deep connections in various government departments, Rajesh facilitates smooth processing of applications and clearances."
    },
    {
      id: "5",
      name: "Anita Patel",
      role: "Documentation Specialist",
      image: "/api/placeholder/400/500",
      bio: "Anita's meticulous attention to detail ensures every document is prepared to perfection, reducing processing times significantly."
    },
    {
      id: "6",
      name: "Vikram Singh",
      role: "Business Development",
      image: "/api/placeholder/400/500",
      bio: "Vikram helps businesses understand regulatory requirements and develops customized solutions for their specific needs."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      company: "Patel Construction Ltd.",
      role: "Managing Director",
      content: "Ideas of India Realty made our MHADA approval process seamless. Their attention to detail and professional approach saved us months of delays. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Enterprises",
      role: "CEO",
      content: "The team's expertise in Mantralaya clearances is unmatched. They guided us through every step and ensured 100% compliance. Exceptional service!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Kumar Real Estate",
      role: "Director",
      content: "Professional, reliable, and results-driven. Ideas of India Realty delivered exactly what they promised within the committed timeframe.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "Sunita Joshi",
      company: "Joshi Developers",
      role: "Partner",
      content: "Their business licensing services are top-notch. The team's knowledge of regulatory requirements is impressive and their support is outstanding.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Singh Infrastructure",
      role: "Founder",
      content: "We've worked with many consultants, but Ideas of India Realty stands out for their integrity and commitment to client success.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 6,
      name: "Meera Reddy",
      company: "Reddy Properties",
      role: "Managing Partner",
      content: "Excellent service for municipal approvals. Their systematic approach and regular updates kept us informed throughout the process.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <Layout>
      <ScrollProgress />
      <FloatingCTA />
      
      {/* Premium Hero Section */}
      <PremiumHero
        title="About Ideas of India Realty"
        subtitle="Your trusted partner for comprehensive government services and regulatory compliance"
        backgroundImage="/api/placeholder/1920/1080"
        overlay="from-indigo-900/80 via-purple-800/60 to-transparent"
      />

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <LazyMotion features={domAnimation} strict>
              <m.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Philosophy</h2>
                <InteractiveCard
                  title=""
                  className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
                >
                  <blockquote className="text-xl lg:text-2xl font-medium text-primary italic mb-4">
                    "We don't believe in shortcuts..."
                  </blockquote>
                  <p className="text-lg text-muted-foreground">
                    At Ideas of India Realty, we understand that government processes and regulatory 
                    compliance require precision, patience, and expertise. We don't cut corners or 
                    promise unrealistic timelines. Instead, we focus on delivering quality results 
                    that stand the test of time and regulatory scrutiny.
                  </p>
                </InteractiveCard>
              </m.div>
            </LazyMotion>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <LazyMotion features={domAnimation} strict>
                <m.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <InteractiveCard
                    title="Our Mission"
                    className="h-full"
                  >
                    <p className="text-muted-foreground mb-4">
                      To simplify complex government processes and regulatory requirements for our clients, 
                      ensuring 100% compliance while saving time and reducing stress. We bridge the gap 
                      between businesses and government agencies with professional expertise and unwavering integrity.
                    </p>
                    <p className="text-muted-foreground">
                      Every document we file, every application we submit, and every consultation we provide 
                      is backed by thorough research, careful preparation, and complete transparency.
                    </p>
                  </InteractiveCard>
                </m.div>
                
                <m.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <InteractiveCard
                    title="Our Commitment"
                    className="h-full"
                  >
                    <p className="text-muted-foreground mb-4">
                      We are committed to providing honest, transparent, and professional services. 
                      Our clients trust us with their most important business processes, and we honor 
                      that trust with dedicated service and measurable results.
                    </p>
                    <p className="text-muted-foreground">
                      From the initial consultation to the final approval, we maintain open communication, 
                      provide regular updates, and ensure you understand every step of the process.
                    </p>
                  </InteractiveCard>
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every interaction, every decision, and every service we provide
              </p>
            </m.div>

            <m.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              animate={valuesInView ? "show" : "hidden"}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {values.map((value, index) => (
                  <m.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50, scale: 0.9 },
                      show: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <InteractiveCard
                      title={value.title}
                      description={value.description}
                      className="text-center h-full"
                    />
                  </m.div>
              ))}
            </m.div>
          </LazyMotion>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <LazyMotion features={domAnimation} strict>
              <m.h2
                className="text-3xl lg:text-4xl font-bold mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                Why Choose Us
              </m.h2>
              
              <m.div
                className="grid md:grid-cols-3 gap-8 mb-12"
                initial="hidden"
                animate={statsInView ? "show" : "hidden"}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                {stats.map((stat, index) => (
                  <m.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 30 },
                      show: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <InteractiveCard
                      title=""
                      className="text-center bg-white/50 backdrop-blur-sm"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold mb-2">{stat.label}</div>
                      <div className="text-muted-foreground">{stat.description}</div>
                    </InteractiveCard>
                  </m.div>
                ))}
              </m.div>
              
              <m.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                When you work with Ideas of India Realty, you're not just hiring a service provider – 
                you're partnering with a team that genuinely cares about your success and will go the 
                extra mile to ensure your complete satisfaction.
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </m.div>
          </LazyMotion>
          
          <ThreeDScrollTriggerContainer className="py-8">
            <ThreeDScrollTriggerRow baseVelocity={1.5} direction={1} className="mb-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="mx-3 w-80 sm:w-96 bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-6 flex-shrink-0 min-h-[280px] flex flex-col"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base flex-1 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </ThreeDScrollTriggerRow>
            
            <ThreeDScrollTriggerRow baseVelocity={1.5} direction={-1}>
              {testimonials.slice(3, 6).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="mx-3 w-80 sm:w-96 bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-6 flex-shrink-0 min-h-[280px] flex flex-col"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base flex-1 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
          
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                Join hundreds of satisfied clients who trust Ideas of India Realty for their government service needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                <div>
                  <span className="font-semibold">500+</span> Happy Clients
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                <div>
                  <span className="font-semibold">100%</span> Success Rate
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated professionals bring years of experience and specialized knowledge to help you navigate complex government processes with confidence.
              </p>
            </m.div>
          </LazyMotion>
          
          <TeamCarousel
            members={teamMembers}
            title="OUR TEAM"
            titleSize="xl"
            titleColor="rgba(43, 96%, 56%, 0.8)"
            background="transparent"
            cardWidth={300}
            cardHeight={400}
            cardRadius={20}
            showArrows={true}
            showDots={true}
            keyboardNavigation={true}
            touchNavigation={true}
            animationDuration={800}
            autoPlay={4000}
            pauseOnHover={true}
            visibleCards={2}
            sideCardScale={0.85}
            sideCardOpacity={0.7}
            grayscaleEffect={true}
            infoPosition="bottom"
            infoTextColor="rgb(43, 96%, 56%)"
            infoBackground="transparent"
            onMemberChange={(member, index) => {
              console.log(`Active member changed to: ${member.name} at index ${index}`);
            }}
            onCardClick={(member, index) => {
              console.log(`Card clicked: ${member.name} at index ${index}`);
            }}
            className="min-h-[600px]"
          />
        </div>
      </section>
    </Layout>
  );
};

export default About;