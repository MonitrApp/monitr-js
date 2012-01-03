Monitr.io – Javascript Client Library
===


How To Use
---

**Setup:**

    Monitr.setup({
        "apiKey": "...",
        "domainKey": "..."
    });


**API Key**


Here you get your API-Key:

http://monitr.io/request-api-key




**Domain Key**

Go to your profiles ( http://monitr.io/profiles ).

![Screenshot](http://d3j5vwomefv46c.cloudfront.net/photos/full/488321426.png?Expires=1325616954&Key-Pair-Id=APKAIYVGSUJFNRFZBBTA&Signature=Lqzc2jOsLWwyztJMW9ZVvJdX~LLh9Oe~KfaeD9QtCLjQAVM6Q6M8opbNsFMpdUjWgWzB46EwyTavo0UDBsEIQdJioBIqkilIq7zXI8ZSCBPil1-cypD2dC6N2b~0Vh8vIhHbpVJECq9AqZUXsco3bttsg~2iSEabAD0J~Bv2X5E_)


Other Setup Options:

* `defaultErrorCode` – the default errorcode ( default: Monitr.ERROR_CODES.warning )
* `overrideErrorHandler` - override the window.onerror handler ( default: true )

**Log an error:**

    Monitr.log({
        "code": Monitr.ERROR_CODES.error,
        "message": "Something bad happened :("
    });



or

    Monitr.log("Something bad happened :(", Monitr.ERROR_CODES.error);
    
    Monitr.log("Another bad thing happened :S"); // default error code
    
    Monitr.warn("Some warning");
    
    Monitr.error("Some error");
    
    Monitr.info("Some info");


Error Codes
---

    Monitr.ERROR_CODES.
        error
        warning
        parse
        notice
        deprecated




Author
---

Phillip Dornauer < phillip.dornauer@gmail.com > @phillipdornauer


Website
---

[http://Monitr.io](http://monitr.io)



