import '../styles/index.scss';
import App from './app';

new App();

if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
  });

  module.hot.accept(function() {
    // module or one of its dependencies was just updated
  });
}