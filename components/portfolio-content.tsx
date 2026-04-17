"use client"

import { useState, useEffect } from "react"
import { BentoCard } from "@/components/bento-card"
import { X, Linkedin, Mail } from "lucide-react"

const services = [
  { id: "video", title: "Video Production", icon: "video" as const },
  { id: "social", title: "Short Form & Social Media", icon: "social" as const },
  { id: "community", title: "Community & Growth", icon: "community" as const },
]

const videoProjects = [
  {
    id: "helpme",
    title: "HelpMe Startup Promo",
    description: "Produced a 60-second explainer video for a tech startup. This pitch video was apart of the team's success as they won second place in a nationwide pitching competition in Thailand.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/VOAJZcyry_s" }    
    ]
  },
  {
    id: "gamingdee",
    title: "GamingDee: ChatGPT vs. Gemini",
    description: "A high-retention Youtube video edit for a gaming channel. Focused heavily on pacing, visual hooks, and motion graphics to maximise viewer watch time.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/s_rSjRRY8LU?si=EFqCrFsxlRPPfX2Y" }
    ]
  },
  {
    id: "emma",
    title: "Emma Brooksby Multi-Cam Interview",
    description: "Shot a professional multi-cam interview. Set up a 2-camera lighting, recordied all b-rolls and handled all post-production multi-cam syncing and editing.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/ggaqnmiKCks" }
    ]
  },
  {
    id: "yindee",
    title: "Yindee Wellness Channel Launch",
    description: "End-to-end production for a yoga and singing bowl YouTube channel. Filmed using the Blackmagic app on iPhone 15 Pro, managing manual camera settings, custom lighting setups, and thumbnail design. She's my mum and I wanted to bring her talent to the Youtube world :)",
    media: [
      { type: "image", url: "/YinDee1.png" },
      { type: "image", url: "/YinDee2.png" },
      { type: "youtube", url: "https://www.youtube.com/embed/034HQf7f1qM" },
    ] 
    },
      {
    id: "prefactor",
    title: "Prefactor Hackathon Montage",
    description: "Filmed and edited a dynamic event montage for a startup mini-hackathon. Directed challenge-style, on-the-ground interviews to drive social engagement.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/4ld1cuN3CPI" }
    ]
  },
    {
      id: "Schweppes",
      title: "Schweppes Commercial Project",
      description: "My first ever project using a DSLR at the age of 16 in a project that involves creating an advertising material for any brand, I decided to make a commercial for Schweppes drinks that I just happen to have in the fridge.",
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/j7WVzPJDs7U" }
      ]
    },
    {
      id: "Kiazul",
      title: "Music Video Promo for Melbourne Rapper, Kia Zul",
      description: "Filmed and edited by me, dynamic camera movements and angles with fast cuts, with the focus on matching the beat of the music. This song currently has over 100K streams on Spotify.",
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/_M9dxvEIpE8" }
      ]
    }
]

const socialProjects = [
  {
    id: "beforetheymadeit",
    title: "Before They Made It Podcast",
    description: "Co-produced a social media content channel and podcast. Handled end-to-end production including directing behind the camera, post-production editing for high-retention shorts, and custom thumbnail design.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/ek98u8gAidM" },
      { type: "image", url: "/BeforeTheyMadeItInstagram.png" },
    ]
  },
  {
    id: "prefactor-social",
    title: "Prefactor Challenge Shorts",
    description: "Directed and edited on-the-ground, challenge-style short-form content during a startup hackathon, designed specifically for rapid social media engagement and event hype.",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/_zRawd3HBns" }
    ]
  },
  {
    id: "hammyknows",
    title: "HammyKnows Educational Content",
    description: "I noticed a massive trend in fast-paced educational content and wanted to test the waters myself. I built HammyKnows to experiment with visual hooks and pacing across TikTok, IG Reels, and YouTube Shorts. It served as my personal analytics lab, successfully landing 14K views on a single Tiktok video. ",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/t8DuHyxoxPc" },
      { type: "image", url: "/HammyTikTok.png" } 
    ]
  },
  {
    id: "hooperz",
    title: "Hooperz Squad Audience Growth",
    description: "Grew a niche basketball content page from scratch to 2,500+  followers. Experimented with viral content algorithms, resulting in a flagship reel that generated 2.4 million views, with 360k Likes and 154 comments on Instagram.",
    media: [
      { type: "image", url: "/HooperInstaaa.png" } //
    ]
  }
]

const communityProjects = [
  {
    id: "dynastymc",
    title: "Dynasty MC Server (Co-Founder)",
    description: "Scaled and monetized a modded Minecraft server to over 2,000 active Discord members. Managed all branding, marketing strategy, and community announcements, generating $14,002.29 USD in all-time sales revenue.",
    media: [
      { type: "image", url: "/dynasty3.png" },
      { type: "image", url: "DynastyRevenue.png" }
    ]
  },
  {
    id: "struxel",
    title: "Struxel AI SaaS (Pre-Accelerator)",
    description: "Participated in a startup pre-accelerator focusing on Business Development and tech. Prototyped AI products, executed B2B cold outreach campaigns, and built a strong network of local young founders. The design shown is done by me, on Figma, the client was greatly satisfied with the work.",
    media: [
      { type: "image", url: "/struxel1.png" } 
    ]
  }
]

export function PortfolioContent() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeService = services.find((s) => s.id === activeModal)

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-20 lg:py-24 relative">
      {/* Contact Button - Top Right */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="font-sans text-base font-bold px-5 py-2.5 border-3 border-foreground bg-background text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
          style={{
            boxShadow: "4px 4px 0px 0px #1A1A1A",
          }}
        >
          Contact Me
        </button>
        
        {/* Contact Dropdown */}
        {mounted && contactOpen && (
          <div 
            className="absolute top-full right-0 mt-3 border-3 border-foreground bg-background p-4 flex flex-col gap-3"
            style={{
              boxShadow: "4px 4px 0px 0px #1A1A1A",
            }}
          >
            <a
              href="https://www.linkedin.com/in/pawarit-sethi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Linkedin className="w-5 h-5 stroke-[2px]" />
              <span className="font-sans text-sm font-bold">LinkedIn</span>
            </a>
            <a
              href="mailto:pawaritsethi@gmail.com"
              className="flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Mail className="w-5 h-5 stroke-[2px]" />
              <span className="font-sans text-sm font-bold">Email</span>
            </a>
          </div>
        )}
      </div>

      {/* Centered, Symmetrical Layout - Widened to max-w-5xl to make boxes larger */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Profile Picture - Clickable with Hover Effects */}
        <div 
          onClick={() => setActiveModal("about")}
          className="group relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-foreground bg-muted flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:translate-x-1"
          style={{
            boxShadow: "6px 6px 0px 0px #1A1A1A",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/dee-hero-shotc.jpg"
            alt="Dee - Digital Producer" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover Overlay Sticker */}
          <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="font-sans font-black text-background text-xl bg-foreground px-4 py-2 border-2 border-background transform -rotate-6">
               MY STORY
             </span>
          </div>
        </div>
        
        {/* Text Container - Tighter gaps and slightly smaller name */}
        <div className="flex flex-col items-center gap-3 text-center mb-4 md:mb-6 px-4">
          {/* Name */}
          <h1 className="font-sans text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Dee Sethi
          </h1>
          
          {/* Intro Text */}
          <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed text-balance max-w-3xl">
            <span className="font-bold">I edit. I film. I've managed communities and generated revenue from digital products.</span><br className="hidden md:block" />
            <span className="text-foreground/80"> My experience ranges from short-form social media clips and long-form YouTube videos to on-location, multi-camera setups.</span>
          </p>
        </div>

        {/* Three Equal Square Boxes - Bottom (Larger due to max-w-5xl wrapper) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 px-4 md:px-0">
          {services.map((service) => (
            <BentoCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              onClick={() => setActiveModal(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Large Modal - only render after mount */}
      {mounted && activeModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setActiveModal(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-5xl h-[90vh] md:h-[80vh] bg-background border-3 border-foreground flex flex-col"
            style={{
              boxShadow: "8px 8px 0px 0px #1A1A1A",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b-3 border-foreground bg-background">
              <div>
                <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground">
                  {activeModal === "about" ? "Behind the Lens" : activeService?.title}
                </h2>
                <p className="font-mono text-sm text-foreground/70 mt-1">
                  {activeModal === "about" ? "My origin story & tech background" : "Featured projects and work samples"}
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 flex items-center justify-center border-2 border-foreground bg-background transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[2.5px]" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-6">
                
                {/* Conditionally render Video Projects */}
                {activeModal === "video" && videoProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="border-3 border-foreground p-5 bg-background flex flex-col gap-4"
                    style={{ boxShadow: "4px 4px 0px 0px #1A1A1A" }}
                  >
                    {/* Horizontal Snap Scrolling Gallery */}
                    <div className={`flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar ${project.media.length === 1 ? "justify-center" : ""}`}>
                      {project.media.map((item, index) => (
                        <div 
                          key={index} 
                          className={`flex-none aspect-video bg-muted border-2 border-foreground relative overflow-hidden snap-center flex items-center justify-center ${project.media.length === 1 ? "w-full" : "w-[90%] md:w-[80%]"}`}
                        >
                          {item.type === "youtube" ? (
                             <iframe 
                               className="absolute top-0 left-0 w-full h-full"
                               src={item.url} 
                               title={`${project.title} Video ${index + 1}`}
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen
                             />
                          ) : (
                             // eslint-disable-next-line @next/next/no-img-element
                             <img 
                               src={item.url} 
                               alt={`${project.title} behind the scenes`} 
                               className="absolute top-0 left-0 w-full h-full object-cover"
                             />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Project Text */}
                    <div>
                      <h3 className="font-sans text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 2. Social Projects Block*/}
                {activeModal === "social" && socialProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="border-3 border-foreground p-5 bg-background flex flex-col gap-4"
                    style={{ boxShadow: "4px 4px 0px 0px #1A1A1A" }}
                  >
                    {/* Horizontal Snap Scrolling Gallery */}
                    <div className={`flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar ${project.media.length === 1 ? "justify-center" : ""}`}>
                      {project.media.map((item, index) => (
                        <div 
                          key={index} 
                          className={`flex-none aspect-video bg-muted border-2 border-foreground relative overflow-hidden snap-center flex items-center justify-center ${project.media.length === 1 ? "w-full" : "w-[90%] md:w-[80%]"}`}
                        >
                          {item.type === "youtube" ? (
                             <iframe 
                               className="absolute top-0 left-0 w-full h-full"
                               src={item.url} 
                               title={`${project.title} Video ${index + 1}`}
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen
                             />
                          ) : (
                             // eslint-disable-next-line @next/next/no-img-element
                             <img 
                               src={item.url} 
                               alt={`${project.title} behind the scenes`} 
                               className="absolute top-0 left-0 w-full h-full object-cover"
                             />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Project Text */}
                    <div>
                      <h3 className="font-sans text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 3. Community Projects Block */}
                {activeModal === "community" && communityProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="border-3 border-foreground p-5 bg-background flex flex-col gap-4"
                    style={{ boxShadow: "4px 4px 0px 0px #1A1A1A" }}
                  >
                    {/* Horizontal Snap Scrolling Gallery */}
                    <div className={`flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar ${project.media.length === 1 ? "justify-center" : ""}`}>
                      {project.media.map((item, index) => (
                        <div 
                          key={index} 
                          className={`flex-none aspect-video bg-muted border-2 border-foreground relative overflow-hidden snap-center flex items-center justify-center ${project.media.length === 1 ? "w-full" : "w-[90%] md:w-[80%]"}`}
                        >
                          {item.type === "youtube" ? (
                             <iframe 
                               className="absolute top-0 left-0 w-full h-full"
                               src={item.url} 
                               title={`${project.title} Video ${index + 1}`}
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen
                             />
                          ) : (
                             // eslint-disable-next-line @next/next/no-img-element
                             <img 
                               src={item.url} 
                               alt={`${project.title} behind the scenes`} 
                               className="absolute top-0 left-0 w-full h-full object-cover"
                             />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Project Text */}
                    <div>
                      <h3 className="font-sans text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 4. About Me Block (Profile Picture Click) */}
                {activeModal === "about" && (
                  <div 
                    className="border-3 border-foreground p-6 md:p-8 bg-background flex flex-col gap-6"
                    style={{ boxShadow: "4px 4px 0px 0px #1A1A1A" }}
                  >
                    <div className="prose prose-lg max-w-none font-mono text-foreground leading-relaxed">
                      <p className="mb-6 font-sans text-xl md:text-2xl font-bold">
                        <span className="bg-foreground text-background px-2 py-1">I've been editing since I was 11 years old.</span>
                      </p>
                      
                      <p className="mb-4">
                        What started as a childhood obsession quickly turned into a lifelong passion. Even though I went down the academic path of Computer Science for university, I never put the camera down. I've constantly meddled with side projects, building communities, and producing content parallel to my rigorous CS studies.
                      </p>
                      
                      <p className="mb-4">
                        Now at <strong>21</strong>, I'm bridging the gap between tech and creative. As a CS student, my technical literacy runs deep—I've been actively using and studying LLMs and AI workflows since ChatGPT dropped in 2022. I don't just use tools; I understand how they work under the hood.
                      </p>
                      
                      <p className="font-sans font-bold text-lg border-l-4 border-foreground pl-4 mt-8">
                        I'm bringing this unique blend of self-taught creative grit and formal technical architecture into the industry to build digital experiences that actually matter.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
