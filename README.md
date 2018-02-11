# AngularPRBuild 

#Install dependencies:
```
npm install
```

#Host on a local server
```
python -m SimpleHTTPServer
```

Go to http://127.0.0.1:8000

# PR Build does the following:
```
npm install
python -m SimpleHTTPServer &
FOO_PID=$!
sleep 10
curl 127.0.0.1:8000
kill $FOO_PID
./node_modules/.bin/karma start karma.conf.js
```
