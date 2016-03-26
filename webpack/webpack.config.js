var path=require('path');
var js_dir=__dirname+'/dev'

module.exports = {
  entry :'./main.js',
  output: {
    filename: './public.js'
  },
  resolve: {
  	alias:{
  		'autoJS':js_dir+'autoJS.js'
  	},
    extensions: ['', '.coffee', '.js']
  }
}