import Image from "../assets/ImageProfile.jpeg";

export default function ImageProfile() {
  return (
    <div>
      <img
        src={Image}
        alt="Danilo Miranda"
        className="w-36 h-36 rounded-full border-2 border-primary"
      />
    </div>
  );
}
