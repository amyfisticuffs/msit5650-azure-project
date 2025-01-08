# Hello Photo! An Azure Project

A **Load-Balanced NGINX Reverse Proxy** setup with:

- **Node.js**, **Express**, and Embedded JavaScript (EJS) for dynamic HTML rendering  
- Integrated **Azure SQL Database** and **Blob Storage**  
- A **Virtual Network** with **NAT Gateway** and backend subnet  
- **Azure Backup** for virtual machines in the backend pool

This project showcases a scalable, secure, and resilient architecture leveraging Azure services to deliver dynamic web content.

## App Features

This app enables users to apply Instagram-like filters to images, with options to:

- Choose from online sample images or upload images from their computer.
- Take a photo using their computer and upload it (supported in limited browsers).

### Filters and Attribution
- Includes 26 filters derived from [Una Kravets’ CSSGram](https://github.com/una/CSSgram), utilizing CSS filters that require no additional VM installations.
- Sample images are sourced from:
  - The National Gallery of Art's free and open-access collection.
  - **Pixabay**, under the Pixabay content license (free to use without attribution).

Acknowledgment and appreciation go to the creators of these resources.
