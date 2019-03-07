'use strict'
const fs = require('fs')
const bencode = require('bencode')

const raw_torrent = fs.readFileSync('puppy.torrent')
const torrent = bencode.decode(raw_torrent)

console.log(torrent.announce.toString('utf8'))



//The above code just requires the fs Node library and our torrent file- Note that readFileSync returns a Buffer, it's important
//to have a good understanding of how Buffers work, as all our network messages are sent and recieved in the form of buffers

//The short version is that buffers are a sequence of raw bytes- if you want to read the buffer as a string then you have to specify
// an encoding scheme (you can see that we have used utf8 above.)

//The output of this programme thus far looks pretty incomprehensible- but this is because it is outputing the data in a
//serialisation format I haven't seen before (bencode.) The idea here is the same as with JSON or XML- but different format.

//Already- things to try and understand:
//1) buffers
//2) encoding schemes
//3) bencode and serialisation formats
//4) What does readFileSync do?
//5) What does Announce do?

//npm install bencode --save
