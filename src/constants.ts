import { TourPackage, Testimonial, GalleryImage } from './types';

export const CONTACT_INFO = {
  name: "Sanjay Tour & Travels",
  phones: ["9467137923", "8003016422"],
  address: "E672, New Palam Vihar, Phase 2, Sec 112, Gurgaon 122017",
  whatsapp: "919467137923",
  email: "sy5377310@gmail.com",
};

export const POPULAR_ROUTES = [
  "Whole Delhi NCR",
  "Delhi → Jaipur",
  "Delhi/Jaipur → Agra & Mathura",
  "Delhi/Jaipur → Haridwar",
  "Delhi/Jaipur → Chandigarh",
  "Delhi/Jaipur → Himachal all heritage sites",
  "Delhi/Jaipur → Uttrakhand adventures",
  "Delhi/Jaipur → Whole Rajasthan"
];
export const CARS = [
  "Toyota Fortuner",
  "Toyota Innova ",
  "HYundai Aura"
];
export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "1",
    title: "Himachal Tour Package",
    description: "Scenic trips from Delhi & Jaipur to DevBhoomi Himachal. Experience the mountains in our premium Cars.",
    image: "/himachal.png",
    features: [
     "Shimla & Kufri Tour",
    "Manali & Solang Valley",
    "Dharamshala & McLeod Ganj",
    "Mountain Driving Expert Driver",
      "Luxury SUV"
    ]
  },
  {
    id: "2",
    title: "Uttarakhand Popular Places",
    description: "Explore Rishikesh, Haridwar, and Mussoorie. Comfortable journeys from Delhi and Jaipur.",
    image: "/uttrakhand.png",
    features: [
      "Nainital & Mussoorie",
      "Professional Service",
      "Safe Hill Driving",
      "24/7 Support"
    ]
  },
  {
  id: "3",
  title: "Char Dham Yatra",
  description: "Embark on the sacred Char Dham pilgrimage visiting Yamunotri, Gangotri, Kedarnath, and Badrinath. Travel safely and comfortably with our experienced drivers.",
  image: "/chardham.png",
  features: [
    "Yamunotri Darshan",
    "Gangotri Temple Visit",
    "Kedarnath Ji Pilgrimage",
    "Badrinath Temple Darshan",
    "Experienced Hill Drivers"
  ]
},
  {
  id: "4",
  title: "Agra, Varanasi, Lucknow, Vrindavan, Ayodhya & Mathura Heritage",
  description: "Experience a spiritual and cultural journey across North India. Visit the iconic Taj Mahal in Agra, the holy ghats of Varanasi, the historic charm of Lucknow, and the sacred temples of Vrindavan, Ayodhya, and Mathura with our comfortable travel service.",
  image: "/up.png",
  features: [
    "Taj Mahal & Agra Fort Visit",
    "Varanasi Ganga Aarti Experience",
    "Ayodhya Ram Mandir Darshan",
    "Mathura & Vrindavan Temple Tour",
    "Lucknow Heritage Sightseeing",
    "Comfortable Sedan / SUV Travel"
  ]
},
  {
    id: "5",
    title: "Complete Rajasthan Tour",
    description: "Explore the royal heritage of Rajasthan including Jaipur, Udaipur, Jodhpur and Jaisalmer with comfortable travel.",
    image: "/raj.png",
    features: [
      "Jaipur City Tour",
      "Udaipur Lakes",
      "Jodhpur & Jaisalmer Visit",
      "Comfortable Long Distance Travel"
    ]
  },

  {
    id: "6",
    title: "Chandigarh Tour",
    description: "Visit the beautiful city of Chandigarh and explore popular places across Punjab with safe and comfortable travel.",
    image: "/Chandigarh.png",
    features: [
      "Chandigarh City Tour",
      "Rock Garden & Sukhna Lake",
      "Punjab Sightseeing",
      "Professional Driver Service"
    ]
  },
  {
  id: "7",
  title: "Delhi NCR Complete City Tour",
  description: "Explore the entire Delhi NCR region including Delhi, Gurgaon, Faridabad, Noida, and Ghaziabad. Visit famous monuments, temples, shopping markets, and modern city attractions with our comfortable and reliable car rental service.",
  image: "/Delhi NCR.png",
  features: [
    "Delhi Sightseeing (India Gate, Red Fort, Qutub Minar)",
    "Akshardham & Lotus Temple Visit",
    "Gurgaon & Cyber City Tour",
    "Faridabad & Surajkund Area Visit",
    "Noida Film City & Shopping Malls",
    "Comfortable Travel with Driver"
  ]
}
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    location: "Gurgaon",
    text: "Excellent service! The Innova Crysta was spotless and the driver was very professional. Highly recommended for family trips.",
    rating: 5
  },
  {
    id: "2",
    name: "Anjali Gupta",
    location: "Delhi",
    text: "Booked a Fortuner for our trip to Manali. The vehicle was in great condition and handled the mountain roads perfectly.",
    rating: 5
  },
  {
    id: "3",
    name: "Vikram Singh",
    location: "Jaipur",
    text: "Very reliable and punctual. Sanjay Tour & Travels made our Rajasthan tour very comfortable and memorable.",
    rating: 4
  }
];
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    url: "/fortuner.jpeg",
    alt: "Toyota Fortuner - Premium SUV"
  },
  {
    id: "2",
    url: "/innova(1).jpeg",
    alt: "Toyota Innova Crysta"
  },
  {
    id: "3",
    url: "/innova(2).jpeg",
    alt: "Toyota Innova Crysta"
  },
  {
    id: "4",
    url: "/aura.jpeg",
    alt: "Hyundai Aura - Comfortable Sedan"
  }
];