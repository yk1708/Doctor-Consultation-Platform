import { Header } from "@/components/ui/landing/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { use, useEffect } from "react";

export default function Home() {
  const user = {
    type: 'doctor' // Possible values: 'doctor', 'patient', or null
  };
  const router = useRouter();

  useEffect(() => {
    if(user.type === 'doctor') {
      router.replace('/doctor/dashboard');
    }
  }, [user, router]); 

  if(user?.type === 'doctor') {
    return null;
  }
  return (
    <div className="min-h-screen bg-white">
      <Header showDashboardNav={false}  />

    </div>
  );
}
