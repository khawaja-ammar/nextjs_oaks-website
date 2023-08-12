import ContactPage from "@/components/ContactPage";
import MapComponent from "@/components/MapComponent";

export const metadata = {
  title: "Contact Us",
  description: "",
};

export default function Contact() {
  return (
    <>
      <ContactPage />
      <div className="sectionPadding py-20">
        <MapComponent />
      </div>
    </>
  );
}
