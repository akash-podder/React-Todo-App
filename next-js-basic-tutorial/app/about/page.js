import Image from "next/image"
import cm_punk_best_in_the_world from "@/public/images/WWE_CM_Punk.png"

export default function AboutPage() {
  // throw new Error("There was a huge error")

  return (
    <div>
      About Page

      <Image placeholder="blur" src={cm_punk_best_in_the_world} alt="CM Punk Image"/>

    </div>
  );
}
