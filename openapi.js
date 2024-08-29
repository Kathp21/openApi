
// const fs = require('fs')
// const yaml = require('js-yaml')

// const openApiSpec = {
//     openapi: '3.0.0',
//     info: {
//         title: 'My API',
//         version: '1.0.0',
//         description: 'A simple API for photo booth rental',
//     },
//     servers: [
//         {
//             url: 'http://localhost:3000',
//         },
//     ],
//     paths: {
//         '/api/bookingCalendar': {
//             get: {
//                 summary: 'Retrieve a list of availability',
//                 responses: {
//                     '200': {
//                         description: 'A list of day availability',
//                         content: {
//                             'application/json': {
//                                 schema: {
//                                     type: 'array',
//                                     items: {
//                                         type: 'object',
//                                         properties: {
//                                             date: {
//                                                 type: 'string',
//                                                 example: '2024-8-20',
//                                             },
//                                             time_blocks: {
//                                                 type: 'array',
//                                                 items: {
//                                                     type: 'object',
//                                                     properties: {
//                                                         start_time: {
//                                                             type: 'string',
//                                                             example: '14:00',
//                                                         },
//                                                         end_time: {
//                                                             type: 'string',
//                                                             example: '20:00',
//                                                         }
//                                                     }
//                                                 }
//                                             }

//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// //Convert the Javascript object to YAML
// const yamlStr = yaml.dump(openApiSpec)

// //Write the YAML content to a file
// fs.writeFileSync('./openapi.yaml', yamlStr, 'utf8')

// console.log('YAML file created succesfully')