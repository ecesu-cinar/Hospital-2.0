# Hospital 2.0 API's

This document explains the available API endpoints used in Hospital 2.0.

## Base URL

- Development: `http://localhost:8000/api/v1/`
- Production: `https://akademitip.com/api/v1/` *(replace when deployed)*

## Available Endpoints

### Doctors
- `GET /doctors/` - Get all doctors (paginated)
- `GET /doctors/{id}/` - Get specific doctor details

### Medical Units
- `GET /medical-units/` - Get all medical units (paginated)  
- `GET /medical-units/{id}/` - Get specific unit details
- `GET /medical-units/{id}/doctors/` - Get doctors in specific unit

### News
- `GET /news/` - Get all news articles (paginated)
- `GET /news/{id}/` - Get specific news article

### Gallery
- `GET /gallery-images/` - Get all gallery images (paginated)