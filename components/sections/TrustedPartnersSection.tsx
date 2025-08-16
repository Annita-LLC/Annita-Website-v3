import Image from 'next/image'

const TrustedPartnersSection = () => {
  const partners = [
    {
      name: 'African Union',
      image: '/images/Trusted and Back By/African Union.png',
      description: 'Official partner of the African Union'
    },
    {
      name: 'EU-TAF',
      image: '/images/Trusted and Back By/EU-TAF.jpg',
      description: 'Supported by EU Technical Assistance Facility'
    },
    {
      name: 'Orange Digital Center',
      image: '/images/Trusted and Back By/Orange Digital Center.jpg',
      description: 'Partner of Orange Digital Center'
    },
    {
      name: 'Mansa Due Diligence',
      image: '/images/Trusted and Back By/Mansa Due Deligence Data Platform (1).jpg',
      description: 'Mansa Due Diligence Data Platform'
    },
    {
      name: 'Wakanow',
      image: '/images/Trusted and Back By/Wakanow.jpg',
      description: 'Strategic partner Wakanow'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">
            Trusted & Backed By
          </h2>
                      <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Annita is supported by leading organizations and institutions across Africa and Europe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-soft p-4 mb-4 flex items-center justify-center group-hover:shadow-medium transition-all duration-300">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
                              <h3 className="text-lg font-semibold text-orange-600 mb-2">{partner.name}</h3>
                <p className="text-sm text-neutral-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedPartnersSection
