import Head from "../../components/travel-journal-components/Head"
import TravelSection from "../../components/travel-journal-components/TravelSection"

const journalData = [
  {
      id: 0,
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
  },
  {
      id: 1,
      title: "Sydney Opera House",
      location: "AUSTRALIA",
      googleMapsUrl: "https://goo.gl/maps/SdomTYDP4KJqdGpt6",
      startDate: "27 May, 2021",
      endDate: "8 Jun, 2021",
      description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
      imageUrl: "https://source.unsplash.com/JmuyB_LibRo"
  },
  {
      id: 2,
      title: "Geirangerfjord",
      location: "NORWAY",
      googleMapsUrl: "https://goo.gl/maps/dX4oJzWhx9tTvwUX8",
      startDate: "01 Oct, 2021",
      endDate: "18 Nov, 2021",
      description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
      imageUrl: "https://source.unsplash.com/3PeSjpLVtLg"
  }
];

export default function travelJournal(){
  const travelSectionElements = journalData.map((journal) => {
    return (
      <TravelSection key={journal.id} item={journal} />
    )
  })
  return (
    <div className="m-5 p-5 bg-gray-500 rounded-lg flex justify-center">
      <div className="bg-white rounded-lg w-[650px]">
        <Head />
        <div className="p-10">
          {travelSectionElements}
        </div>
      </div>
    </div>
  )
}