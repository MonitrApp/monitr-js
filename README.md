Monitr.io – Javascript Client Library
===


How To Use
---

**Setup:**

    Monitr.setup({
        "apiKey": "...",
        "domainKey": "..."
    });


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



