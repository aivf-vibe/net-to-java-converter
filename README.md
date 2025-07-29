

# .NET to Java Converter

A web application that converts .NET applications to Java with identical functionality. Simply submit your GitHub repository URL and receive a new repository with your converted Java application.

## Features

- **AI-Powered Conversion**: Advanced algorithms analyze .NET code and generate equivalent Java code
- **GitHub Integration**: Seamless repository cloning and new repo creation
- **Functionality Preservation**: Maintains exact business logic and functionality
- **Automated Testing**: Generated Java code includes comprehensive tests
- **Framework Mapping**: Maps .NET frameworks to Java equivalents (ASP.NET → Spring Boot, Entity Framework → Hibernate)

## Supported Technologies

### .NET Technologies
- .NET Core, .NET Framework, .NET 5/6/7
- ASP.NET MVC/Web API
- Entity Framework Core
- LINQ queries
- Dependency Injection
- Configuration management

### Java Technologies
- Spring Boot (Web, Data, Security)
- Hibernate/JPA
- Maven/Gradle build systems
- JUnit testing framework
- Spring Security
- Spring Data JPA

## Quick Start

### Prerequisites
- Python 3.8+
- Flask
- GitHub account

### Installation
1. Clone this repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the server:
   ```bash
   python app.py
   ```
4. Open your browser to `http://localhost:54466`

### Usage
1. Enter your .NET GitHub repository URL
2. Click "Convert to Java"
3. Wait for the conversion process to complete
4. Receive your new Java repository URL

## API Endpoints

- `POST /convert` - Convert .NET repository to Java
- `GET /health` - Health check endpoint

## Development

### Project Structure
```
net-to-java-converter/
├── app.py              # Flask backend server
├── index.html          # Main web interface
├── styles.css          # CSS styling
├── script.js           # Frontend JavaScript
├── requirements.txt    # Python dependencies
└── README.md          # This file
```

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License
MIT License - see LICENSE file for details

## Support
For issues and questions, please open an issue on GitHub.


