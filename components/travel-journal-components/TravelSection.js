import Image from "next/image";
import marker from "../../public/images/map-marker.png"

function TravelSection(props) {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3">
        <div className="h-44 m-4 relative">
          <Image
            src={props.item.imageUrl}
            alt="landscape" 
            fill
            className="object-cover rounded-md" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between">
            <div className="flex">
            <div className="flex items-center mr-1">
              <Image src={marker} alt="map marker" />
            </div>
            <p>{props.item.location.toUpperCase()}</p>
            </div>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2 className="text-2xl font-black my-2">{props.item.title}</h2>
          <b>
            <span>{props.item.startDate}</span>
            &nbsp;-&nbsp;
            <span>{props.item.endDate}</span>
          </b>
          <p>
            {props.item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TravelSection;