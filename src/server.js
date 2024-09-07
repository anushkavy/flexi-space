import { createServer, Model } from "miragejs";
import { Response } from "miragejs";

createServer({
  models: {
    spaces: Model,
  },

  seeds(server) {
    server.create("space", {
      id: "1",
      title: "Bright Urban Loft",
      price: 50,
      description:
        "A spacious and modern loft with large windows, perfect for photo shoots and video content.",
      imageUrl:
        "https://images.pexels.com/photos/6044445/pexels-photo-6044445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Fully Furnished",
      address: "123 Maple St, New York, NY 10001",
      available: true,
      availabilityTimings: "8 AM - 8 PM",
      amenities: ["Wi-Fi", "Lighting Equipment", "Props"],
      size: "1200 sq ft",
      capacity: 10,
      rules: ["No loud music after 6 PM", "No smoking"],
      parking: "Street parking available",
      accessibility: "Wheelchair accessible",
      rating: 4.8,
      hostId: "123",
    });

    server.create("space", {
      id: "2",
      title: "Cozy Creative Studio",
      price: 35,
      description:
        "A small, cozy studio perfect for intimate photo shoots and content creation.",
      imageUrl:
        "https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Lightly Decorated",
      address: "456 Elm St, Los Angeles, CA 90001",
      available: true,
      availabilityTimings: "9 AM - 6 PM",
      amenities: ["Wi-Fi", "Basic Lighting"],
      size: "600 sq ft",
      capacity: 4,
      rules: ["No food or drinks"],
      parking: "Private parking lot",
      accessibility: "Not wheelchair accessible",
      rating: 4.5,
      hostId: "123",
    });

    server.create("space", {
      id: "3",
      title: "Modern Minimalist Space",
      price: 45,
      description:
        "A clean, minimalist space ideal for modern content creation with a focus on simplicity.",
      imageUrl:
        "https://images.pexels.com/photos/112474/pexels-photo-112474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Semi Furnished",
      address: "789 Oak St, San Francisco, CA 94102",
      available: false,
      availabilityTimings: "10 AM - 5 PM",
      amenities: ["Wi-Fi", "Natural Light"],
      size: "800 sq ft",
      capacity: 6,
      rules: ["Shoes off inside", "No pets"],
      parking: "Street parking only",
      accessibility: "Wheelchair accessible",
      rating: 4.7,
      hostId: "456",
    });

    server.create("space", {
      id: "4",
      title: "Rustic Outdoor Setting",
      price: 60,
      description:
        "An outdoor setting with a rustic vibe, perfect for nature-themed content creation.",
      imageUrl:
        "https://images.pexels.com/photos/27854317/pexels-photo-27854317/free-photo-of-a-row-of-boats-on-a-dock-next-to-a-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Naturally Decorated",
      address: "321 Pine Rd, Austin, TX 78701",
      available: true,
      availabilityTimings: "7 AM - 7 PM",
      amenities: ["Natural Light", "Wooden Props"],
      size: "1500 sq ft",
      capacity: 15,
      rules: ["No loud noises", "Leave no trace"],
      parking: "On-site parking available",
      accessibility: "Partially accessible",
      rating: 4.9,
      hostId: "123",
    });

    server.create("space", {
      id: "5",
      title: "Chic Downtown Loft",
      price: 55,
      description:
        "A chic loft in the heart of downtown, great for high-end content creation.",
      imageUrl:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Lightly Decorated",
      address: "654 Cedar St, Chicago, IL 60601",
      available: false,
      availabilityTimings: "8 AM - 10 PM",
      amenities: ["Wi-Fi", "Professional Lighting", "Stylish Furniture"],
      size: "1100 sq ft",
      capacity: 8,
      rules: ["No smoking", "No pets"],
      parking: "Paid garage nearby",
      accessibility: "Wheelchair accessible",
      rating: 4.8,
      hostId: "123",
    });

    server.create("space", {
      id: "6",
      title: "Industrial Warehouse",
      price: 70,
      description:
        "A large industrial warehouse with an urban feel, ideal for edgy content creation.",
      imageUrl:
        "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Raw Space",
      address: "987 Iron St, Detroit, MI 48201",
      available: true,
      availabilityTimings: "6 AM - 9 PM",
      amenities: ["Wi-Fi", "Exposed Brick", "High Ceilings"],
      size: "2000 sq ft",
      capacity: 20,
      rules: ["No painting on walls", "No drilling"],
      parking: "On-site parking available",
      accessibility: "Not wheelchair accessible",
      rating: 4.6,
      hostId: "789",
    });

    server.create("space", {
      id: "7",
      title: "Artistic Rooftop Terrace",
      price: 65,
      description:
        "A rooftop terrace with a view, perfect for artistic and scenic content.",
      imageUrl:
        "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Semi Furnished",
      address: "159 Skyway Dr, Miami, FL 33101",
      available: true,
      availabilityTimings: "5 AM - 8 PM",
      amenities: ["Wi-Fi", "Scenic Views", "Outdoor Furniture"],
      size: "900 sq ft",
      capacity: 12,
      rules: ["No glass items", "No fireworks"],
      parking: "Street parking available",
      accessibility: "Not wheelchair accessible",
      rating: 4.7,
      hostId: "123",
    });

    server.create("space", {
      id: "8",
      title: "Vintage Library Room",
      price: 40,
      description:
        "A vintage-style library room with classic decor, great for content with a historic touch.",
      imageUrl:
        "https://images.pexels.com/photos/4100769/pexels-photo-4100769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Fully Furnished",
      address: "246 Book Ln, Boston, MA 02108",
      available: true,
      availabilityTimings: "9 AM - 5 PM",
      amenities: ["Wi-Fi", "Vintage Furniture", "Bookshelves"],
      size: "700 sq ft",
      capacity: 5,
      rules: ["Handle books with care", "No food or drinks"],
      parking: "Paid parking nearby",
      accessibility: "Wheelchair accessible",
      rating: 4.9,
      hostId: "123",
    });

    server.create("space", {
      id: "9",
      title: "Modern Office Space",
      price: 45,
      description:
        "A sleek, modern office space ideal for professional content creation.",
      imageUrl:
        "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Fully Furnished",
      address: "753 Corporate Blvd, Seattle, WA 98101",
      available: true,
      availabilityTimings: "7 AM - 7 PM",
      amenities: ["Wi-Fi", "Office Furniture", "Conference Room"],
      size: "1000 sq ft",
      capacity: 10,
      rules: ["Keep noise levels down", "No pets"],
      parking: "On-site parking available",
      accessibility: "Wheelchair accessible",
      rating: 4.8,
      hostId: "456",
    });

    server.create("space", {
      id: "10",
      title: "Quirky Art Gallery",
      price: 55,
      description:
        "A quirky art gallery space full of character, perfect for unique and creative content.",
      imageUrl:
        "https://images.pexels.com/photos/19455912/pexels-photo-19455912/free-photo-of-a-room-with-statues-and-a-chandelier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "Artfully Decorated",
      address: "321 Gallery St, Portland, OR 97209",
      available: false,
      availabilityTimings: "10 AM - 6 PM",
      amenities: ["Wi-Fi", "Art Pieces", "Lighting"],
      size: "850 sq ft",
      capacity: 7,
      rules: ["No touching the art", "No flash photography"],
      parking: "Street parking available",
      accessibility: "Not wheelchair accessible",
      rating: 4.7,
      hostId: "123",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/spaces", (schema, request) => {
      // return new Response(400, {}, { errors: ["Error fetching data"] });
      return schema.spaces.all();
    });

    this.get("/spaces/:id", (schema, request) => {
      const id = request.params.id;
      // return new Response(400, {}, { errors: ["Error fetching data"] });
      return schema.spaces.find(id);
    });

    this.get("/rentOut/spaces", (schema, request) => {
      // Hard-code the hostId for now
      return schema.spaces.where({ hostId: "123" });
    });

    this.get("/rentOut/spaces/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.spaces.findBy({ id, hostId: "123" });
    });
  },
});
