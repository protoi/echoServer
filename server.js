const express = require("express");
const router = require("express").Router();
const exp = express();
const port = 9999;

exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));


exp.get("/", (req, res) => {
    res.send("Hello world");
});

// exp.get("/name", (req, res) =>{
//     const username = req.query.username;
//     res.send(username);
// });

exp.get("/echo", (req, res) => {
    console.dir("logging message");
    const keyChecker = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    console.log(`token: ${keyChecker}, challenge: ${challenge}`)

    if (keyChecker === "helloworld") {
        res.send(challenge);
    }
    else
        res.sendStatus(403);
});

exp.post("/echo", (req, res) => {
    // console.log("hello world");
    // console.dir(req, { depth: null });

    const sender_number = req.body.entry[0].changes[0].value["messages"][0]["from"]
    const sent_message = req.body.entry[0].changes[0].value["messages"][0]["text"]["body"]

    console.log(`number: ${sender_number} message: ${sent_message}`)

    // const echotext = `Received message was "${req.body.echothis}"`;
    console.log(req.body);
    res.send(req.body);

});


exp.get


exp.listen(port, () => {
    console.log(`express app listening to port ${port}`);
});





a = { parser: HTTPParser { '0': null, '1': [Function: parserOnHeaders], '2': [Function: parserOnHeadersComplete], '3': [Function: parserOnBody], '4': [Function: parserOnMessageComplete], '5': [Function: bound onParserExecute], '6': [Function: bound onParserTimeout], _headers: [], _url: '', socket: [Circular * 4], incoming: [Circular * 5], outgoing: null, maxHeaderPairs: 2000, _consumed: true, onIncoming: [Function: bound parserOnIncoming], [Symbol(resource_symbol)]: HTTPServerAsyncResource { type: 'HTTPINCOMINGMESSAGE', socket: [Circular * 4] } }, on: [Function: socketListenerWrap], addListener: [Function: socketListenerWrap], prependListener: [Function: socketListenerWrap], setEncoding: [Function: socketSetEncoding], _paused: false, _httpMessage: [Circular * 6], [Symbol(async_id_symbol)]: 257, [Symbol(kHandle)]: TCP { reading: true, onconnection: null, _consumed: true, [Symbol(owner_symbol)]: [Circular * 4] }, [Symbol(lastWriteQueueSize)]: 0, [Symbol(timeout)]: null, [Symbol(kBuffer)]: null, [Symbol(kBufferCb)]: null, [Symbol(kBufferGen)]: null, [Symbol(kCapture)]: false, [Symbol(kSetNoDelay)]: true, [Symbol(kSetKeepAlive)]: false, [Symbol(kSetKeepAliveInitialDelay)]: 0, [Symbol(kBytesRead)]: 0, [Symbol(kBytesWritten)]: 0}, _header: null, _keepAliveTimeout: 5000, _onPendingData: [Function: bound updateOutgoingData], req: [Circular * 5], _sent100: false, _expect_continue: false, _maxRequestsPerSocket: 0, locals: [Object: null prototype] { }, [Symbol(kCapture)]: false, [Symbol(kBytesWritten)]: 0, [Symbol(kEndCalled)]: false, [Symbol(kNeedDrain)]: false, [Symbol(corked)]: 0, [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': ['X-Powered-By', 'Express'] }, [Symbol(kUniqueHeaders)]: null}, body: { object: 'whatsapp_business_account', entry: [{ id: '117859931196036', changes: [{ value: { messaging_product: 'whatsapp', metadata: { display_phone_number: '15550272657', phone_number_id: '105933825735159' }, contacts: [{ profile: { name: 'Protik Datta' }, wa_id: '919836147547' }], messages: [{ from: '919836147547', id: 'wamid.HBgMOTE5ODM2MTQ3NTQ3FQIAEhggN0VCMDA5QzE5QkFEMzAxQUFBQTRCMUNENjVDODA3MTMA', timestamp: '1674036125', text: { body: 'A' }, type: 'text' }] }, field: 'messages' }] }] }, _body: true, length: undefined, route: Route { path: '/echo', stack: [Layer { handle: [Function(anonymous)], name: '<anonymous>', params: undefined, path: undefined, keys: [], regexp: /^\/?$/i { fast_star: false, fast_slash: false }, method: 'post'}], methods: { post: true }}, [Symbol(kCapture)]: false, [Symbol(kHeaders)]: { host: 'echo-server-gmtrqsvvh-protoi.vercel.app', 'content-type': 'application/json', 'x-real-ip': '173.252.95.14', 'x-vercel-proxy-signature-ts': '1674036425', 'x-hub-signature': 'sha1=ab872b24d54fdf6836cb4f9a687d6265c6c7f892', 'x-vercel-ip-latitude': '37.751', 'x-vercel-forwarded-for': '173.252.95.14', 'x-vercel-id': 'cle1::qxsbr-1674036125666-f90e002249f2', forwarded: 'for=173.252.95.14;host=echo-server-gmtrqsvvh-protoi.vercel.app;proto=https;sig=0QmVhcmVyIDZkN2RjOTFlODY2Nzk0OTFjZTk4N2FlODg5ZjY1NmZkOGNhNjE0MWM4ODQxYTNiMWJhYjA2Y2M2NGQ1NjJjOTg=;exp=1674036425', 'x-vercel-deployment-url': 'echo-server-gmtrqsvvh-protoi.vercel.app', 'x-vercel-ip-longitude': '-97.822', accept: '*/*', 'x-forwarded-for': '173.252.95.14', 'x-forwarded-host': 'echo-server-gmtrqsvvh-protoi.vercel.app', 'x-vercel-ip-country': 'US', 'x-forwarded-proto': 'https', 'x-vercel-proxy-signature': 'Bearer 6d7dc91e86679491ce987ae889f656fd8ca6141c8841a3b1bab06cc64d562c98', 'accept-encoding': 'deflate, gzip', 'user-agent': 'facebookexternalua', 'content-length': '487', 'x-hub-signature-256': 'sha256=db24a863468decae1d049576b8b7dfe301cb09dca07a73c07ae6d5010215a9c7', 'x-vercel-proxied-for': '173.252.95.14', 'x-vercel-ip-timezone': 'America/Chicago', connection: 'close' }, [Symbol(kHeadersCount)]: 48, [Symbol(kTrailers)]: null, [Symbol(kTrailersCount)]: 0}}