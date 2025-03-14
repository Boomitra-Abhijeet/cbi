"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import Certificate from "@/assets/certificate.png"
//console.log(cko)
export default function ThankYou() {


  return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left section with background image */}
        <Image
              src={Certificate}
              alt="Aerial view of agricultural fields"
              className="m-auto w-270 h-160"
              priority
            />
    </div>
  )
}

// export async function getServerSideProps(context) {
//   // Access query parameter from context.query
//   const { name } = context.query

//   // If `name` exists, return it as a prop
//   return {
//     props: {
//       name: name || 'Guest', // Provide a fallback in case no `name` is passed
//     },
//   }
// }


function ImpactCard({ image, number, label }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-xl overflow-hidden">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={label} fill className="object-cover" />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-2xl font-bold">{number}</h3>
        <p className="text-sm">{label}</p>
      </div>
    </div>
  )
}

