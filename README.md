evvit
=====

evvit is a ghetto clone of reddit using Node.JS and Express.

installation
=====
evvit requires:
* [Node.JS](http://nodejs.org/) and npm (which comes with Node)
* A MySQL compatible database.  evvit was developed against [MariaDB](https://mariadb.org/), however it should work with MySQL as well.
  * The default implementation connects to `evvit@localhost` with username and password `evvit`.

Before installing node dependencies, bcrypt's dependencies must be installed:
* [python2](http://www.python.org/)
* [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html)

After installing these preliminary depedencies and pulling the repository, run `npm install` in the base directory to fetch the required node modules.

Finally, run `node app` in the base directory to start up the server, and evvit will be served at [localhost:8080](http://localhost:8080/)

license
=====
evvit is distributed under the zlib license, the full text of which is available in the LICENSE file in the base directory of this repository.

attribution
=====
evvit was built using:
* [Node.JS](https://github.com/joyent/node)
* [Express](https://github.com/visionmedia/express)
* [node-orm2](https://github.com/dresende/node-orm2)
* [node-mysql](https://github.com/felixge/node-mysql)
* [swig](https://github.com/paularmstrong/swig)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [node.bcrypt.js](https://github.com/ncb000gt/node.bcrypt.js/)
* [passport](https://github.com/jaredhanson/passport)
* [passport-local](https://github.com/jaredhanson/passport-local)
