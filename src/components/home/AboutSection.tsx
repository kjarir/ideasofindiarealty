import { Shield, CheckCircle, Users, Award } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";

const AboutSection = () => {
  const stats = [
    { icon: Shield, label: "100% Compliant", value: "Always" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" },
    { icon: Users, label: "Happy Clients", value: "5000+" },
    { icon: Award, label: "Years Experience", value: "15+" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <AnimatedText as="span">Why Choose Our Services?</AnimatedText>
              </h2>
              
              <div className="space-y-6 mb-8">
                <m.div
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-lg font-medium text-primary mb-2">
                    "We don't believe in shortcuts..."
                  </p>
                  <p className="text-muted-foreground">
                    Quality, integrity, and client success are the foundation of everything we do. 
                    Trust isn't something we claim — it's something we've earned by quietly 
                    delivering results, again and again.
                  </p>
                </m.div>
                
                <m.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Approvals don't come by chance; they come through deep knowledge, a clear process, 
                  and relentless follow-up. While others chase volume, we focus on quality, building 
                  long-term trust with clients and earning respect from departments.
                </m.p>
                
                <m.p
                  className="text-muted-foreground leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  So when others say 'not possible,' we say, 'consider it done — the right way.'
                </m.p>
              </div>
            </m.div>
          </LazyMotion>

          {/* Stats Grid */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <m.div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </m.div>
                );
              })}
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;