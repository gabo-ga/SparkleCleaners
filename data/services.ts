import { Service } from "../types";

export const services: Service[] = [
    {
        id: 1,
      title: "House Cleaning",
      description: "Keep your home spotless and stress-free with our expert house cleaning services. Our professional team uses premium products and techniques to ensure your home shines from top to bottom.",
      features: ["Deep cleaning of all rooms and living spaces", "Dusting of all surfaces and fixtures", "Vacuuming and mopping of all floors", "Window sills and baseboard cleaning"],
      options: ["One-time deep clean","Regular maintenance"],
    },
    {
        id: 2,
      title: "Apartment Cleaning",
      description: "Enjoy a fresh, clean apartment tailored to your lifestyle. Our apartment cleaning services are designed to maximize your space and  create a comfortable living environment.",
      features: ["Studio to multi-bedroom", "Thorough cleaning of all rooms", "Floor cleaning and polishing", "Dust removal from all surfaces"],
      options: ["Move-in/Move-out"],
    },
    {
        id: 3,
      title: "Office Cleaning",
      description: "Maintain a productive, professional workspace effortlessly. Our office cleaning services ensure  your business environment remains clean, organized and impressive to clients and employees alike.",
      features: ["After-hours service", "Workstation and desk cleaning", "Conference room preparation", "Floor maintenance"],
      options: ["Daily maintenance", "Specialized sanitization"],
    },
    {
        id: 4,
      title: "Post Construction",
      description: "From dust to dazzling - we clean up after the build. Our post-construction cleaning services transform newly built or renovated spaces into move-in ready environments.",
      features: ["Removal of construction dust and debris", "Detailed cleaning of all surfaces", "Window and glass cleaning", "Floor scrubbing and polishing"],
      options: ["Residential construction", "Commercial projects"],
    }
  ];
