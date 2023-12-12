const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async(req, res) => {
    const {username} = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "5006e0cb-e50a-4839-81f5-465236a12397"}}
        )
        return res.status(r.status).json(r.data);
    } catch (err) {
        return res.status(err.response.status).json(err.response.data);
    }


    // 5006e0cb-e50a-4839-81f5-465236a12397
    return res.json({username:username, secret:"sha256..."});
});


app.listen(5000, () => {
    console.log("listening at port 5000...");
});