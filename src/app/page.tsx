import First from "../components/First";
import Second from "../components/Second"
import Third from "../components/Third"
// import Footer from "../components/Footer"

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

        {/* <h1 className="text-center text-2xl">Ranajit</h1> */}
        <First/>
        <Second/>
        <Third/>
        {/* <Footer/> */}

      </main>
      
  );
}
