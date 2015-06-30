module.exports = {
  plugins: {
    sauce: {
      disabled: true,
      browsers: [
      	"OS X 10.10/chrome",
        "OS X 10.10/firefox",
      	'OS X 10.10/safari',
      	'Windows 8.1/internet explorer'
  	  ]
    },
    local: {
      disabled: true,
      browsers: ["chrome"]
    }
  },
};

