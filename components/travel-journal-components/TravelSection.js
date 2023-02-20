import Image from "next/image";
import marker from "../../public/images/map-marker.png"

function TravelSection(props) {
  return (
    <div>
      {/*
      <Image
        src={props.item.imageUrl}
        alt="landscape"
        width={200}
        height={400} />
      */}
      <div>
        <div>
          <Image
            src={props.item.imageUrl}
            alt="landscape"
            width={400}
            height={400} />
        </div>
        <div>
          <p>
            <span>
              <Image src={marker} alt="map marker" />
            </span>&nbsp;
            {props.item.location.toUpperCase()}
            <span>
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </span>
          </p>
          <h2>{props.item.title}</h2>
          <b>
            <span>{props.item.startDate}</span>
            &nbsp;-
            <span>{props.item.endDate}</span>
          </b>
          <p>
            {props.item.description}
          </p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default TravelSection;