require('dotenv').config();
const express = require('express');
const { connectDevDB, sequelize } = require('./config/database');
const allowCredentials = require('./middleware/allowCredentials');
const cors = require('cors');
const corsConfig = require('./config/corsConfig');
const cookieParser = require('cookie-parser');

// Conectar a la base de datos antes de cualquier otra cosa
connectDevDB();

const app = express();

const PORT = 4000;

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log('Tablas sincronizadas');
});

// Solucionar el error 'Access-Control-Allow-Credentials'
app.use(allowCredentials);

// Solucionar errores de CORS
app.use(cors(corsConfig));

app.use(express.urlencoded({ extended: false })); // Obtener acceso al cuerpo de la solicitud/form-data
app.use(express.json()); // Obtener JSON en la solicitud
app.use(cookieParser()); // Obtener acceso a las cookies

app.use(express.static('public'));

// Rutas
app.use('/', require('./routes/store'));
app.use('/payments', require('./routes/payments'));
app.use('/mail', require('./routes/mail'));
app.use('/auth', require('./routes/authentication'));
app.use('/admin', require('./routes/admin'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
