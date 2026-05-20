export const sessionKey = 'luke-wellness-chatbot-session';

export const welcomeMessage = "Hello, I’m Luke Coutinho. Welcome to Team Luke Wellness. How can I help you today?";

export const successMessage = 'Thank you. A Team Luke wellness advisor will contact you shortly.';

export const questions = [
  {
    label: 'What’s your primary wellness goal right now?',
    options: [
      'Weight Management',
      'Stress & Emotional Wellness',
      'Gut Health',
      'Lifestyle Conditions',
      'Energy & Sleep',
      'Preventive Wellness',
      'General Transformation'
    ]
  },
  {
    label: 'How long have you been facing this challenge?',
    options: [
      'Less than 3 months',
      '3–12 months',
      '1–3 years',
      'More than 3 years'
    ]
  },
  {
    label: 'Are you looking for personalized expert guidance?',
    options: ['Yes', 'Exploring options', 'Not sure yet']
  },
  {
    label: 'What type of support would you prefer?',
    options: ['1-on-1 Support', 'Group/Community Support', 'Not Sure Yet']
  },
  {
    label: 'What investment range are you comfortable with for your wellness journey?',
    options: ['Under ₹25,000', '₹25,000–₹1,00,000', '₹1,00,000+', 'Need More Information First']
  }
];
