import React from "react";
import { companies, company } from "@/data";

const Clients = () => {
  const allCompanies = [...company, ...companies];

  return (
    <section id="techstack" className="py-20">
      <h1 className="heading">
        Technologies I <span className="text-purple">work with</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* ✅ GRID layout instead of flex */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-16 mt-10">
          {allCompanies.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2">
              {/* Logo */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-black-200 rounded-lg border border-white/10 p-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Name */}
              <span className="text-white-200 text-sm md:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
