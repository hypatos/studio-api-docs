const express = require('express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/openapi/api.yaml');
const cors = require('cors')
const port = 3000;

const app = express()

app.use(cors())


app.use('/docs', express.static('docs'));

app.listen(port, () => {
  console.log(`See the docs at http://localhost:${port}/docs/local.html`)
})