import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'NeverMissHealth - Personalized Cancer Screening Reminders',
  description: 'Get personalized cancer screening reminders based on your age, gender, and risk factors. Early detection saves lives.',
};

export default function Home() {
  // Redirect to the blog page
  redirect('/blog');
  
  // This part won't be executed due to the redirect
  return null;
}
