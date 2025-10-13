interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string;
}

export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mani Bharathi',
      position: 'Engineer',
      content: 'Onfra revolutionized our workforce and visitor management. Its seamless registration, resource efficiency, and scalability boost productivity. Customization features could enhance its adaptability further.',
      img: '/uploads/2025/08/v3_0048938.webp'
    },
    {
      id: 2,
      name: 'Thameem Ansari',
      position: 'Manager',
      content: 'Onfra streamlines security management with robust tracking and access control. Real-time monitoring enhances safety protocols. AI integration for predictive insights could further preempt security threats and optimize operations.',
      img: '/uploads/2025/08/Thameem-Ansari-1.webp'
    },
    {
      id: 3,
      name: 'Skandha',
      position: 'Owner',
      content: 'Onfra enhances efficiency with its user-friendly interface and streamlined processes. Detailed reports offer valuable insights. Customizable options in reporting could deepen analytical capabilities, aiding strategic planning.',
      img: '/uploads/2024/05/Skandha.webp'
    },
    {
      id: 4,
      name: 'Imran Khan',
      position: 'Program Manager',
      content: 'Reliable, scalable solution. Manages multiple locations, flexible roles. Adaptable, consistent performance. Integration with HR, emergency response tools enhances functionality for a responsive workplace.',
      img: '/uploads/2025/08/Imran-Khan-1.webp'
    },
    {
      id: 5,
      name: 'Dr. Amir Khan',
      position: 'Operations Director',
      content: 'Onfra vital for healthcare facility operations. Enhances visitor management, patient privacy. Compliant with health regulations, discreet with sensitive information. Health-specific compliance tools and medical record system integration would enhance functionality.',
      img: '/uploads/2024/05/Dr.-Amir-Khan.webp'
    }
  ];
