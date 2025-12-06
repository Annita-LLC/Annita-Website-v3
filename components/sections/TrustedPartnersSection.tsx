import Image from 'next/image'

const TrustedPartnersSection = () => {
  const partners = [
    {
      name: 'African Union',
      image: '/images/Trusted and Back By/African Union.png',
      description: 'Supported by African Union'
    },
    {
      name: 'EU-TAF',
      image: '/images/Trusted and Back By/EU-TAF.jpg',
      description: 'Supported by EU Technical Assistance Facility'
    },
    {
      name: 'Orange Digital Center',
      image: '/images/Trusted and Back By/Orange Digital Center.jpg',
      description: 'Supported by Orange Digital Center'
    },
    {
      name: 'Mansa Due Diligence',
      image: '/images/Trusted and Back By/Mansa Due Deligence Data Platform (1).jpg',
      description: 'Supported by Mansa Due Diligence Data Platform'
    },
    {
      name: 'AFCFTA',
      image: '/images/Trusted and Back By/AFCFTA.jpeg',
      description: 'Supported by AFCFTA'
    },
    {
      name: 'WIPO',
      image: '/images/Trusted and Back By/wipo-logo.135f9f24.png',
      description: 'Supported by WIPO'
    },
    {
      name: 'Impact Her',
      image: '/images/Trusted and Back By/impact-her-logo.c810e589.png',
      description: 'Supported by Impact Her'
    },
    {
      name: 'ITC',
      image: '/images/Trusted and Back By/itc-logo.ca7c27e0.png',
      description: 'Supported by International Trade Centre'
    },
    {
      name: 'ATG',
      image: '/images/Trusted and Back By/atg-logo.82dbee15.png',
      description: 'Supported by ATG'
    },
    {
      name: 'EU TAF Support',
      image: '/images/Trusted and Back By/eu_taf_support_to_the_afcfta_logo.jpeg',
      description: 'EU TAF Support to AFCFTA'
    },
    {
      name: 'UNDP',
      image: '/images/Trusted and Back By/undp-logo.5180ec1d.png',
      description: 'Supported by UNDP'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-4 sm:mb-6">
            Trusted & Backed By
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Annita is supported by leading organizations and institutions across Africa and Europe.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 flex flex-col items-center text-center group min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]">
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-soft p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center group-hover:shadow-medium transition-all duration-300">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xs font-semibold text-orange-600 mb-1">{partner.name}</h3>
                <p className="text-xs text-neutral-600 hidden md:block">{partner.description}</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 flex flex-col items-center text-center group min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]">
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-soft p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center group-hover:shadow-medium transition-all duration-300">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xs font-semibold text-orange-600 mb-1">{partner.name}</h3>
                <p className="text-xs text-neutral-600 hidden md:block">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @media (min-width: 640px) {
          .animate-scroll {
            animation-duration: 18s;
          }
        }
        
        @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 16s;
          }
        }
        
        @media (min-width: 1024px) {
          .animate-scroll {
            animation-duration: 14s;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TrustedPartnersSection
