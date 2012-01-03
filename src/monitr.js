var Monitr = (function( undefined ){
	
	var context = this,
		win = window,
		doc = document,
		monitr;
	
	
	monitr = {
		API_URL: "http://api.monitr.io/1/",
		
		VERSION: "0.0.2",
		
		ERROR_CODES: {
			error: "error",
			warning: "warning",
			parse: "parse",
			notice: "notice",
			deprecated: "deprecated"
		}
	};
	
	monitr.extend = function(){
		
		var source, target, 
			args = arguments,
			len = args.length;
		
		if( len === 1 ){
			target = this;
			source = arguments[ 0 ];
		}else{
			target = arguments[ 0 ];
			source = arguments[ 1 ];
		}
		
		for( var name in source ){
			
			target[ name ] = source[ name ];
			
		}
		
		return target;
		
	};
	
	
	monitr.extend({
				
		options: {
			defaultErrorCode: monitr.ERROR_CODES.warning,
			overrideErrorHandler: true
		},
		
		setup: function( options ){
			
			this.options = monitr.extend( this.options, options );
			
			if( this.options.overrideErrorHandler ){
				window.onerror = function( msg, url, line ){
					Monitr.log({
						message: msg,
						file: url,
						line: line,
						code: monitr.ERROR_CODES.error
					});
				}
			}
		},
		log: function(){
			
			var args = arguments,
				argLen = args.length,
				data,
				dataUrl = '';
				i = 0;
				
			if( argLen === 1 ){
				data = args[0];
			}else{
				data = {
					message: args[ i++ ],
					code: args[ i++ ] || monitr.options.defaultErrorCode,
					file: args[ i++ ] || "",
					line: args[ i++ ] || ""
				};
			}
			data = monitr.extend(data, {
				lang: "Javascript",
				api_key: monitr.options.apiKey,
				domain: monitr.options.domainKey
			});
			
			for( var key in data )
				dataUrl += key + "=" + encodeURIComponent( data[ key ] ) + "&";
			
			
			reqwest({
    			url: monitr.API_URL + 'log?' + dataUrl + 'callback=?',
			    type: 'jsonp'
			})
			
		},
		
		
		warn: function( msg ){
			monitr.log( msg, monitr.ERROR_CODES.warn );
		},
		error: function( msg ){
			monitr.log( msg, monitr.ERROR_CODES.error );
		},
		info: function( msg ){
			monitr.log( msg, monitr.ERROR_CODES.notice );
		}
		
	});
	
	return monitr;
	
})( );
