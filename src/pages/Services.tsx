import Layout from "@/components/layout/Layout";
import { 
  Building, 
  FileText, 
  Landmark, 
  Home, 
  MapPin, 
  Shield, 
  Factory,
  CheckCircle,
  Users,
  Award,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";

const Services = () => {
  const serviceCategories = [
    {
      id: "mantralaya",
      title: "Core Mantralaya & Revenue Department Services",
      icon: Landmark,
      description: "Comprehensive government services and revenue department coordination",
      services: [
        {
          category: "🏛️ Mantralaya Services & File Processing",
          items: [
            "File Submission & Processing at Mantralaya",
            "Services with IAS/IPS/Secretarial Officers",
            "Coordination with Urban Development, Housing, Revenue Departments",
            "Getting GOs (Government Orders) Passed",
            "Representations in CM Cell / Ministerial Offices",
            "Clearance from Town Planning Department",
            "File Follow-up & Speed-up at Secretarial Level",
            "Mantralaya Project Approval Consulting",
            "VIP Office Services for File Movement",
            "All Work from General Administration to Housing",
            "RTI Filing through Mantralaya Departments",
            "Resolving Stuck Files / Delay in Clearance",
            "Work Related to Special Permissions / Regularization"
          ]
        },
        {
          category: "🗂️ Government Orders, Notifications & Compliance",
          items: [
            "Drafting & Issuance of Government Orders (GOs)",
            "Objection Filing / Hearing Coordination",
            "Final Notification Coordination",
            "Compliance Filing for Revenue GOs",
            "File Movement in Revenue Secretary's Office"
          ]
        },
        {
          category: "📋 Land & Property Records",
          items: [
            "7/12 Extract (Satbara) Corrections & Updates",
            "Mutation Entries (Ferfar) / Property Transfer",
            "Name Change in Land Records",
            "Heirship Certificate Processing",
            "Certified Copies of Land Records",
            "Historical Land Record Retrieval",
            "Khatedar Certificate & Landholder Proofs",
            "Land Ceiling, Holding & Redistribution Matters"
          ]
        },
        {
          category: "🧾 Land Conversion, Acquisition & Allotment",
          items: [
            "Land Conversion (Agricultural to Non-Agricultural)",
            "Government Land Lease / Allotment",
            "Land Allotment under Government Schemes",
            "Acquisition Proposal Filing & Follow-up",
            "Sanctioning of Land for Public/Private Use",
            "Encroachment Clearance & Demarcation"
          ]
        },
        {
          category: "📑 Zoning, Legal & Regularization",
          items: [
            "Zone Certificate & Property Zoning Clearance",
            "Land Regularization Support",
            "Dispute Resolution (Tehsildar / SDO / Collector Office)"
          ]
        }
      ]
    },
    {
      id: "business",
      title: "Business Licensing & Compliance",
      icon: FileText,
      description: "Complete business registration, licensing, and ongoing compliance management",
      services: [
        {
          category: "📝 Business & Trade Licenses",
          items: [
            "Shop & Establishment License",
            "Trade License / Eating House License",
            "Health Trade License",
            "Factory License",
            "Food & Drug License (FDA)",
            "FSSAI License"
          ]
        },
        {
          category: "🧾 Business Registrations",
          items: [
            "MSME / Udyam Registration",
            "Startup India / DPIIT Recognition",
            "Professional Tax (PTEC / PTRC) Registration",
            "Labour Welfare Fund Compliance"
          ]
        },
        {
          category: "💼 Company & GST Setup",
          items: [
            "Company / LLP / Partnership Registration",
            "GST Registration & Filing Support",
            "Import Export Code (IEC) Registration",
            "Barcode / BIS / ISI Licensing"
          ]
        }
      ]
    },
    {
      id: "bmc",
      title: "BMC / Municipal Corporation Services",
      icon: Building,
      description: "Municipal approvals, building permissions, and local body clearances",
      services: [
        {
          category: "🏗️ BMC Building & Property Approvals",
          items: [
            "BMC Building Proposal Approval",
            "IOD (Intimation of Disapproval) / CC (Commencement Certificate)",
            "OC (Occupation Certificate) & Completion Certificate",
            "Property Tax Mutation & Assessment"
          ]
        },
        {
          category: "🧾 BMC Licensing & Permits",
          items: [
            "Shops & Establishment License",
            "Health License / Food License",
            "Factory License",
            "Trade License Renewals & Modifications"
          ]
        },
        {
          category: "🧱 Property & Development",
          items: [
            "DP Remarks & Zone Certificates",
            "Property Demarcation & Subdivision",
            "Change of Land Use (CLU)",
            "Drainage / Sewerage NOCs"
          ]
        }
      ]
    },
    {
      id: "mhada-sra",
      title: "MHADA & SRA (Housing Authorities)",
      icon: Home,
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      services: [
        {
          category: "🏘️ MHADA Project Services",
          items: [
            "MHADA Land Allotment & Approvals",
            "MHADA NOC for Redevelopment",
            "Consent & Documentation Handling",
            "Coordination with MHADA Officers"
          ]
        },
        {
          category: "🏚️ Slum Rehabilitation Authority (SRA)",
          items: [
            "Slum Survey Coordination",
            "Annexure-II Certification",
            "SRA Project Proposal Filing",
            "Tenant Consent & Verification",
            "Follow-ups with SRA Authority"
          ]
        }
      ]
    },
    {
      id: "real-estate",
      title: "Real Estate & Development Approvals",
      icon: MapPin,
      description: "Comprehensive real estate approvals and development project clearances",
      services: [
        {
          category: "📜 Development Approvals",
          items: [
            "DP Remarks & Zone Certificate",
            "Building Plan Sanctioning",
            "TDR (Transfer of Development Rights) Support",
            "Premium FSI & Fungible FSI Approvals",
            "ULC Clearance"
          ]
        },
        {
          category: "📄 Project Registration & NOCs",
          items: [
            "RERA Registration Support",
            "Environmental Clearance Coordination",
            "Airport / Defense NOC",
            "Fire NOC",
            "Lift License & NOC"
          ]
        }
      ]
    },
    {
      id: "regulatory",
      title: "Other Regulatory & Advisory Services",
      icon: Shield,
      description: "Expert consultation and regulatory guidance for complex compliance requirements",
      services: [
        {
          category: "🔐 Legal & Compliance",
          items: [
            "Affidavits & Notarization Support",
            "Drafting of Agreements & Deeds",
            "Title Search & Due Diligence",
            "Revenue Litigation Support"
          ]
        },
        {
          category: "🧠 Consultancy & Project Advisory",
          items: [
            "End-to-End Project Consulting",
            "Feasibility Reports & Project Reports",
            "Representation with Govt Bodies",
            "File Monitoring & Fast-Tracking"
          ]
        }
      ]
    },
    {
      id: "midc-sidco",
      title: "MIDC & SIDCO Services",
      icon: Factory,
      description: "Industrial development approvals and SIDCO-related clearances",
      services: [
        {
          category: "🏭 MIDC & SIDCO Services",
          items: [
            "MIDC Plot Allotment Assistance",
            "MIDC Lease Renewal & Conversion",
            "MIDC File Submission & Services",
            "MIDC NOCs for Construction & Usage",
            "SIDCO Land / Plot Support",
            "SIDCO Registration / Transfer Help",
            "Industrial Approval Support through MIDC/SIDCO",
            "Government Scheme Assistance for Industrial Units"
          ]
        }
      ]
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "No Shortcuts",
      description: "We believe in doing things right the first time, with meticulous attention to detail and complete regulatory compliance."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We provide personalized service and dedicated support throughout every process."
    },
    {
      icon: Award,
      title: "Results-Driven",
      description: "With a proven track record of successful applications and satisfied clients, we deliver measurable outcomes."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <AnimatedText as="span">Our Services</AnimatedText>
                </h1>
                <p className="text-lg lg:text-xl text-white/90 mb-8">
                  Comprehensive government services and regulatory compliance solutions 
                  with unwavering commitment to quality, trust, and reliability.
                </p>
              </m.div>
            </LazyMotion>

            {/* Philosophy Quote */}
            <LazyMotion features={domAnimation} strict>
              <m.div
                className="bg-white/15 backdrop-blur-md rounded-lg p-8 mb-8 border border-white/30 shadow-elegant"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-lg italic text-white/95 mb-4">
                  "We don't believe in shortcuts or empty promises. Trust isn't something we claim — 
                  it's something we've earned by quietly delivering results, again and again."
                </p>
                <p className="text-white/80">
                  Approvals don't come by chance; they come through deep knowledge, a clear process, 
                  and relentless follow-up. While others chase volume, we focus on quality.
                </p>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <AnimatedText as="span">Comprehensive Service Categories</AnimatedText>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From government approvals to regulatory compliance, we handle every aspect 
                  of your administrative and legal requirements with precision and care.
                </p>
              </m.div>
            </LazyMotion>
          </div>

          <LazyMotion features={domAnimation} strict>
            <m.div
              className="space-y-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <m.div
                    key={category.id}
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card className="shadow-card border-0 overflow-hidden">
                      <CardHeader className="bg-primary-light">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                            <CardDescription className="text-lg text-muted-foreground">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          {category.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="border-l-4 border-primary-light pl-4">
                              <h4 className="font-semibold text-lg mb-3 text-foreground">
                                {service.category}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </m.div>
                );
              })}
            </m.div>
          </LazyMotion>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction, every decision, and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift shadow-card border-0">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to work with us? Let's discuss your requirements and create a tailored approach 
              that ensures complete compliance and success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 9819013866</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">ideasofindia786@gmail.com</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Office No. 2, Ground Floor, Court Royal Building,<br />
                  Christ Church Lane (Clare Road),<br />
                  Mirza Ghalib Marg, Mumbai-400008
                </p>
              </div>
            </div>

            <Button size="lg" className="hover-lift">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
