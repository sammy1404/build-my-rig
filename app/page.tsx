import GridOption from "@/components/GridOption";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
          <GridOption
            title="Motherboard"
            image="https://imgur.com/6MREeBbg"
            className="bg-green-100 col-span-3 row-span-3"
          />
          <GridOption
            title="Graphics Card"
            image="https://imgur.com/AUTOHVw"  
            className="bg-red-100 h-64 col-span-2"
          />
          <GridOption
            title="CPU"
            image="https://imgur.com/Dh7KwQ9"
            className="bg-orange-100 h-64 col-span-2"
          />
          <GridOption
            title="RAM"
            image="https://imgur.com/nSVO8Al"
            className="bg-red-100 col-span-2 row-span-3"
          />
          <GridOption
            title="Power Supply"
            image="https://imgur.com/0l5n9P1"
            className="bg-yellow-100 h-64 col-span-1"
          />
          <GridOption
            title="SSD"
            image="https://imgur.com/AMArYXc"
            className="bg-red-100 h-64 col-span-1"
          />
          <GridOption
            title="CPU case"
            image="https://imgur.com/fbe7pbO"
            className="bg-orange-100 col-span-1 h-64"
          />
          <GridOption
            title="Cooling Solutions"
            image="https://imgur.com/4TO19ck"
            className="bg-pink-100 h-64 col-span-2"
          />
        </div>
      </div>
    </main>
  );
}
