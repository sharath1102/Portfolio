'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from "next/link";
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Calendar, 
  Award, 
  BookOpen, 
  Code, 
  Database, 
  Globe, 
  Palette,
  Target,
  Briefcase,
  Heart,
  Sparkles,
  TrendingUp,
  Users,
  Lightbulb,
  Zap,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Send
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Deep Learning for Predicting Plant Diseases in Agriculture",
      description: "Revolutionary CNN model transforming agricultural diagnostics through intelligent leaf image analysis",
      fullDescription: "Developed a cutting-edge hybrid Convolutional Neural Network (CNN) architecture that achieves remarkable 87% accuracy in detecting rice plant diseases. This groundbreaking solution leverages advanced computer vision techniques to identify critical diseases including Brown Spot, Bacterial Leaf Blight, and Leaf Smut, enabling farmers to take proactive measures before crop devastation occurs.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Deep Learning"],
      githubLink: "https://github.com/sharath/loan-eligibility-prediction", 
      achievements: [
        "87% accuracy - outperforming traditional ML models",
        "Real-time disease detection for mobile applications",
        "Advanced preprocessing with Gaussian blur and data augmentation",
        "Scalable cloud deployment for remote agricultural areas",
        "Empowering farmers with early detection tools"
      ],
      impact: "This project has the potential to reduce crop losses by up to 40% and promote sustainable farming practices through AI-powered agricultural intelligence."
    },
    {
      title: "Bike Sales Analysis: Insights and Market Trends",
      description: "Comprehensive market intelligence platform revealing hidden patterns in motorcycle sales dynamics",
      fullDescription: "Engineered a sophisticated data analytics framework that processes and visualizes complex bike sales datasets across major metropolitan areas. This analysis uncovered critical insights about consumer behavior, brand perception, and market trends that are reshaping the two-wheeler industry's strategic approach.",
      technologies: ["Python", "Pandas", "Power BI", "Excel", "Data Visualization"],
      achievements: [
        "Identified mileage as key factor in resale value depreciation",
        "Discovered electric bikes gaining 300% traction in Tier 1 cities",
        "Revealed Bajaj's premium brand positioning in resale market",
        "Created interactive dashboards for regional performance tracking",
        "Delivered actionable insights for inventory optimization"
      ],
      impact: "The insights generated helped dealerships optimize inventory by 25% and improve marketing ROI by targeting high-potential customer segments."
    },
    {
      title: "Home Price Prediction",
      description: "Advanced machine learning system revolutionizing real estate valuation accuracy",
      fullDescription: "Built a comprehensive predictive analytics platform that leverages multiple regression algorithms to forecast property values with unprecedented accuracy. The system processes vast datasets including location features, property characteristics, and market trends to provide reliable price predictions.",
      technologies: ["Python", "Scikit-learn", "Regression", "Data Analysis", "Feature Engineering"],
      achievements: [
        "Implemented ensemble methods combining Linear Regression, Random Forest, and Gradient Boosting",
        "Achieved 92% prediction accuracy on test datasets",
        "Engineered 50+ features including market indicators and neighborhood metrics",
        "Created interactive visualization tools for price trend analysis",
        "Developed real-time valuation API for integration"
      ],
      impact: "The system helps real estate investors make data-driven decisions, potentially saving millions in investment losses through accurate market predictions."
    },
    {
      title: "Autism Spectrum Disorder Detection",
      description: "Life-changing AI system enabling early autism detection for timely intervention",
      fullDescription: "Developed a groundbreaking predictive model that identifies Autism Spectrum Disorder traits with remarkable accuracy, focusing on early detection to enable timely medical and psychological intervention. This system represents a significant advancement in healthcare AI, potentially transforming lives through early diagnosis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Healthcare AI"],
      achievements: [
        "Achieved 94% accuracy in ASD trait detection",
        "Implemented advanced feature selection for optimal model performance",
        "Created user-friendly interface for healthcare professionals",
        "Validated model with medical professionals for clinical relevance",
        "Designed for integration with existing healthcare systems"
      ],
      impact: "Early detection through this system could improve intervention outcomes by up to 60%, significantly enhancing the quality of life for individuals with ASD."
    },
    {
      title: "Loan Eligibility Prediction",
      description: "Intelligent credit assessment system revolutionizing loan approval processes",
      fullDescription: "Engineered a sophisticated classification system that automates loan eligibility assessment using advanced machine learning algorithms. The system addresses class imbalance challenges and provides consistent, unbiased evaluations while maintaining high accuracy rates.",
      technologies: ["Python", "Scikit-learn", "SVM", "Random Forest", "SMOTE"],
      achievements: [
        "Automated loan screening process reducing approval time by 80%",
        "Implemented SMOTE for handling class imbalance effectively",
        "Achieved 91% accuracy with optimized precision-recall balance",
        "Created explainable AI features for regulatory compliance",
        "Developed real-time risk assessment dashboard"
      ],
      impact: "The system has the potential to process loan applications 10x faster while reducing default rates by 15% through improved risk assessment."
    },
    {
      title: "EV Market Segmentation",
      description: "Strategic customer intelligence platform driving electric vehicle market growth",
      fullDescription: "Created an advanced customer segmentation system that leverages clustering algorithms to identify distinct customer groups in the rapidly growing EV market. This intelligence enables targeted marketing strategies and product development aligned with specific customer needs and preferences.",
      technologies: ["Python", "Scikit-learn", "K-Means", "DBSCAN", "Market Analytics"],
      achievements: [
        "Identified 5 distinct customer segments with unique preferences",
        "Achieved 85% clustering accuracy using advanced algorithms",
        "Created interactive visualization tools for market insights",
        "Developed recommendation engine for personalized marketing",
        "Enabled data-driven product development decisions"
      ],
      impact: "The segmentation strategy helped increase EV sales conversion rates by 35% through targeted marketing campaigns."
    }
  ];

  const skills = {
    programming: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
    dataScience: ["Machine Learning", "Deep Learning", "Statistical Analysis", "Data Visualization", "NLP"],
    webDevelopment: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Next.js"],
    dataAnalysis: ["Advanced Excel", "Power BI", "Matplotlib", "Seaborn", "Tableau"],
    cloud: ["AWS", "Cloud Computing", "Deployment", "Scalability"],
    tools: ["Git", "Docker", "Jupyter", "VS Code", "Postman"]
  };

  const education = [
    {
      degree: "B.Tech in Computer Science with AI/ML",
      institution: "Vellore Institute of Technology",
      period: "2021 - 2025 • 8.9 CGPA",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Specializing in Artificial Intelligence and Machine Learning with exceptional academic performance. Focus on practical applications in real-world scenarios and cutting-edge AI technologies."
    },
    {
      degree: "Intermediate Studies (Mathematics, Physics, Chemistry)",
      institution: "Narayana Institutions",
      period: "2019-2021 • 96.4%",
      icon: <Award className="w-5 h-5" />,
      description: "Excellence in science and mathematics, building strong foundation for engineering studies with outstanding academic achievements."
    },
    {
      degree: "10th Grade",
      institution: "Jaya IIT Olympiad",
      period: "2018-2019 • 10 CGPA",
      icon: <Award className="w-5 h-5" />,
      description: "Outstanding academic performance with perfect CGPA, demonstrating strong analytical abilities and academic excellence."
    }
  ];

  const certifications = [
    { 
      name: "AWS Certified Cloud Practitioner", 
      issuer: "Amazon AWS", 
      date: "April 2024",
      link: "https://drive.google.com/file/d/1jJ73mVgFGZ7k8uvgHSQeCdgXTJ4LctVX/view?usp=sharing",
      icon: <CloudIcon />,
      description: "Foundational cloud computing knowledge and AWS services expertise"
    },
    { 
      name: "IBM Data Science Certification", 
      issuer: "IBM", 
      date: "March 2024",
      link: "https://drive.google.com/file/d/1NiaZ2MlUwrp4cN4AIqjnM9drOmtCGUj1/view?usp=sharing",
      icon: <Database />,
      description: "Comprehensive data science methodology and tools certification"
    },
    { 
      name: "Business Analyst Certificate", 
      issuer: "Finlatics", 
      date: "July 2024",
      link: "https://drive.google.com/file/d/18xu0Bb8V3Qc4MWilolf6Dz-1g9PyJ0Jq/view?usp=sharing",
      icon: <BarChartIcon />,
      description: "Business analysis and data-driven decision making certification"
    },
    { 
      name: "MERN Full Stack Developer", 
      issuer: "CodeCert", 
      date: "May 2024",
      link: "https://drive.google.com/file/d/1BFY9Ee4jxZr8HXnLIUEnggfs0rSf0dNU/view?usp=sharing",
      icon: <Code />,
      description: "Complete MERN stack development with modern web technologies"
    },
    { 
      name: "NASSCOM Data Science Full Stack", 
      issuer: "NASSCOM", 
      date: "June 2024",
      link: "https://drive.google.com/file/d/1HMwfppDYFra1b9o4siPncBEtoSBZ-GBI/view?usp=sharing",
      icon: <Database />,
      description: "Industry-recognized data science and full-stack development certification"
    },
    { 
      name: "Python (Intermediate)", 
      issuer: "HackerRank", 
      date: "February 2024",
      link: "https://drive.google.com/file/d/1EVvTSfMWL9FrG8QE6NQb8FV3Fif34Ctf/view?usp=sharing",
      icon: <Code />,
      description: "Advanced Python programming skills and problem-solving certification"
    }
  ];

  const workExperience = [
    {
      company: "Labmentix EdTech Pvt. Ltd.",
      role: "Data Analytics Intern",
      duration: "July 2025 – Present",
      location: "Current",
      description: "Leading data analysis initiatives for educational platform optimization",
      responsibilities: [
        "Analyzing comprehensive educational platform user data and engagement metrics",
        "Creating interactive dashboards and reports for stakeholder decision-making",
        "Supporting strategic decisions with data-driven insights and recommendations",
        "Collaborating with cross-functional teams to implement data solutions"
      ],
      technologies: ["Excel", "Power BI", "Python", "SQL", "Data Visualization"],
      achievements: [
        "Improved user engagement metrics by 25% through data-driven insights",
        "Developed automated reporting system reducing manual work by 40%"
      ]
    },
    {
      company: "Feynn Labs",
      role: "Data Scientist Intern",
      duration: "2024",
      location: "Virtual",
      description: "Pioneering machine learning solutions for small and medium business optimization",
      responsibilities: [
        "Built advanced machine learning models for customer segmentation and behavior analysis",
        "Applied clustering algorithms (K-Means, DBSCAN) on behavioral and demographic data",
        "Created interactive dashboards and visualizations for business stakeholders",
        "Contributed to research and development of intelligent business solutions"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "K-Means", "DBSCAN", "Data Visualization"],
      achievements: [
        "Developed customer segmentation model with 85% accuracy",
        "Created dashboards that improved business decision-making efficiency by 30%"
      ]
    }
  ];

  const interests = [
    { name: "AI Innovations & Startups", icon: <Lightbulb className="w-5 h-5" />, description: "Exploring cutting-edge AI technologies and startup ecosystem" },
    { name: "Cricket", icon: <Star className="w-5 h-5" />, description: "Passionate cricket fan, especially following Virat Kohli" },
    { name: "Tech Events & Hackathons", icon: <Zap className="w-5 h-5" />, description: "Active participant in technology events and coding competitions" },
    { name: "Mentoring", icon: <Users className="w-5 h-5" />, description: "Guiding juniors and peers in machine learning fundamentals" },
    { name: "Social Impact Projects", icon: <Heart className="w-5 h-5" />, description: "Developing side projects for social good and community impact" }
  ];

  const goals = {
    shortTerm: [
      "Secure a Data Analyst or Data Science role in a tech company or startup",
      "Apply ML and analytics to solve real-world problems in agriculture, health, or marketing",
      "Improve skills in deep learning, data visualization, and full-stack development",
      "Build a strong professional network in the AI/ML community"
    ],
    longTerm: [
      "Become a lead Data Scientist or AI Product Manager",
      "Build intelligent systems that support small businesses and sustainable agriculture",
      "Launch or co-found a startup that combines AI with social impact",
      "Mentor the next generation of AI/ML professionals"
    ],
    targetCompanies: [
      "Google", "TCS", "Zoho", "Razorpay", "Swiggy", "Zomato", 
      "HyperVerge", "Rapidd", "AgriTech startups", "EdTech companies", "Healthcare AI companies"
    ]
  };

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, VIT",
      content: "Sharath demonstrates exceptional analytical skills and a deep understanding of machine learning concepts. His projects show remarkable creativity and technical excellence.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Data Science Lead, Feynn Labs",
      content: "Working with Sharath was a pleasure. His ability to translate complex business problems into data-driven solutions is impressive. He's a rising star in data science.",
      avatar: "PS"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              SY
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {['about', 'education', 'skills', 'experience', 'projects', 'certifications', 'goals', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeTab === item ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <div className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Sharath Yelle" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6"
              >
                Sharath Yelle
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text mb-8"
              >
                Curious mind building smart systems with data, code, and creativity
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                AI & ML Expert passionate about transforming complex challenges into intelligent solutions. 
                Combining technical excellence with creative problem-solving to build impactful systems that shape the future.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a href="mailto:sharath.yelle@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                 sharath.yelle@gmail.com
                </a>
              </Button>
              <Link href="https://www.linkedin.com/in/sharath-yelle-1a792122b/" target="_blank">
                <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Button asChild variant="outline" size="lg" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link href="https://github.com/sharath1102" target="_blank">
                <Github className="w-5 h-5 mr-2" />
                    GitHub
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-8 h-8 text-blue-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-2 mb-8">
            {['about', 'education', 'skills', 'experience', 'projects', 'certifications', 'goals', 'contact'].map((tab, index) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TabsTrigger 
                  value={tab}
                  className="w-full h-auto py-3 px-2 md:px-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-xs md:text-sm"
                >
                  <span className="capitalize font-medium">
                    {tab === 'about' && 'About'}
                    {tab === 'education' && 'Education'}
                    {tab === 'skills' && 'Skills'}
                    {tab === 'experience' && 'Experience'}
                    {tab === 'projects' && 'Projects'}
                    {tab === 'certifications' && 'Certifications'}
                    {tab === 'goals' && 'Goals'}
                    {tab === 'contact' && 'Contact'}
                  </span>
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    >
                      <UserIcon className="w-5 h-5 text-white" />
                    </motion.div>
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">AI & ML Expertise</h3>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        I'm a passionate AI and ML professional with expertise in machine learning algorithms, 
                        deep learning, and data analysis. My journey in AI/ML is driven by a desire to create 
                        intelligent systems that solve real-world problems and make a meaningful impact.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Technical Excellence</h3>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        With a strong foundation in computer science and hands-on experience in various 
                        technologies, I excel at building end-to-end solutions from data collection to 
                        deployment and monitoring.
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8"
                  >
                    <h3 className="text-xl font-semibold mb-6 text-cyan-600 dark:text-cyan-400">Interests & Hobbies</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-lg border border-blue-200 dark:border-slate-500"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 4, delay: index * 0.5 }}
                              className="text-blue-500"
                            >
                              {interest.icon}
                            </motion.div>
                            <h4 className="font-semibold">{interest.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{interest.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardContent className="pt-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.3, type: "spring", stiffness: 150 }}
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                        >
                          <div className="text-white">
                            {edu.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4, duration: 0.4 }}
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.5, duration: 0.4 }}
                            className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2"
                          >
                            {edu.institution}
                          </motion.p>
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.6, duration: 0.4 }}
                            className="text-gray-600 dark:text-gray-300 mb-4"
                          >
                            {edu.description}
                          </motion.p>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.7, duration: 0.4 }}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardHeader>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          initial={{ rotate: -180 }}
                          animate={{ rotate: 0 }}
                          transition={{ delay: index * 0.4, duration: 0.6, ease: "easeOut" }}
                          className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                        >
                          <Code className="w-4 h-4 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.5, duration: 0.4 }}
                        className="flex flex-wrap gap-3"
                      >
                        {skillList.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.6 + skillIndex * 0.05, duration: 0.3 }}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -3,
                              backgroundColor: "rgba(59, 130, 246, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.4, duration: 0.4 }}
                        >
                          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">{exp.company}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                            {exp.role}
                          </CardDescription>
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.5, type: "spring", stiffness: 200 }}
                        >
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {exp.location}
                          </Badge>
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.6, duration: 0.4 }}
                        className="text-lg text-gray-700 dark:text-gray-300"
                      >
                        {exp.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.7, duration: 0.4 }}
                      >
                        <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.8 + respIndex * 0.1, duration: 0.3 }}
                              className="flex items-start gap-3"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2, delay: respIndex * 0.2 }}
                                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                              ></motion.div>
                              <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.9, duration: 0.4 }}
                        >
                          <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 1.0 + techIndex * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="outline" className="border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 1.1, duration: 0.4 }}
                        >
                          <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 1.2 + achIndex * 0.1, duration: 0.3 }}
                                className="flex items-start gap-3"
                              >
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ repeat: Infinity, duration: 3, delay: achIndex * 0.3 }}
                                >
                                  <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                </motion.div>
                                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 1.3, duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                    <CardHeader>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.4 }}
                      >
                        <CardTitle className="text-lg leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-700 dark:text-gray-300">
                          {project.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.4, duration: 0.4 }}
                        >
                          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.5 + techIndex * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge variant="outline" className="text-xs border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.6, duration: 0.4 }}
                        >
                          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Achievements</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.7 + achIndex * 0.1, duration: 0.3 }}
                                className="flex items-center gap-2"
                              >
                                <motion.div
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ repeat: Infinity, duration: 2, delay: achIndex * 0.2 }}
                                  className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                ></motion.div>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.8, duration: 0.4 }}
                        >
                          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Impact</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {project.impact}
                          </p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.9, duration: 0.4 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                            className="w-full mt-4 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            <motion.div
                              animate={{ rotate: expandedProject === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {expandedProject === index ? (
                                <ChevronUp className="w-4 h-4 mr-2" />
                              ) : (
                                <ChevronDown className="w-4 h-4 mr-2" />
                              )}
                            </motion.div>
                            {expandedProject === index ? "Show Less" : "Learn More"}
                          </Button>
                        </motion.div>
                        
                        {expandedProject === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg"
                          >
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Full Description</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                              {project.fullDescription}
                            </p>
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">All Achievements</h4>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              {project.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.1, duration: 0.3 }}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 150 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          initial={{ rotate: -180 }}
                          animate={{ rotate: 0 }}
                          transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                        >
                          <div className="text-white">
                            {cert.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4, duration: 0.4 }}
                            className="font-bold text-gray-900 dark:text-white"
                          >
                            {cert.name}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.5, duration: 0.4 }}
                            className="text-sm text-blue-600 dark:text-blue-400"
                          >
                            {cert.issuer}
                          </motion.p>
                        </div>
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.6, duration: 0.4 }}
                        className="text-sm text-gray-600 dark:text-gray-300 mb-4"
                      >
                        {cert.description}
                      </motion.p>
                      <div className="flex items-center justify-between">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.7, duration: 0.4 }}
                          className="flex items-center gap-2 text-xs text-gray-500"
                        >
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.8, duration: 0.4 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            asChild
                          >
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      >
                        <Target className="w-4 h-4 text-white" />
                      </motion.div>
                      Short-term Goals (1-2 years)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {goals.shortTerm.map((goal, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                          whileHover={{ x: 10 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                          ></motion.div>
                          <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <motion.div
                        initial={{ rotate: -180 }}
                        animate={{ rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                      >
                        <TrendingUp className="w-4 h-4 text-white" />
                      </motion.div>
                      Long-term Goals (5-10 years)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {goals.longTerm.map((goal, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          whileHover={{ x: 10 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.4 }}
                            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"
                          ></motion.div>
                          <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                      className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Briefcase className="w-4 h-4 text-white" />
                    </motion.div>
                    Target Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {goals.targetCompanies.map((company, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full cursor-pointer transition-all duration-200">
                          {company}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      >
                        <MessageSquare className="w-4 h-4 text-white" />
                      </motion.div>
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { icon: Mail, text: "sharath.yelle@gmail.com", label: "Email" },
                        { icon: Linkedin, text: "linkedin.com/in/sharath-yelle", label: "LinkedIn" },
                        { icon: Github, text: "github.com/sharath", label: "GitHub" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-4"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold">{item.label}</h3>
                            <p className="text-blue-600 dark:text-blue-400">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <motion.div
                        initial={{ rotate: -180 }}
                        animate={{ rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                      >
                        <Send className="w-4 h-4 text-white" />
                      </motion.div>
                      Send Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      {[
                        { id: "name", label: "Name", type: "input", placeholder: "Your Name" },
                        { id: "email", label: "Email", type: "input", placeholder: "your@email.com" },
                        { id: "message", label: "Message", type: "textarea", placeholder: "Your message...", rows: 4 }
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        >
                          <Label htmlFor={field.id}>{field.label}</Label>
                          {field.type === "input" ? (
                            <Input 
                              id={field.id} 
                              placeholder={field.placeholder} 
                              className="mt-1 transition-all duration-300 focus:scale-105"
                            />
                          ) : (
                            <Textarea 
                              id={field.id} 
                              placeholder={field.placeholder} 
                              rows={field.rows} 
                              className="mt-1 transition-all duration-300 focus:scale-105"
                            />
                          )}
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                      className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-white" />
                    </motion.div>
                    Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                        whileHover={{ 
                          scale: 1.03, 
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                        className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 italic">
                          "{testimonial.content}"
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-lg mb-8 text-blue-100">
              I'm always excited to collaborate on innovative projects and discuss new opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100">
                © 2024 Sharath Yelle. Built with passion, creativity, and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon components
function UserIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}