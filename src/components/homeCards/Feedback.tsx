import { CardSwipe } from "@/components/ui/card-swipe"


export default function BasicExample() {
  const images = [
    { src: "/images/student1.png", alt: "img1" },
    { src: "/images/student2.png", alt: "img2" },
    { src: "/images/stud3.png", alt: "img3" },
    { src: "/images/stud4.png", alt: "img4" },
    { src: "/images/stud5.png", alt: "img5" },
    { src: "/images/stud6.png", alt: "img6" },
    { src: "/images/stud7.png", alt: "img7" },
    { src: "/images/stud8.png", alt: "img8" },
  ];
  return (
     <div className="w-full my-10 bg-background text-foreground p-6 rounded-lg  ">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  );
}
