import { BarChart3, Link2, QrCode, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Shorten URLs",
    desc: "Create clean, memorable links in seconds.",
  },
  {
    icon: BarChart3,
    title: "Track Analytics",
    desc: "Monitor clicks and audience engagement.",
  },
  {
    icon: QrCode,
    title: "Generate QR Codes",
    desc: "Share links instantly with custom QR codes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Fast redirects backed by enterprise security.",
  },
];

const AuthHero = () => {
  return (
    <div className="flex-1 mr-2 mb-5 hidden rounded-md lg:visible bg-slate-950 p-5 text-white lg:flex lg:flex-col lg:justify-between">
      {/* Logo */}
        <div className="">
          <h2 className="text-4xl font-bold leading-tight">Welcome Back</h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Shorten, track and manage your links from one beautiful dashboard.
          </p>
        </div>
      

      {/* Features */}
      <div className="relative z-10 mt-10 space-y-6">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-500/10 p-3">
                <Icon className="text-emerald-400" size={22} />
              </div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthHero;
