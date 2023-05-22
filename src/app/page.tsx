import Link from "next/link";
import Image from 'next/image';

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/KevStar9-1/Prueba1');
  const data = await res.json();
  return (
    <div>      
      <h1>Hello world</h1>
      <h2>{data.id}</h2>
      <h3>{data.owner.avatar_url}</h3>
      <Image  
        src={data.owner.avatar_url}
        width={500}
        height={500}
        alt="Picture of the author"
        unoptimized
      />
    </div>
  );
}
