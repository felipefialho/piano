import * as offline from 'offline-plugin/runtime'; 
import { piano } from './js/piano';
import './app.styl';
 
piano();
offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
