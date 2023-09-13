 /**
   * script to use recapacha on webpage
   * check api key from recapacha website and replace in your site key
   */
      var onloadCallback = function() {
        grecaptcha.render('example1', {
          'sitekey' : 'your_site_key',
          'theme' : 'dark'
        });
        grecaptcha.render('example2', {
          'sitekey' : 'your_site_key'
        });
      };
