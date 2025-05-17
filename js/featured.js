const SpeakersOne = [
  {
    name: 'TBD',
    position: 'TBD',
    description: 'TBD',
    featured_image: 'p.png',
  },
  {
    name: 'TBD',
    position: 'TBD',
    description: 'TBD',
    featured_image: 'p.png',
  },
  {
    name: 'TBD',
    position: 'TBD',
    description: 'TBD',
    featured_image: 'p.png',
  },

];
const speakersOneContainer = document.getElementById('speakers-1');
const allSpeakersOne = SpeakersOne
  .map(
    (speakersOnes) => `
      <div class="single-speaker">
      <div class="speaker-img">
          <img src="img/span-bg.png" class="img-bg" alt="Robust-Events-speaker-bg">
          <img src="img/speakers/${speakersOnes.featured_image}" class="sp-img" alt="Robust-Events-${speakersOnes.name}">
      </div>
      <div class="speaker-info">
          <h3 class="speaker-name">${speakersOnes.name}</h3>
          <span class="speaker-position">${speakersOnes.position}</span>
          <p class="about-speaker">${speakersOnes.description}</p>
      </div>
  </div>
    `,
  ).join('');
speakersOneContainer.innerHTML = allSpeakersOne;

// For second set of speakers

const SpeakersTwo = [
  {
    name2: 'TBD',
    position2: 'TBD',
    description2: 'TBD',
    featured_image2: 'p.png',
  },
  {
    name2: 'TBD',
    position2: 'TBD',
    description2: 'TBD',
    featured_image2: 'p.png',
  },
  {
    name2: 'TBD',
    position2: 'TBD',
    description2: 'TBD',
    featured_image2: 'p.png',
  },
];
const speakersTwoContainer = document.getElementById('speakers-2');
const allSpeakersTwo = SpeakersTwo
  .map(
    (speakersTwos) => `
      <div class="single-speaker">
      <div class="speaker-img">
          <img src="img/span-bg.png" class="img-bg" alt="Robust-Events-speaker-bg">
          <img src="img/speakers/${speakersTwos.featured_image2}" class="sp-img" alt="Robust-Events-${speakersTwos.name2}">
      </div>
      <div class="speaker-info">
          <h3 class="speaker-name">${speakersTwos.name2}</h3>
          <span class="speaker-position">${speakersTwos.position2}</span>
          <p class="about-speaker">${speakersTwos.description2}</p>
      </div>
  </div>
    `,
  ).join('');
speakersTwoContainer.innerHTML = allSpeakersTwo;