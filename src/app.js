import * as offline from 'offline-plugin/runtime'; 
import './app.styl';
 
offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
