---
type: concept
title: hwebserver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "c86f791abaa7"
---
(https://www.sidefx.com/docs/houdini/hwebserver/index.html "Functions and classes for running a web server inside a graphical or non-graphical Houdini session.")
Functions and classes for running a web server inside a graphical or non-graphical Houdini session.
-   Houdini’s embedded web server is a multi-threaded HTTP server written in C++ that can call Python functions (or C++ extensions) to handle web requests.
-   Its primary intended use is to build service-oriented APIs to access Houdini scene data.
-   There is only one global embedded web server for each running instance of Houdini.
-   You can specify path handlers using the [hwebserver.urlHandler](https://www.sidefx.com/docs/houdini/docs/houdini/hwebserver/urlHandler.html "Decorator for functions that handle requests to Houdini’s web server.") decorator, or build an API using the [hwebserver.apiFunction](https://www.sidefx.com/docs/houdini/hwebserver/apiFunction.html "Decorator for functions that can be called through an API endpoint on Houdini’s web server, returning JSON or binary responses.") decorator.
-   Then, you can start the embedded server using [hwebserver.run](https://www.sidefx.com/docs/houdini/hwebserver/run.html "Starts Houdini’s web server."):
    hwebserver.run(8008, debug=True)
    Note
    If you call this function from a non-graphical session, it _will not return_ (unless the server is interrupted or server code calls [hwebserver.requestShutdown](https://www.sidefx.com/docs/houdini/hwebserver/requestShutdown.html "Tells Houdini’s web server to shut down after serving all open requests.")).
-   To try out the server from the command line:
    1.  Put the following code in a `server.py` file:
        `server.py`
        import hou import hwebserver   @hwebserver.urlHandler("/") def my_handler(request):
         return hwebserver.Response( "Hello from Houdini %s" % hou.applicationVersionString())   if __name__ == "__main__":
         hwebserver.run(8008, debug=True) 
    2.  In a shell with the Houdini environment set up, run `hython server.py`.
    3.  Point a browser to `https://www.sidefx.com/docs/houdini/` to see the output.
    4.  Stop the server by pressing ⌃ Ctrl + C (Linux and Mac) or ⌃ Ctrl + Break/⌃ Ctrl + ScrLk on Windows.
## SUBTOPICS
## CLASSES
-   [hwebserver.Request](https://www.sidefx.com/docs/houdini/hwebserver/Request.html "A request made to Houdini’s web server.")
    A request made to Houdini’s web server.
-   [hwebserver.Response](https://www.sidefx.com/docs/houdini/hwebserver/Response.html "A response made back from Houdini’s web server.")
    A response made back from Houdini’s web server.
-   [hwebserver.UploadedFile](https://www.sidefx.com/docs/houdini/hwebserver/UploadedFile.html "A file uploaded in a request made to Houdini’s web server.")
    A file uploaded in a request made to Houdini’s web server.
-   [URLHandler](https://www.sidefx.com/docs/houdini/hwebserver/URLHandler_class.html "The general purpose HTTP handler.")
    The general purpose HTTP handler.
-   [AsyncURLHandler](https://www.sidefx.com/docs/houdini/hwebserver/AsyncURLHandler_class.html "The general purpose Async HTTP handler.")
    The general purpose Async HTTP handler.
-   [WebSocket](https://www.sidefx.com/docs/houdini/hwebserver/WebSocket_class.html "Base class for WebSocket support with the embedded server.")
    Base class for WebSocket support with the embedded server.
## STARTING AND STOPPING
-   [hwebserver.run](https://www.sidefx.com/docs/houdini/hwebserver/run.html "Starts Houdini’s web server.")
    Starts Houdini’s web server.
-   [hwebserver.requestShutdown](https://www.sidefx.com/docs/houdini/hwebserver/requestShutdown.html "Tells Houdini’s web server to shut down after serving all open requests.")
    Tells Houdini’s web server to shut down after serving all open requests.
-   [hwebserver.isInDebugMode](https://www.sidefx.com/docs/houdini/hwebserver/isInDebugMode.html "Returns True if Houdini’s web server was started in debug mode debug=True in )")
    Returns True if Houdini’s web server was started in debug mode debug=True in )
## HANDLING WEB REQUESTS AND RETURNING RESPONSES
-   [hwebserver.urlHandler](https://www.sidefx.com/docs/houdini/hwebserver/urlHandler.html "Decorator for functions that handle requests to Houdini’s web server.")
    Decorator for functions that handle requests to Houdini’s web server.
-   [hwebserver.errorResponse](https://www.sidefx.com/docs/houdini/hwebserver/errorResponse.html "Generates a Response object representing an HTTP error.")
    Generates a Response object representing an HTTP error.
-   [hwebserver.notFoundResponse](https://www.sidefx.com/docs/houdini/hwebserver/notFoundResponse.html "Generates a Response object representing a 404 Not Found HTTP error.")
    Generates a Response object representing a 404 Not Found HTTP error.
-   [hwebserver.fileResponse](https://www.sidefx.com/docs/houdini/hwebserver/fileResponse.html "Generates a Response object that sends the contents of a file.")
    Generates a Response object that sends the contents of a file.
-   [hwebserver.redirect](https://www.sidefx.com/docs/houdini/hwebserver/redirect.html "Generates a Response object representing a 301 Moved or 302 Found HTTP response.")
    Generates a Response object representing a 301 Moved or 302 Found HTTP response.
-   [hwebserver.registerStaticFilesDirectory](https://www.sidefx.com/docs/houdini/hwebserver/registerStaticFilesDirectory.html "Tells Houdini’s web server to check the given directory for files to automatically serve for URLs that match the given path prefix.")
    Tells Houdini’s web server to check the given directory for files to automatically serve for URLs that match the given path prefix.
-   [hwebserver.registerOpdefPath](https://www.sidefx.com/docs/houdini/hwebserver/registerOpdefPath.html "Tells Houdini’s web server to use the specified prefix as a handler to serve opdef requests.")
    Tells Houdini’s web server to use the specified prefix as a handler to serve opdef requests.
-   [hwebserver.registerWSGIApp](https://www.sidefx.com/docs/houdini/hwebserver/registerWSGIApp.html "Function used to register a wsgi capable application such as django to be used on a path prefix.")
    Function used to register a wsgi capable application such as django to be used on a path prefix.
-   [hwebserver.registerASGIApp](https://www.sidefx.com/docs/houdini/hwebserver/registerASGIApp.html "Function used to register a asgi capable application such as django to be used on a path prefix.")
    Function used to register a asgi capable application such as django to be used on a path prefix.
-   [hwebserver.setSettingsForPort](https://www.sidefx.com/docs/houdini/hwebserver/setSettingsForPort.html "Set the settings for a specific port.")
    Set the settings for a specific port.
## WEBSOCKET
-   [WebSocket](https://www.sidefx.com/docs/houdini/hwebserver/WebSocket_class.html "Base class for WebSocket support with the embedded server.")
    Base class for WebSocket support with the embedded server.
-   [hwebserver.webSocket](https://www.sidefx.com/docs/houdini/hwebserver/webSocket.html "Decorator for registering WebSocket classes with Houdini’s web server.")
    Decorator for registering WebSocket classes with Houdini’s web server.
## API CALLS
-   [hwebserver.apiFunction](https://www.sidefx.com/docs/houdini/hwebserver/apiFunction.html "Decorator for functions that can be called through an API endpoint on Houdini’s web server, returning JSON or binary responses.")
    Decorator for functions that can be called through an API endpoint on Houdini’s web server, returning JSON or binary responses.
-   [hwebserver.APIError](https://www.sidefx.com/docs/houdini/hwebserver/APIError.html "Raise this exception in apiFunction handlers to indicate an error.")
    Raise this exception in apiFunction handlers to indicate an error.