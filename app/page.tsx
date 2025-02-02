import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main>
      <div>
        <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
          <GridOption
            title="Motherboard"
            searchTerm="motherboard"
            image="/pc-parts/motherboard.png"
            className="bg-green-100 col-span-2 row-span-3"
          />
          <GridOption
            title="Graphics Card"
            searchTerm="graphics card" 
            //image="https://imgur.com/AUTOHVw"  
            image="/pc-parts/graphics-card.jpg"  
            className="bg-red-100 h-64 col-span-1"
          />
          <GridOption
            title="CPU" 
            searchTerm="processor"
            // image="https://imgur.com/Dh7KwQ9"              
            image="/pc-parts/processor.png" 
            className="bg-orange-100 h-64 col-span-2 row-span-2"
          />
          <GridOption
            title="RAM"
            searchTerm="ram"
            image="/pc-parts/ram.png"  
            //image="https://imgur.com/nSVO8Al"
            className="bg-red-100 col-span-2 row-span-2"
          />
          <GridOption
            title="Power Supply"
            searchTerm="power supply"
            image="/pc-parts/power.png"  
            // image="https://imgur.com/0l5n9P1"
            className="bg-yellow-100 h-64 col-span-1"
          />
          <GridOption
            title="SSD"
            searchTerm="ssd"
            image="/pc-parts/ssd.png"  
            //image="https://imgur.com/AMArYXc"
            className="bg-red-100 h-64 col-span-1"
          />
          <GridOption
            title="CPU case"
            searchTerm="cabinet"
            image="/pc-parts/case.jpg"  
            //image="https://imgur.com/fbe7pbO"
            className="bg-orange-100 col-span-1 h-64"
          />
          <GridOption
            title="Monitors"
            searchTerm="monitor"
            image="https://picsum.photos/id/1/200/300"  
            //image="https://imgur.com/4TO19ck"
            className="bg-pink-100 h-64 col-span-1"
          />
          <GridOption
          title="Cooling solutions"
          searchTerm="cpu cooler"
          image="/pc-parts/cooling.jpg"
          //image="https://imgur.com/6MREeBbg"
          className="bg-orange-100 col-span-1 h-64"
          />
        </div>
      </div>
    </main>
  );
}
