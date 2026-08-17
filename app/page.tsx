import Gate from "@/components/Gate";
import Nav from "@/components/Nav";
import Letter from "@/components/Letter";
import Quotes from "@/components/Quotes";
import Library from "@/components/Library";
import Lessons from "@/components/Lessons";
import Vault from "@/components/Vault";
// import Footer from "@/components/Footer";
import { getLibrary, getLessons } from "@/lib/airtable";

export const revalidate = 60;

export default async function Home() {
  const [library, lessons] = await Promise.all([getLibrary(), getLessons()]);

  return (
    <Gate>
      <main className="relative">
        <Nav />
        <Letter />
        <Quotes />
        <Library items={library} />
        <Lessons items={lessons} />
        {/* <Vault /> */}
        {/* <Footer /> */}
      </main>
    </Gate>
  );
}
