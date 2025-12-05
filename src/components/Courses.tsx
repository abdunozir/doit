import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Clock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import type { ReactNode } from "react";

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  students: string;
  rating: number;
  level: "Boshlang'ich" | "O'rta" | "Ilg'or";
  icon: ReactNode;
  features: string[];
  popular?: boolean;
}

const courses: Course[] = [
  {
    id: "web-development",
    title: "Full Stack Web Dasturlash",
    description:
      "React, Node.js va ma'lumotlar bazalari bilan zamonaviy web dasturlashni o'rganing. Haqiqiy loyihalarni noldan yarating.",
    price: "$299",
    duration: "12 hafta",
    students: "2,450",
    rating: 4.9,
    level: "O'rta",
    icon: <Globe className="size-6" />,
    features: [
      "React va Next.js ustunligi",
      "Node.js va Express backend",
      "Ma'lumotlar bazasi dizayni va boshqaruvi",
      "Haqiqiy loyihalar portfeli",
      "Ishga joylashishda yordam",
    ],
    popular: true,
  },
  {
    id: "mobile-development",
    title: "Mobil Ilova Dasturlash",
    description:
      "React Native va Flutter frameworklari yordamida iOS va Android uchun ajoyib mobil ilovalar yarating.",
    price: "$249",
    duration: "10 hafta",
    students: "1,800",
    rating: 4.8,
    level: "O'rta",
    icon: <Smartphone className="size-6" />,
    features: [
      "React Native asoslari",
      "Flutter dasturlash",
      "iOS va Android xususiyatlari",
      "App Store'ga joylashtirish",
      "UI/UX eng yaxshi amaliyotlar",
    ],
  },
  {
    id: "programming-fundamentals",
    title: "Dasturlash Asoslari",
    description:
      "Python, JavaScript asoslari va kompyuter fanlari bilan dasturlash yo'lingizni boshlang.",
    price: "$199",
    duration: "8 hafta",
    students: "3,200",
    rating: 4.7,
    level: "Boshlang'ich",
    icon: <Code2 className="size-6" />,
    features: [
      "Python va JavaScript asoslari",
      "Ma'lumotlar tuzilmalari va algoritmlar",
      "Masala yechish usullari",
      "Git bilan versiyani boshqarish",
      "Kod yozishning eng yaxshi amaliyotlari",
    ],
  },
  {
    id: "database-design",
    title: "Ma'lumotlar Bazasi Dizayni va Boshqaruvi",
    description:
      "Zamonaviy ilovalar va analitika uchun SQL, NoSQL ma'lumotlar bazalari va ma'lumotlar modellashtirish.",
    price: "$179",
    duration: "6 hafta",
    students: "1,450",
    rating: 4.6,
    level: "O'rta",
    icon: <Database className="size-6" />,
    features: [
      "SQL ustunligi va optimallashtirish",
      "MongoDB va NoSQL tushunchalari",
      "Ma'lumotlar bazasi dizayn namunalari",
      "Ma'lumotlarni ko'chirish strategiyalari",
      "Ishlash tezligini optimallashtirish",
    ],
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-zinc-50/50 py-16 md:py-24 dark:bg-background/50"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Mashhur Kurslar
          </Badge>
          <h2 className="text-balance text-4xl font-bold lg:text-5xl mb-4">
            Kurslarimiz bilan Karyerangizni O'zgartiring
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soha mutaxassislari tomonidan ishlab chiqilgan keng qamrovli, amaliy
            kurslar. Haqiqiy loyihalar yaratish orqali o'rganing va ish uchun
            tayyor ko'nikmalarni egallang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                course.popular
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : ""
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Eng Mashhur
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <CourseIconDecorator>{course.icon}</CourseIconDecorator>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="size-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {course.features.length > 3 && (
                    <p className="text-xs text-muted-foreground">
                      +{course.features.length - 3} ta qo'shimcha xususiyat
                    </p>
                  )}
                </div>

                {/* Price and Action */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">{course.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        bir martalik
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    variant={course.popular ? "default" : "outline"}
                  >
                    Hoziroq Ro'yxatdan O'ting
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Mukammal kurs topa olmayapsizmi? Biz maxsus o'quv dasturlarini
            taklif qilamiz.
          </p>
          <Button variant="outline" size="lg">
            Maxsus Kurs So'rang
          </Button>
        </div>
      </div>
    </section>
  );
}

const CourseIconDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative">
    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
      {children}
    </div>
  </div>
);
