"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Logan",
    avatar: "L",
    title: "Software Engineer",
    description: "Create amazing code in minutes with this hassle-free app!",
  },
  {
    name: "Alexandre",
    avatar: "A",
    title: "Designer",
    description: "Capture the perfect moment with this video and photo generator!",
  },
  {
    name: "Huzaifa",
    avatar: "H",
    title: "CEO",
    description: "Unleash your creativity and innovation with Genius and make smart decisions!",
  },
  {
    name: "Benjamin",
    avatar: "B",
    title: "CFO",
    description: "Genius gives you the best possible financial advice and helps in every way!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}