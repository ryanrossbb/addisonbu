import Gate from "@/components/Gate";
import Nav from "@/components/Nav";
import Letter from "@/components/Letter";
import Quotes from "@/components/Quotes";
import Library from "@/components/Library";
import Lessons from "@/components/Lessons";
import Vault from "@/components/Vault";
import Footer from "@/components/Footer";
import { getLibrary } from "@/lib/airtable";

// Revalidate the page every 60 seconds. New Airtable items show up within a minute.
export const revalidate = 60;

export default async function Home() {
  const library = await getLibrary();

  return (
    <Gate>
      <main className="relative">
        <Nav />
        <Letter />
        <Quotes />
        <Library items={library} />
        <Lessons />
        <Vault />
        <Footer />
      </main>
    </Gate>
  );
}
