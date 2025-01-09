# Hello Photo! An Azure Project

A **Load-Balanced NGINX Reverse Proxy** setup with:

- **Node.js**, **Express**, and Embedded JavaScript (EJS) for dynamic HTML rendering  
- Integrated **Azure SQL Database** and **Blob Storage**  
- A **Virtual Network** with **NAT Gateway** and backend subnet  
- **Azure Backup** for virtual machines in the backend pool

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

## Deployment Overview

This deployment features a scalable architecture with:

- **Load Balancer**: Distributes incoming HTTP traffic to two backend VMs.
- **NGINX Servers**: Each VM runs an NGINX server as a reverse proxy, forwarding HTTP requests to a Node.js server.
- **Node.js Application**: 
  - Retrieves image URLs for the landing page from an **Azure SQL Database**.
  - Uses **Embedded JavaScript (EJS)** with **Express.js** to dynamically generate HTML.
  - Accesses the SQL database via a **NAT Gateway**.

### Image and Data Handling
- Images are served directly from **Azure Blob Storage** to the client browser.
- **Azure Backup** is implemented to protect the VMs against ransomware and accidental data loss.

### Architectural Diagram
![alt text](https://amyfisticuffs.github.io/images/azure-arch.jpeg)

### Information Flow Diagram
![alt text](https://amyfisticuffs.github.io/images/azure-info-flow.jpeg)

