import { createClient } from '@sanity/client'


export const client = createClient({
    projectId: "o21csfei",
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-05-03',
    token: "skNzzZk1S1gObHvcEi7zh2Bqie4M59Eamnu4iOTiR6CqMZWxMqJUdP8Rzy53OgmpEkxY5KXUwmv4rlCTlNp5Q2WTL6PKpQddEUvrdw41CffqGcYQMxxz3Sz0cdYQEws3wIm3i49R6fFenBLIYS1aE65nPAu5ttbR8u93R5zLbU4xUtcTa3sJ"
  })


