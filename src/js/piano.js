import { Howl } from 'howler';

export const piano = (piano) => {
  const notes = {
    '1C': new Howl({src: ['medias/261-C.mp3']}),
    '1Cs': new Howl({src: ['medias/277-C-sharp.mp3']}),
    '1D': new Howl({src: ['medias/293-D.mp3']}),
    '1Ds': new Howl({src: ['medias/311-D-sharp.mp3']}),
    '1E': new Howl({src: ['medias/329-E.mp3']}),
    '1F': new Howl({src: ['medias/349-F.mp3']}),
    '1Fs': new Howl({src: ['medias/369F-sharp.mp3']}),
    '1G': new Howl({src: ['medias/391-G.mp3']}),
    '1Gs': new Howl({src: ['medias/415-G-sharp.mp3']}),
    '2A': new Howl({src: ['medias/440-A.mp3']}),
    '2As': new Howl({src: ['medias/466-A-sharp.mp3']}),
    '2B': new Howl({src: ['medias/495-B.mp3']}),
    '2C': new Howl({src: ['medias/523-C.mp3']}),
    '2Cs': new Howl({src: ['medias/545-C-sharp.mp3']}),
    '2D': new Howl({src: ['medias/587-D.mp3']}),
    '2Ds': new Howl({src: ['medias/622-D-sharp.mp3']}),
    '2E': new Howl({src: ['medias/659-E.mp3']}),
    '2F': new Howl({src: ['medias/698-F.mp3']}),
    '2Fs': new Howl({src: ['medias/698-F-sharp.mp3']}),
    '2G': new Howl({src: ['medias/783-G.mp3']}),
    '2Gs': new Howl({src: ['medias/830-G-sharp.mp3']}),
    '3A': new Howl({src: ['medias/880-A.mp3']}),
    '3As': new Howl({src: ['medias/932-A-sharp.mp3']}),
    '3B': new Howl({src: ['medias/987-B.mp3']})
  };  

  window.addEventListener('keydown', (e) => { 
    const keyNo = e.which;
    const $key = document.querySelector(`[data-key='${keyNo}']`) || '';

    if ($key) {
      const note = $key.getAttribute('data-note'); 
      notes[note].play(); 
      $key.classList.add('active');  
      setTimeout(() => $key.classList.remove('active'), 100);
    }
  });

  document.querySelectorAll('[data-key]').forEach((key) => {  
    key.addEventListener('click', (e) => { 
      const note = key.getAttribute('data-note');   
      notes[note].play(); 
    });
  });
};
