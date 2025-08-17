import React, {useState} from "react";
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // replace with your Formspree endpoint
export default function CanadaTradeHub(){
  const products = [
    { title: "Whole Red Lentils", subtitle: "50kg bags — Bagged", price: "Contact for Price", key: "red-lentils", img: "/images/red-lentils.jpg" },
    { title: "Large Green Lentils", subtitle: "50kg bags — Bagged", price: "Contact for Price", key: "green-lentils", img: "/images/green-lentils.jpg" },
    { title: "Canola (Seed & Oil)", subtitle: "Seed, Oil, Meal — Export", price: "Contact for Price", key: "canola", img: "/images/canola.jpg" },
    { title: "Durum Wheat", subtitle: "High-protein — Export Grade", price: "Contact for Price", key: "durum", img: "/images/durum-wheat.jpg" },
    { title: "High-Protein Wheat", subtitle: "Export Grade", price: "Contact for Price", key: "hp-wheat", img: "/images/durum-wheat.jpg" },
    { title: "Yellow Peas", subtitle: "Export Grade", price: "Contact for Price", key: "peas", img: "/images/peas.jpg" },
    { title: "Chickpeas", subtitle: "Export Grade", price: "Contact for Price", key: "chickpeas", img: "/images/chickpeas.jpg" }
  ];
  const [formData, setFormData] = useState({name:'',company:'',email:'',phone:'',message:'',subject:'Product Inquiry'});
  function handleQuote(product){
    window.location.hash = "#contact";
    setTimeout(()=>{
      const el = document.getElementById('message');
      if(el) el.value = `Requesting quote for: ${product.title}`;
    },200);
  }
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Canada Trade Hub" className="h-14 w-14 object-contain rounded" />
            <div>
              <h1 className="text-lg font-bold" style={{color:"var(--cth-red)"}}>Canada Trade Hub</h1>
              <p className="text-xs text-gray-600">Trusted Canadian Commodities Exporter</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-red-600">Products</a>
            <a href="#logistics" className="hover:text-red-600">Logistics</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#contact" className="px-4 py-2 bg-red-600 text-white rounded">Contact</a>
          </nav>
        </div>
      </header>
      <section className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{color:"var(--cth-red)"}}>Quality Canadian Grains & Pulses — Exported With Trust</h2>
          <p className="mt-4 text-gray-700">We source directly from farms, co-ops and processors across Saskatchewan, Alberta and Manitoba. Supplying bagged and bulk shipments to GCC, Pakistan, Afghanistan, and Central Asia.</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 bg-red-600 text-white rounded shadow">Request a Quote</a>
            <a href="#products" className="px-5 py-3 border border-gray-200 rounded">View Products</a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src="/images/hero-grain.jpg" alt="Canadian grain" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>
      <section id="products" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold" style={{color:"var(--cth-red)"}}>Products</h3>
        <p className="text-gray-600 mt-2">We deal in Edible Oils, Oilseeds, Grains and Pulses. Typical packaging: 50kg jute/poly bags or bulk containers.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p)=> (
            <div key={p.key} className="bg-white rounded shadow p-4 flex flex-col">
              <img src={p.img} alt={p.title} className="h-36 w-full object-cover rounded" />
              <div className="mt-3 flex-1">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{p.subtitle}</p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-gray-700">{p.price}</div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>handleQuote(p)} className="text-sm text-red-600">Request Quote</button>
                  <a href="/Canada_Trade_Hub_Catalog.pdf" className="text-sm text-gray-500" target="_blank" rel="noreferrer">Catalog</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="logistics" className="container mx-auto px-6 py-12 bg-gradient-to-r from-white to-gray-50">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold" style={{color:"var(--cth-red)"}}>Logistics & Export</h3>
            <p className="text-gray-600 mt-2">We coordinate export documentation, inspection, and container bookings. Typical export process includes: Quality testing, cleaning & grading, phytosanitary certificate, SGS/Intertek inspection, containerization, and shipping.</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>FOB (Vancouver / Montreal) or CFR (Jebel Ali, Karachi)</li>
              <li>Halal certification available on request</li>
              <li>Flexible MOQ: 20mt – 1,000mt (subject to product)</li>
            </ul>
          </div>
          <div>
            <div className="bg-white rounded shadow p-6">
              <h4 className="font-semibold">Our Partners</h4>
              <p className="text-sm text-gray-600 mt-2">We work with local cleaning facilities, export agents, and freight forwarders to ensure smooth shipments.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <strong>Inspection</strong>
                  <p>SGS / Intertek</p>
                </div>
                <div>
                  <strong>Freight</strong>
                  <p>CN Logistics, Kuehne+Nagel</p>
                </div>
                <div>
                  <strong>Ports</strong>
                  <p>Vancouver, Montreal</p>
                </div>
                <div>
                  <strong>Payment</strong>
                  <p>LC / TT / CAD & USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold" style={{color:"var(--cth-red)"}}>About Canada Trade Hub</h3>
        <p className="text-gray-600 mt-2">Canada Trade Hub is a Canadian-based commodity trading company specializing in the export of high-quality grains and pulses from Canada to the GCC, Pakistan, Afghanistan, and Central Asia. With partners located in Canada, the UAE, and Pakistan, we bridge the gap between Canadian farmers and international buyers.</p>
      </section>
      <section id="contact" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold" style={{color:"var(--cth-red)"}}>Contact Us</h3>
        <p className="text-gray-600 mt-2">Send us an inquiry and our team will respond within 24–48 hours.</p>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded shadow p-6">
            <form action="https://formspree.io/f/mwpqykzn" method="POST" className="grid gap-4">
              <input type="hidden" name="subject" value="Product Inquiry" />
              <div>
                <label className="text-sm">Name</label>
                <input id="name" name="name" required className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Company</label>
                <input id="company" name="company" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input id="phone" name="phone" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Commodity / Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full border rounded px-3 py-2" defaultValue="" />
              </div>
              <div>
                <button type="submit" className="w-full px-4 py-3 bg-red-600 text-white rounded">Send Inquiry</button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded shadow p-6">
              <h5 className="font-semibold">Head Office - Canada</h5>
              <p className="text-sm text-gray-600 mt-1">1280 Fewster Dr, Mississauga, ON L4W 1A4<br/>1-416-7053249<br/>1-647-9916458<br/>info@canadatradehub.ca</p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h5 className="font-semibold">UAE Office</h5>
              <p className="text-sm text-gray-600 mt-1">Ifza Business Park, DDP<br/>Dubai Selicon Oasis, UAE<br/>+971-50-5314405</p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h5 className="font-semibold">Pakistan Office</h5>
              <p className="text-sm text-gray-600 mt-1">E-93, Block B, Gulshan e Jamal, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Canada Trade Hub — All rights reserved.</p>
          <div className="text-sm text-gray-600">Follow: <a className="ml-2 text-red-600" href="#">LinkedIn</a></div>
        </div>
      </footer>
    </div>
  );
}