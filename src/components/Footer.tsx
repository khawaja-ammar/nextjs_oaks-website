import Link from "next/link";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <section className="bg-primary py-10 text-white">
      <div className="sectionPadding mx-auto grid grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-1">
        <div className="flex flex-col justify-between border-b-2 border-green-800 border-opacity-30 py-10 md:border-b-0 md:border-r-2 md:px-10 md:py-0">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/products">Products</Link>
          <Link href="/customorder">Custom</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        <div className="flex flex-col border-y-2 border-green-800 border-opacity-30 py-10 md:border-x-2 md:border-y-0 md:px-10 md:py-0">
          <p>Oaks Packaging Limited </p>
          <p>Ferozepur Road,</p>
          <p>Masjid Ibrahim St, Green Cap Housing Scheme</p>
          <p>Lahore, Punjab 54760</p>
          <p>Pakistan</p>
          <p>Tel No: 0332-3004835</p>
        </div>

        <div className="flex flex-col gap-4 border-t-2 border-green-800 border-opacity-30 py-10 md:border-l-2 md:border-t-0 md:px-10 md:py-0">
          <h3 className="self-center">Follow us:</h3>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/oakspackaging/" target="_blank">
              <RiInstagramFill />
            </a>
            <a href="https://www.facebook.com/oakspackaging" target="_blank">
              <RiFacebookBoxFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
