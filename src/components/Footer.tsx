
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
            <div>
            <h2 className="text-lg text-white mb-5">About Us</h2>
                <div className="flex flex-col">
                    <a href="#" className="hover:text-white">Photography</a>
                    <a href="#" className="hover:text-white">Expore</a>
                    <a href="#" className="hover:text-white">The art and design</a>
                    <a href="#" className="hover:text-white">Follow Your dream</a>
                </div>
            </div>
            
            <div>
            <h2 className="text-lg text-white mb-5">Quick Link</h2>
                <div className="flex flex-col">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Nature</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>
            </div>

            <div>
                <h2 className="text-lg text-white mb-5">Follow Us</h2>
                <div className="flex flex-col">
                    <a href="https://www.facebook.com/ranajit.dey.5249/" className="hover:text-white">FaceBook</a>
                    <a href="https://www.instagram.com/ranajit_dey_2005/" className="hover:text-white">Instagram</a>
                    <a href="https://www.linkedin.com/in/ranajit-dey-173314257/" className="hover:text-white">Linkdin</a>
                </div>
            </div>
            <div>
            <h2 className="text-lg text-white mb-5">Contact Us</h2>
                <div className="flex flex-col">
                    <p>New Delhi, India</p>
                    <p>Delhi 741302</p>
                    <p>Email:18ranajit2005@gmail.com</p>
                    <p>Phone: 1234567890</p>
                </div>
            </div>
        </div>
        <div className="text-center mt-10">
            <p>© 2024 Tech Innovations Inc</p>
        </div>
    </footer>
  )
}