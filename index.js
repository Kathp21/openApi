const express = require('express')
const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const openApiSpec = yaml.load(fs.readFileSync('./openapi.yaml', 'utf8'))

const app = express()

app.use(express.json())
// app.get('./openapi.yaml', (res, req) => {
//     const filePath = path.join(__dirname, 'openapi.yaml')
//     res.sendFile(filePath)
// })

app.get('/api/bookingCalendar', (req, res) => {
    // Your logic to handle the request
    res.json([
      {
        date: '2024-8-20',
        time_blocks: [
          { start_time: '14:00', end_time: '20:00' },
          { start_time: '10:00', end_time: '12:00' }
        ]
      }
    ]);
  });

app.get('/api/album/:album_id', (req, res) => {
    const albumId = req.params.album_id

    if ( albumId === '239843') {
        res.json ({
            album_id: 239843,
            album_title: "Brian's birthday",
            photo_urls: [
                'http://example.com/photos/1.jpg',
                'http://example.com/photos/2.jpg'
            ]
        })
    } else {
        res.status(404).json({ message: 'Album not found'})
    }
})

app.post('/api/getQuote', (req, res) => {
    const { client_name, email, phoneNumber, numberOfGuests, eventTypes, hoursPhotoBooth, hoursDj, date, start_time, ceremonyStartTime, ceremonyEndTime, receptionStartTime, receptionEndTime } = req.body

    res.json ({
        client_name,
        email,
        phoneNumber,
        numberOfGuests,
        eventTypes,
        hoursPhotoBooth,
        hoursDj,
        date,
        start_time,
        ceremonyStartTime,
        ceremonyEndTime,
        receptionEndTime,
        receptionStartTime
    })
})

app.get('/api/galleryList', (req, res) => {
    try {
        res.json ([
            {
                thumbnail_image_url: "http://example.com/photos/1.jpg",
                background_image_url: "http://example.com/photos/1.jpg",
                album_title: "Kelvin's birthday",
                event_date: "2024-06-09",
                event_type: "Birthday",
                album_id: 239843,
            }
        ])
    } catch (error) {
        res.status(500).json({ error: "Something went wrong"})
    }
   
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Swagger UI is available at http://localhost:3000/api-docs');
});