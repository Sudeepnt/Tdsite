const FormInput = ({ label, type = "text", placeholder }: any) => (
  <div className="mb-6">
    <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-[#111] border border-[#333] p-4 text-white focus:border-[#3035e6] outline-none transition-colors"
    />
  </div>
);

export default function Form() {
  return (
    <div className="min-h-screen w-full pt-32 px-8 md:px-20 text-white relative z-10 bg-black/50 backdrop-blur-sm">
       <h1 className="text-6xl font-bold tracking-tighter mb-12 text-[#3035e6]">Contact</h1>
       <form className="w-full max-w-xl">
         <div className="flex gap-4">
           <div className="w-1/2"><FormInput label="First Name" placeholder="Jane" /></div>
           <div className="w-1/2"><FormInput label="Last Name" placeholder="Doe" /></div>
         </div>
         <FormInput label="Email" type="email" placeholder="jane@studio.com" />
         <div className="mb-6">
           <label className="block text-xs uppercase tracking-widest mb-2 text-gray-500">Message</label>
           <textarea 
             rows={4}
             className="w-full bg-[#111] border border-[#333] p-4 text-white focus:border-[#3035e6] outline-none transition-colors"
           ></textarea>
         </div>
         <button className="bg-[#3035e6] text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
           Submit Application
         </button>
       </form>
    </div>
  );
}