import React, {useState} from "react";
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // replace with your Formspree endpoint
export default function CanadaTradeHub(){
  const products = [
    { title: "Palm Cooking Oil", subtitle: "Export Grade", price: "Contact for Price", key: "cooking-oil", img: "/images/palmoil.jpg" },
    { title: "Margarine", subtitle: "Export Grade", price: "Contact for Price", key: "margarine", img: "/images/margarines.jpg" },
    { title: "Shortening", subtitle: "Export Grade", price: "Contact for Price", key: "shortening", img: "/images/shortening.jpg" },
    { title: "Confectionery Fats", subtitle: "Export Grade", price: "Contact for Price", key: "confectionery-fats", img: "/images/confectioneryfats.jpg" },
    { title: "Whole Red Lentils", subtitle: "50kg bags — Bagged", price: "Contact for Price", key: "red-lentils", img: "/images/red-lentils.jpg" },
    { title: "Large Green Lentils", subtitle: "50kg bags — Bagged", price: "Contact for Price", key: "green-lentils", img: "/images/green-lentils.jpg" },
    { title: "Canola (Seed & Oil)", subtitle: "Seed, Oil, Meal — Export", price: "Contact for Price", key: "canola", img: "/images/canola.jpg" },
    { title: "Durum Wheat", subtitle: "High-protein — Export Grade", price: "Contact for Price", key: "durum", img: "/images/durum-wheat.jpg" },
    { title: "High-Protein Wheat", subtitle: "Export Grade", price: "Contact for Price", key: "hp-wheat", img: "/images/hero-grain.jpg" },
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
    <div className="min-h-screen bg-[color:var(--cth-cream)] text-[color:var(--cth-ink)]">
      <header className="bg-white/80 border-b border-white/60 backdrop-blur">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Canada Trade Hub" className="h-14 w-14 object-contain rounded" />
            <div>
              <h1 className="text-lg font-bold" style={{color:"var(--cth-red)"}}>Canada Trade Hub</h1>
              <p className="text-xs text-[color:var(--cth-slate)]">Trusted Canadian Commodities Exporter/Importer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-[color:var(--cth-red)]">Products</a>
            <a href="#logistics" className="hover:text-[color:var(--cth-red)]">Logistics</a>
            <a href="#about" className="hover:text-[color:var(--cth-red)]">About</a>
            <a href="#contact" className="px-4 py-2 rounded-full text-white bg-[color:var(--cth-red)] hover:bg-[color:var(--cth-red-dark)]">Contact</a>
          </nav>
        </div>
      </header>
      <section className="container mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 border border-white/60 shadow-sm p-8 lg:p-12 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[color:var(--cth-maple)]/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[color:var(--cth-red)]/15 blur-3xl"></div>
        <div className="lg:w-1/2">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--cth-slate)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cth-red)]"></span>
            Canadian Export/Import Partner
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold leading-tight text-[color:var(--cth-red)]">Quality Canadian Grains & Pulses and Palm Oil products — Export/Import With Trust</h2>
          <p className="mt-4 text-[color:var(--cth-slate)]">We source directly from farms, co-ops and processors across Saskatchewan, Alberta and Manitoba. Supplying bagged and bulk shipments to GCC, Pakistan, Afghanistan, and Central Asia.</p>
          <p className="mt-3 text-[color:var(--cth-slate)]">We source high-quality and premium grade Palm cooking oil, margarine, shortening and specialty fats from Southeast Asian region.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full text-white bg-[color:var(--cth-red)] hover:bg-[color:var(--cth-red-dark)] shadow-sm">Request a Quote</a>
            <a href="#products" className="px-5 py-3 rounded-full border border-[color:var(--cth-slate)]/30 hover:border-[color:var(--cth-red)]">View Products</a>
          </div>
          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--cth-slate)]">Trusted Across</div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--cth-ink)]">
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">GCC</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">Pakistan</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">Afghanistan</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">Central Asia</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">UAE</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">Canada</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-white/60">
            <div className="grid h-72 w-full grid-cols-2 divide-x divide-white/80">
              <img src="/images/main.jpg" alt="Canadian grain" className="h-full w-full object-cover" />
              <img src="/images/indopalmoil.jpg" alt="Palm oil" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="container mx-auto px-6 pb-6">
        <div className="grid gap-4 rounded-3xl bg-white/80 border border-white/60 shadow-sm p-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--cth-ink)]">Why Work With Us</h3>
            <p className="text-sm text-[color:var(--cth-slate)] mt-2">A pragmatic partner for steady supply and clear documentation.</p>
          </div>
          <div className="text-sm text-[color:var(--cth-slate)]">
            <strong className="text-[color:var(--cth-ink)]">Fast Turnaround</strong>
            <p className="mt-1">Direct sourcing and export/import-ready logistics.</p>
          </div>
          <div className="text-sm text-[color:var(--cth-slate)]">
            <strong className="text-[color:var(--cth-ink)]">Compliance Ready</strong>
            <p className="mt-1">COA, phyto, and third-party inspection available.</p>
          </div>
          <div className="text-sm text-[color:var(--cth-slate)]">
            <strong className="text-[color:var(--cth-ink)]">Competitive Pricing</strong>
            <p className="mt-1">Flexible terms for spot and contract buyers.</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--cth-slate)]/30 to-transparent"></div>
      </div>
      <section id="products" className="container mx-auto px-6 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold text-[color:var(--cth-red)]">Products</h3>
            <p className="text-[color:var(--cth-slate)] mt-2">We deal in Edible Oils, Oilseeds, Grains and Pulses. Typical packaging: 50kg jute/poly bags or bulk containers.</p>
            <p className="text-xs text-[color:var(--cth-slate)] mt-2">Availability and pricing are subject to market and seasonal supply.</p>
          </div>
          <a href="/Canada_Trade_Hub_Catalog.pdf" className="text-sm text-[color:var(--cth-red)] border border-[color:var(--cth-red)]/30 px-4 py-2 rounded-full hover:border-[color:var(--cth-red)]" target="_blank" rel="noreferrer">Download Catalog</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p)=> (
            <div key={p.key} className="bg-white/90 rounded-2xl border border-white/70 shadow-sm p-4 flex flex-col hover:shadow-md transition-all hover:-translate-y-0.5">
              <img src={p.img} alt={p.title} className="h-36 w-full object-cover rounded-xl" />
              <div className="mt-3 flex-1">
                <h4 className="font-semibold text-[color:var(--cth-ink)]">{p.title}</h4>
                <p className="text-xs text-[color:var(--cth-slate)] mt-1">{p.subtitle}</p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[color:var(--cth-slate)]/10">
                <div className="text-sm text-[color:var(--cth-ink)]">{p.price}</div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>handleQuote(p)} className="text-sm text-[color:var(--cth-red)]">Request Quote</button>
                  <a href="/Canada_Trade_Hub_Catalog.pdf" className="text-sm text-[color:var(--cth-slate)]" target="_blank" rel="noreferrer">Catalog</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--cth-slate)]/30 to-transparent"></div>
      </div>
      <section id="logistics" className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-white/80 border border-white/60 shadow-sm p-8 lg:p-10">
          <div>
            <h3 className="text-2xl font-bold text-[color:var(--cth-red)]">Logistics & Export</h3>
            <p className="text-[color:var(--cth-slate)] mt-2">We coordinate export and import documentation, inspection, and container bookings. Typical process includes: Quality testing, cleaning & grading, phytosanitary certificate, SGS/Intertek inspection, containerization, and shipping.</p>
            <ul className="mt-4 list-disc list-inside text-[color:var(--cth-slate)]">
              <li>FOB (Vancouver / Montreal) or CFR (Jebel Ali, Karachi)</li>
              <li>Halal certification available on request</li>
              <li>Flexible MOQ: 20mt – 1,000mt (subject to product)</li>
              <li>Typical lead time: 2–4 weeks after confirmation</li>
              <li>Payment terms: LC / TT in CAD or USD</li>
            </ul>
          </div>
          <div>
          <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6">
            <h4 className="font-semibold text-[color:var(--cth-ink)]">Our Partners</h4>
            <p className="text-sm text-[color:var(--cth-slate)] mt-2">We work with local cleaning facilities, export/import agents, and freight forwarders to ensure smooth shipments.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--cth-ink)]">
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">MOQ: 20–1,000mt</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">FOB / CFR Terms</span>
              <span className="rounded-full border border-[color:var(--cth-slate)]/20 bg-white/70 px-3 py-1">SGS / Intertek</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[color:var(--cth-ink)]">
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
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--cth-slate)]/30 to-transparent"></div>
      </div>
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-3xl bg-white/80 border border-white/60 shadow-sm p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-[color:var(--cth-red)]">Quality & Compliance</h3>
          <p className="text-[color:var(--cth-slate)] mt-2">We prioritize consistency and documentation to meet import requirements.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-[color:var(--cth-slate)]">
            <div className="rounded-2xl bg-white/70 border border-white/70 px-4 py-3">
              <strong className="text-[color:var(--cth-ink)]">Certificates of Analysis</strong>
              <p className="mt-1">COA provided per shipment.</p>
            </div>
            <div className="rounded-2xl bg-white/70 border border-white/70 px-4 py-3">
              <strong className="text-[color:var(--cth-ink)]">Phytosanitary</strong>
              <p className="mt-1">Official phytosanitary certificates available.</p>
            </div>
            <div className="rounded-2xl bg-white/70 border border-white/70 px-4 py-3">
              <strong className="text-[color:var(--cth-ink)]">Third-Party Inspection</strong>
              <p className="mt-1">SGS / Intertek inspection options.</p>
            </div>
            <div className="rounded-2xl bg-white/70 border border-white/70 px-4 py-3">
              <strong className="text-[color:var(--cth-ink)]">Halal Certification</strong>
              <p className="mt-1">Available on request.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--cth-slate)]/30 to-transparent"></div>
      </div>
      <section id="about" className="container mx-auto px-6 py-12">
        <div className="rounded-3xl bg-white/80 border border-white/60 shadow-sm p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-[color:var(--cth-red)]">About Canada Trade Hub</h3>
          <p className="text-[color:var(--cth-slate)] mt-2">Canada Trade Hub is a Canadian-based commodity trading company specializing in the export of high-quality grains and pulses from Canada to the GCC, Pakistan, Afghanistan, and Central Asia, and the import of high-quality and premium grade palm cooking oil, margarine, shortening, and specialty fats from Southeast Asia. With partners located in Canada, the UAE, and Pakistan, we bridge the gap between Canadian farmers, regional producers, and international buyers.</p>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--cth-slate)]/30 to-transparent"></div>
      </div>
      <section id="contact" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-[color:var(--cth-red)]">Contact Us</h3>
        <p className="text-[color:var(--cth-slate)] mt-2">Send us an inquiry and our team will respond within 24–48 hours.</p>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6">
            <form action="https://formspree.io/f/mwpqykzn" method="POST" className="grid gap-4">
              <input type="hidden" name="subject" value="Product Inquiry" />
              <div>
                <label className="text-sm">Name</label>
                <input id="name" name="name" required className="mt-1 w-full border border-[color:var(--cth-slate)]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--cth-red)]/20" />
              </div>
              <div>
                <label className="text-sm">Company</label>
                <input id="company" name="company" className="mt-1 w-full border border-[color:var(--cth-slate)]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--cth-red)]/20" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full border border-[color:var(--cth-slate)]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--cth-red)]/20" />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input id="phone" name="phone" className="mt-1 w-full border border-[color:var(--cth-slate)]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--cth-red)]/20" />
              </div>
              <div>
                <label className="text-sm">Commodity / Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full border border-[color:var(--cth-slate)]/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--cth-red)]/20" defaultValue="" />
              </div>
              <div>
                <button type="submit" className="w-full px-4 py-3 rounded-full bg-[color:var(--cth-red)] hover:bg-[color:var(--cth-red-dark)] text-white">Send Inquiry</button>
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6">
              <h5 className="font-semibold">Head Office - Canada</h5>
              <p className="text-sm text-[color:var(--cth-slate)] mt-1">1280 Fewster Dr, Mississauga, ON L4W 1A4<br/>1-416-7053249<br/>1-647-9916458<br/>info@canadatradehub.ca</p>
            </div>
            <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6">
              <h5 className="font-semibold">UAE Office</h5>
              <p className="text-sm text-[color:var(--cth-slate)] mt-1">Ifza Business Park, DDP<br/>Dubai Selicon Oasis, UAE<br/>+971-50-6897898</p>
            </div>
            <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6">
              <h5 className="font-semibold">Pakistan Office</h5>
              <p className="text-sm text-[color:var(--cth-slate)] mt-1">E-93, Block B, Gulshan e Jamal, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[color:var(--cth-slate)]">© {new Date().getFullYear()} Canada Trade Hub — All rights reserved.</p>
          <div className="text-sm text-[color:var(--cth-slate)]">Follow: <a className="ml-2 text-[color:var(--cth-red)]" href="#">LinkedIn</a></div>
        </div>
      </footer>
      <a href="#contact" className="fixed bottom-5 right-5 z-50 md:hidden rounded-full bg-[color:var(--cth-red)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--cth-red)]/30">
        Request a Quote
      </a>
    </div>
  );
}
