const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cv = require('opencv');
const fs = require('fs');

app.get('/', (req, res) => [
    res.sendFile(path.join(__dirname, 'index.html'))
])

try {
    let camera = new cv.VideoCapture(0);
    let fps = 30;

    setInterval(function () {
        camera.read((err, im) => {
            if (err) throw err;
            /* */
            im.detectObject("./data/haarcascade_frontalface_alt.xml", {}, function (err, faces) {
                if (err) throw err;

                for (var i = 0; i < faces.length; i++) {
                    var face = faces[i];
                    im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2);
                    im.save('./storage/last-detected.png');
                }

                im.save('./storage/face-detection.png');
                console.log('Image saved to ./face-detection.png');
            });

            /* 
            if (im.size()[0] > 0 && im.size()[1] > 0) {
                window.show(im);
            }
            */

            let buff = fs.readFileSync('./storage/face-detection.png');
            let base64data = buff.toString('base64');
            io.emit('image', base64data);
            // window.blockingWaitKey(0, 50);
        });
    }, 100);

    setInterval(function () {
        let buff = fs.readFileSync('./storage/last-detected.png');
        let base64slow = buff.toString('base64');
        io.emit('bucket', base64slow);
    }, 1000);

} catch (e) {
    console.log("Couldn't start camera:", e)
}

server.listen(3000);