
import React, { useEffect } from 'react';
import './Client.css';

const Client = () => {
  useEffect(() => {
    const clientGrid = document.querySelector('.row.pt-lg-5');
    if (clientGrid) {
      clientGrid.classList.add('anime-row');
    }

    const clientBoxes = document.querySelectorAll('.client-hover-box');
    clientBoxes.forEach((box, index) => {
      box.style.animationDelay = `${index * 0.1}s`;
      box.style.opacity = '0';
      box.style.transform = 'translateY(20px)';

      setTimeout(() => {
        box.style.transition = 'all 0.6s ease';
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      }, 200 + index * 50);
    });

    clientBoxes.forEach(box => {
      box.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
      });

      box.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
      });
    });

    if ('ontouchstart' in window) {
      clientBoxes.forEach(box => {
        box.addEventListener('touchstart', function () {
          this.style.transform = 'scale(1.05)';
        });

        box.addEventListener('touchend', function () {
          this.style.transform = 'scale(1)';
        });
      });
    }
  }, []);

  const clients = [
    'ITC.svg',
    'B-natural.svg',
    'Sunfeast.svg',
    'patanjali-client.svg',
    'Omaxe.svg',
    'Lulu.svg',
    'afwa-client.svg',
    'Trontek.svg',
    'Wah-ji-wah.svg',
    'BKD.svg',
    'godgift.svg',
    'Kadimi.svg',
    'bha.svg',
    'complex.webp',
    'Evercrop.svg',
    'gottlich.svg',
    'hairmedics.svg',
    'kings.webp',
    'kona.svg',
    'mervx.svg',
    'mudran.webp',
    'noor.svg',
    'parttyhardd.webp',
    'player.svg',
    'raw.webp',
    'saffron.webp',
    'torway.webp',
    'aaivo-client.svg',
    'aaryabhog-client.svg',
    'afghan-saffron-client.svg',
    'alo-bliss-client.svg',
    'amaryllis-client.svg',
    'bargoti-client.svg',
    'bjp-client.svg',
    'freshia-client.svg',
    'grandma-client.svg',
    'gso-client.svg',
    'indiyankitchen-client.svg',
    'keth-client.svg',
    'kilembero-client.svg',
    'kings-client.svg',
    'nandivan-client.svg',
    'rugmam-client.svg',
    'seaol-client.svg',
    'star-client.svg',
    'tangerine-client.svg',
    'urbanchaat-client.svg',
    'volted-client.svg',
    'vyan-client.svg',
  ];

  return (
    <section className="client-section bg-white">
      <div className="container-fluid container-fluid-custom">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="h2 mb-0 h2-line pb-0 text-black heading-with-line">
              Our Clients
            </h2>
            <h3 className="mb-0 text-black fw-medium">our precious treasure box</h3>
          </div>
          <div className="col-lg-6">
            <p
              className="text-gray text-sm-justify mt-3 mt-md-0 mt-lg-0"
              style={{ color: '#141414' }}
            >
              Welcome to our precious box - every customer is precious to us - it's only their trust and cooperation make us who we are now. You can see a massive list, from top-listed ones to new birds. We created every brand uniquely and gave them a unique identity in the market.
            </p>
          </div>
        </div>

        <div className="row pt-lg-5 mt-lg-2">
          {clients.map((client, index) => (
            <div className="col-6 col-md-4 col-lg-2 pb-5 mb-4 text-center" key={index}>
              <div className="client-hover-box">
                <img
                  src={`/assets/clients/${client}`}
                  className="img-fluid one"
                  alt={client.split('.')[0]}
                />
                <img
                  src={`/assets/clients/${client}`}
                  className="img-fluid two"
                  alt={client.split('.')[0]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
