
import React from 'react';
import SponsorCard from '../components/SponsorCard';
import sponsorsData from '../data/sponsors.json';

const Sponsors = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Patrocinadores</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Conheça as empresas que tornam o FlashClip possível.
          </p>
        </div>
      </section>
      
      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorsData.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                name={sponsor.name}
                logo={sponsor.logo}
                website={sponsor.website}
                social={sponsor.social}
              />
            ))}
          </div>
          
          <div className="mt-16 glass-card rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Quer ser um patrocinador?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Junte-se aos nossos patrocinadores e conecte sua marca a uma comunidade engajada de desenvolvedores e entusiastas de tecnologia.
            </p>
            <a 
              href="/contato" 
              className="btn-primary inline-block"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
