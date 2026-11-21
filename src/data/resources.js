
export const resources = [
  //Learning Commons
  {
    id: 1,
    name: "Library & Learning Commons",
    description: "Library services, tutoring, writing support, study rooms, and research assistance.",
    keywords: ["library", "books", "research", "study rooms", "printing"],
    location: "201 Morgan Road",
    category: "Academics",
    hours: "Sun-Sun 7 am-12 am",
    building: "Learning Commons",
    image: "/src/assets/marywood-library.jpg"

  },
  {
    id: 2,
    name: "Tutoring Center",
    description: "Study spaces, books, research help",
    keywords: ["tutoring", "help", "academic support", "research"],
    category: "Academics",
    hours: "Mon-Fri 8:30 am-4:30 pm",
    building: "Learning Commons",
    image: "/src/assets/marywood-learning-commons-top.jpg"
  },
  {
    id: 3,
    name: "Podcast Studio",
    description: "Studio within the Multimedia Communication Department dedicated to support high-quality audio production, storytelling and digital content creation.",
    keywords: ["podcast", "audio", "recording", "digital content"],
    category:"Multimedia",
    building: "Learning Commons",
    image: "/src/assets/podcast.JPG"
  },
  {
    id: 4,
    name: "VMFM 91.7 Radio Station",
    description: "Marywood Univerity's student run radio station, on air 24/7 and streaming online",
    keywords: ["radio", "music", "streaming", "student run", "vmfm", "broadcasting"],
    category:"Multimedia",
    building: "Learning Commons",
    image: "/src/assets/radiostation.jpg"
  },
  {
    id: 5,
    name: "TV-Marywood",
    description: "Tv studio that supports education and co-curricular activites in TV and Film production.",
    keywords: ["tv", "film", "production", "broadcasting", "student run"],
    category:"Multimedia",
    building: "Learning Commons",
    image: "/src/assets/tv.jpg"
  },

  //Naz
  {
    id:  6,
    name: "Nazareth Student Center",
    description: "Student center with dining, meeting spaces, and student services",
    keywords: ["student center", "dining", "meeting spaces", "student services", "hangout", "main dining hall"],
    category: "Student Center",
    building: "Nazareth Student Center",
    image: "/src/assets/marywood-nazareth-student-center.jpg"
  },
  {
    id: 25,
    name: "Main Dining Hall",
    description: "Main dining hall with a variety of food options",
    keywords: ["dining hall", "food", "cafeteria", "meal plan", "eating options"],
    hours: "Vary throughout the week",
    category: "Dining",
    building: "Main Dining Hall",
    image: "/src/assets/main.jpg"
  },
  {
    id:26,
    name:"Bar None",
    description: "Newly opened spot for food and drinks ",
    keywords: ["bar", "food", "drinks", "hangout", "hangout spot"],
    hours: "Restaurant Hours: M,TH,F-11:00 am - 11:30 pm  | T,W- Closed  | Weekends: 11:00am - 10:00 pm || Bar Hours: M,TH,F- 4:30 pm - 11:30 pm  | T,W- Closed  | Weekends: 11:00am - 10:00 pm ",
    category: "Dining",
    building: "Nazareth Student Center",
    image: "/src/assets/bar.jpg"
  },
  {  
    id: 27,
    name:"Latour Room",
    description: "Multipurpose room used for meetings, presentations and events ",
    keywords: ["meeting room", "presentation space", "event venue"],
    category: "Academics",
    building: "Nazareth Student Center",
    image: "/src/assets/latour.jpeg"
  },
 

  //Athletics building
  {
    id: 7,
    name: "Center for Athletics and Wellness",
    description: "Gym, fitness center, and athletic facilities",
    keywords: ["gym", "fitness", "athletic facilities", "exercise", "wellness", "sports", "caw"],
    category: "Athletics",
    hours: "Varies",
    building: "Center for Athletics and Wellness",
    image: "/src/assets/marywood-athletics-and-wellness-center.jpg"
  },
  {
    id:8,
    name: "Exercise Science Lab",
    description: "Lab equipped to conduct a wide range of physiologcal measurements and complete physiological and biological research. ",
    keywords: ["lab", "research", "physiology", "exercise science"],
    category: "Academics",
    building:"Center for Athletics and Wellness",
    image: "/src/assets/excercisescience.jpg"
  },
  {
    id:9,
    name: "Fitness Center",
    description: "A great place to get a workout or two in! available for use by Marywood students, faculty, staff, and administration ",
    keywords: ["fitness", "workout", "gym", "exercise", "wellness", "lifting", "cardio"],
    hours: "Monday through Thursday:  9:00am-7:00pm ",
    category: "Athletics",
    building:"Center for Athletics and Wellness",
    image: "/src/assets/gym.jpg"
  },
  //Insalaco
  {
    id: 10 ,
    name: "Insalaco Center for Studio Arts",
    description: "Home of the Art Department. Houses the Kresge, Mahady and Suraci Galleries and studios for various art types.",
    keywords: ["art", "studio", "galleries", "creative space"],
    category: "Arts",
    hours: "Varies",
    building: "Insalaco Center for Studio Arts",
    image: "src/assets/marywood-insalaco-studio-arts-center.jpg"
  },
  
//McGowan
{
    id: 11,
    name: "McGowan Center for Graduate and Professional Studies",
    description:"Building which contains classrooms and related clinical and professional spaces for Communication Sciences and Disorders, Psychology and Counseling, and Education students ",
    keywords: ["mcgowan", "counseling", "classrooms", "clinical", "professional development"],
    category: "Academics",
    building:"McGowan Center for Graduate and Professional Studies",
    image:"/src/assets/marywood-mcgowan-center-graduate-professional-studies.jpg"
  },
  {
     id: 12 ,
    name: "Psychological Services Center",
    description: "Clinic and training facility which cerves as an outpatient mental health clinic to provide services to individuals. NOTE: The Psychological Services Center is not able to provide emergency services. If you have a life threatening emergency, please go directly to your nearest emergency room or dial 911. ",
    keywords: ["psychology", "counseling", "mental health", "outpatient", "therapy"],
    category: "Support",
    hours: "8:30 a.m. - 4:30 p.m. | Evening hours by appointment",
    contactEmail: "wellbeing@marywood.edu",
    contactNumber: "570-348-6245",
    building: "McGowan Center for Graduate and Professional Studies",
    image: "/src/assets/PSc.jpg"
  },

  //LAC
  {
    id: 13,
    name: "Liberal Arts Center",
    description: "One of Marywood's oldest buildings which provides classroom spaces for various programs and departments, including the Registrar's Office and Financial Aid Office.",
    keywords: ["liberal arts", "classrooms", "academic programs", "lac"],
    category: "Academics",
    building: "Liberal Arts Center",
    image: "/src/assets/marywood-liberal-arts-center.jpg",
  },
  {
    id:14,
    name: "Registrar's Office",
    description: "Course registration, transcripts, academic records, and graduation processing",
    keywords: ["registrar", "course registration", "transcripts", "academic records", "graduation","add/drop classes", "academic advising", "scheduling"],
    category: "Administration",
    hours: "Mon-Fri 8:30 am-4:30 pm",
    contactEmail: "registrar@marywood.edu",
    contactNumber: "570-348-6280",
    building: "Liberal Arts Center",
    image: "/src/assets/marywood-registrar-office.jpg"
  },
  {
    id: 15 ,
    name: "Financial Aid Office",
    description: "Financial aid information and assistance",
    keywords: ["financial aid", "loans", "fafsa", "scholarships", "tuition", "money","assistance"],
    category: "Administration",
    hours: "Mon-Fri 8:30 am-4:30 pm",
    contactEmail: "finaid@marywood.edu",
    contactNumber: "570-348-6225",
    building: "Liberal Arts Center",
    image: "/src/assets/marywood-financial-aid-office.jpg"
  },
  {
    id: 16,
    name:"Admissions Office",  
    description: "Office assisting future students with the admission process and any questions regarding Marywood Univeristy",
    keywords: ["admissions", "future students", "application process", "questions", "tours", "visits", "information"],
    category: "Administration",
    hours: "Mon-Fri 8:30 am-4:30 pm",
    contactEmail:"YourFuture@marywood.edu",
    contactNumber: "570-348-6234",
    building: "Liberal Arts Center",
    image: "/src/assets/marywood-admissions-office.jpg"
  },

   //Campus Safety
  {
    id: 17,
    name: "Campus Safety & Security",
    description: "Campus safety and security services",
    keywords: ["campus safety", "security", "emergency services"],
    category: "Support",
    hours: "24/7",
    building: "Campus Safety",
    contactNumber: "570-348-6242",
    image: "/src/assets/marywood-campus-safety.JPG"
  },
  
  //Shields Center for Visual Arts
  {
    id: 18,
    name: "Shields Center for Visual Arts",
    description: "Contains art galleries, studios and classrooms for art programs",
    keywords: ["visual arts", "art galleries", "studios", "classrooms"],
    category: "Arts",
    building: "Shields Center for Visual Arts",
    image: "/src/assets/marywood-shields-visual-arts-center.jpg"
  },
 
  //Center of Architectural Studies
  {
    id: 19,
    name: "Center of Architectural Studies",
    description: "State-of-the-art facilities for architectural education and research",
    keywords: ["architecture", "education", "research", "facilities"],
    category: "Academics",
    building: "Center of Architectural Studies",
    image: "/src/assets/marywood-architectural-studies-center.jpg"
  },

  // oneill Health Center
  {
    id: 20,
    name: "O'Neill Center for Healthy Families",
    description: "Provides classroom and research space for academic programs. Students from Nursing, Nutrition and Dietetics, Exercise Science, Respiratory Therapy, and Physician Assistant programs have classes in this building. ",
    keywords: ["nursing", "health", "nutrition", "pa program", "classroom", "research", "academic programs", "healthcare"],
    category: "Academics",
    building: "O'Neill Center for Healthy Families",
    image: "/src/assets/marywood-oneill-healthy-families-center.jpg"
  },

  //Preforming Arts Center - sette = theater 
  {
    id: 21 ,
    name: "Sette LaVerghetta Center for Performing Arts",
    description: "Hosts various performing arts activities including theater productions, concerts, and dance performances. Also includes classrooms and private practice rooms for students",
    keywords: ["performing arts", "theater", "concerts", "dance", "classrooms", "practice rooms"],
    category: "Arts",
    building: "Sette LaVerghetta Center for Performing Arts",
    image: "/src/assets/marywood-sette-laverghetta-performing-arts-center.jpg"
  },
  {
    id: 22,
    name: "Sette Laverghetta Center Theatre",
    description: "Main stage theater and concert hall for all University related events",
    keywords: ["theater", "concert hall", "university events"],
    category: "Arts",
    building: "Sette LaVerghetta Center for Performing Arts",
    image: "/src/assets/theater.jpg"
  },
  //Center of Natural and Health Sciences
  {
    id: 23,
    name: "Center of Natural and Health Sciences- CNHS",
    description: "Contains various science labratories, computer labs and various classrooms.",
    keywords: ["natural sciences", "health sciences", "laboratories", "computer labs", "classrooms","science", "cnhs", "biology", "chemistry", "labs"],
    category: "Academics",
    building: "Center of Natural and Health Sciences",
    image: "/src/assets/marywood-science-center.jpg"
  },

  //IHM
  {
    id: 24,
    name: "IHM Center",
    description: "Vibrant hub of activity and community while housing IHM sisters, a chapel, offices and meeting spaces",
    keywords: ["IHM", "sisters", "chapel", "offices", "meeting spaces"],
    category: "Support",
    building: "IHM Center",
    image: "/src/assets/marywood-ihm-center.jpg"
  }

];
