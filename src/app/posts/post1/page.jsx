import Image from "next/image";
import Link from "next/link";

export default function Post1() {
  return (
    <div>
        <h1>POST - 1</h1>
        <div>
            <figure>
             <Image src="/img/dog1.jpg" alt="dog1" width={350} height={250}/>
             <figcaption>
                <Link  href="/">Voltar</Link>
            </figcaption>  
            </figure>
        </div>
    </div>
  )
}
