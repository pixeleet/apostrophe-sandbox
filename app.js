/* jshint node:true */

var site = require('apostrophe-site')({

  // This line is required and allows apostrophe-site to use require() and manage our NPM modules for us.
  root: module,
  shortName: 'apostrophe-sandbox',
  hostName: 'apostrophe-sandbox',
  title: 'Apostrophe Sandbox',
  sessionSecret: 'apostrophe sandbox demo party',
  adminPassword: 'demo',

  // Force a2 to prefix all of its URLs. It still
  // listens on its own port, but you can configure
  // your reverse proxy to send it traffic only
  // for URLs with this prefix. With this option
  // "/" becomes a 404, which is supposed to happen!

  // prefix: '/test',

  // If true, new tags can only be added by admins accessing
  // the tag editor modal via the admin bar. Sometimes useful
  // if your folksonomy has gotten completely out of hand
  lockTags: false,

  // Give users a chance to log in if they attempt to visit a page
  // which requires login
  secondChanceLogin: true,

  locals: {
    loginButton: true
  },

  lockups: {
    left: {
      label: 'Left',
      tooltip: 'Float Small',
      icon: 'icon-arrow-left',
      // Only allows one type of widget
      widgets: [ 'slideshow' ],
      // Override the options for slideshows when they are inside the lockup to get the size right
      slideshow: {
        size: 'one-third'
      },
      video: {
        size: 'one-half'
      }
    },
    right: {
      label: 'Right',
      tooltip: 'Float Right',
      icon: 'icon-arrow-right',
      widgets: [ 'slideshow', 'video' ],
      slideshow: {
        size: 'one-half'
      },
      video: {
        size: 'one-half'
      }
    }
  },

  // Here we define what page templates we have and what they will be called in the Page Types menu.

  // For html templates, the 'name' property refers to the filename in ./views/pages, e.g. 'default'
  // refers to '/views/pages/default.html'.

  // The name property can also refer to a module, in the case of 'blog', 'map', 'events', etc.

  pages: {
    types: [
      { name: 'default', label: 'Default (Two Column)' },
      { name: 'onecolumn', label: 'One Column' },
      { name: 'blocks', label: 'Blocks' },
      { name: 'marquee', label: 'Marquee' },
      { name: 'home', label: 'Home Page' },
      { name: 'blog', label: 'Blog' },
      { name: 'events', label: 'Events' },
      { name: 'map', label: 'Map' },
      { name: 'groups', label: 'Directory' }
    ]
  },

  // These are the modules we want to bring into the project.
  modules: {
    // Styles required by the new editor, must go FIRST
    'apostrophe-ui-2': {},
    'apostrophe-blog-2': {},
    'apostrophe-events': {},
    'apostrophe-people': {
      email: {
        from: 'Tommy Boutell <tom@example.com>'
      }
    },
    'apostrophe-groups': {},
    'apostrophe-map':      {},
    // The new editor
    'apostrophe-editor-2': {},
    'apostrophe-blocks': {
      types: [
        {
          name: 'one',
          label: 'One Column'
        },
        {
          name: 'two',
          label: 'Two Column'
        }
      ]
    },
    'apostrophe-search': {},
    'apostrophe-redirects': {}
  },

  // These are assets we want to push to the browser.
  // The scripts array contains the names of JS files in /public/js,
  // while stylesheets contains the names of LESS files in /public/css
  assets: {
    scripts: ['site'],
    stylesheets: ['site']
  },
  sanitizeHtml: {
    allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
  'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br',
  'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      h1: [ 'class' ],
      h2: [ 'class' ],
      h3: [ 'class' ],
      // We don't currently allow img itself by default, but this
      // would make sense if we did
      img: [ 'src' ],
      p: ['class']
    },
    allowedClasses: {
      'h1': ['ui x-large pink header'],
      'h2': ['ui large pink header'],
      'p': ['ui small gray sub header', 'ui small header']
    }
  }
  // beforeEndAssets: function(callback) {
  //   // Apostrophe already loads these for logged-out users, but we
  //   // want them all the time in this project.
  //   site.apos.pushAsset('script', { name: 'vendor/blueimp-iframe-transport', when: 'always' });
  //   site.apos.pushAsset('script', { name: 'vendor/blueimp-fileupload', when: 'always' });
  //   return callback(null);
  // }
});
